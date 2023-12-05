const Enterprise = require("../models/Enterprise.model.js");
const County = require("../models/County.model.js");
const Place = require("../models/Place.model.js");
const AcsHistorical = require("../models/AcsHistorical.model.js");
const IrsHistorical = require("../models/IrsHistorical.model.js");
const cheerio = require("cheerio");
const axios = require("axios");

const getAllData = async (req, res, next) => {
  const { searchValue } = req.params;
  let stateSearch;
  console.log(new RegExp(searchValue + " county", "i"));
  let result;
  try {
    // Get state info as name and abbr.
    await County.aggregate([
      {
        $group: {
          _id: {
            state_name: "$state_name",
            state_abbr: "$state_abbr"
          }
        }
      },
      {
        $project: {
          state_name: "$_id.state_name",
          state_abbr: "$_id.state_abbr",
          _id: 0
        }
      }
    ]).then((stateData) => {
      stateData.map((data) => {
        if (
          data.state_name.toLowerCase() === searchValue.toLowerCase() ||
          data.state_abbr.toLowerCase() === searchValue.toLowerCase()
        ) {
          stateSearch = data.state_abbr;
        }
      });
    });

    if (stateSearch) {
      await Enterprise.find(
        { state: stateSearch },
        {
          zip: 1,
          type: 1,
          primary_city: 1,
          acceptable_cities: 1,
          unacceptable_cities: 1,
          county: 1,
          area_codes: 1
        }
      )
        .lean()
        .then((results) => {
          result = results.map((result, index) => ({
            id: index + 1,
            zip: result.zip,
            type: result.type,
            primary_city: result.primary_city,
            acceptable_cities: result.acceptable_cities,
            unacceptable_cities: result.unacceptable_cities,
            county: result.county,
            area_codes: result.area_codes
          }));
        });

      res.status(200).json({ result });
    } else {
      await Enterprise.find({
        county: { $regex: new RegExp(searchValue + " county", "i") }
      })
        .lean()
        .then((results) => {
          result = results.map((result, index) => ({
            id: index + 1,
            zip: result.zip,
            type: result.type,
            primary_city: result.primary_city,
            acceptable_cities: result.acceptable_cities,
            unacceptable_cities: result.unacceptable_cities,
            county: result.county,
            area_codes: result.area_codes
          }));
        });
      if (result.length !== 0) {
        res.status(200).json({ result });
      } else {
        await Enterprise.find({ zip: searchValue }).then((results) => {
          result = results.map((result, index) => ({
            id: index + 1,
            zip: result.zip,
            type: result.type,
            primary_city: result.primary_city,
            acceptable_cities: result.acceptable_cities,
            unacceptable_cities: result.unacceptable_cities,
            county: result.county,
            area_codes: result.area_codes
          }));
          if (result.length !== 0) {
            res.status(200).json({ result });
          } else {
            if (searchValue === "start search") {
              res.status(200).json({ message: "start search" });
            } else {
              res.status(200).json({ message: "no match" });
            }
          }
        });
      }
    }
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const geZipCodeData = async (req, res, next) => {
  const { searchValue } = req.params;
  const currentYear = new Date().getFullYear();
  const targetYear = currentYear - 9;
  try {
    await Enterprise.aggregate([
      { $match: { zip: searchValue } },
      {
        $lookup: {
          from: "irs_historicals",
          localField: "zip",
          foreignField: "zip",
          as: "irsHistoricals"
        }
      },
      { $unwind: "$irsHistoricals" },
      {
        $match: {
          "irsHistoricals.year": { $gte: targetYear.toString() }
        }
      }
    ]).then((data) => {
      if (data.length !== 0) {
        // Update the searchDate and searchCount fields
        Enterprise.find({ zip: searchValue }).then((zipData) => {
          let count;
          if (zipData.length > 0 && zipData[0].searchCount == undefined) {
            count = 1;
          } else {
            count = (zipData.length > 0 ? zipData[0].searchCount : 0) + 1;
          }
          Enterprise.updateOne(
            { zip: searchValue },
            {
              $set: {
                searchDate: new Date(),
                searchCount: count
              }
            }
          )
            .then(() => {
              res.status(200).json({ result: data });
            })
            .catch((error) => {
              console.log(error);
              res
                .status(500)
                .json({ message: "Failed to update enterprise data" });
            });
        });
      } else {
        res.status(200).json({ message: "no match" });
      }
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getRecentZipCode = async (req, res, next) => {
  var currentDate = new Date();
  var oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
  try {
    await Enterprise.find(
      {
        searchDate: {
          $gte: oneMonthAgo,
          $lte: currentDate
        }
      },
      {
        zip: 1,
        _id: 0
      }
    )
      .then((datas) => {
        if (datas.length !== 0) {
          res.status(200).json({ datas });
        } else {
          res.status(200).json({ message: "no match" });
        }
      })
      .catch((error) => {
        res.status(200).json({ message: "no match" });
      });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const getPopularZipCode = async (req, res, next) => {
  try {
    await Enterprise.find(
      {
        searchCount: {
          $gte: 3
        }
      },
      {
        zip: 1,
        _id: 0
      }
    )
      .then((datas) => {
        if (datas.length !== 0) {
          res.status(200).json({ datas });
        } else {
          res.status(200).json({ message: "no match" });
        }
      })
      .catch((error) => {
        res.status(200).json({ message: "no match" });
      });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  getAllData,
  geZipCodeData,
  getRecentZipCode,
  getPopularZipCode
};
