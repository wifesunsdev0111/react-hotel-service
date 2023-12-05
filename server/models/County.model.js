const { model, Schema, mongoose } = require("mongoose");

const CountySchema = new Schema({
  zip: String,
  state_name: String,
  state_abbr: String,
  state_fips: String,
  state_ansi: String,
  county_geoid: String,
  county_name: String,
  county_fips: String,
  county_ansi: String,
  percent_of_zip_area_in_county: String,
  percent_of_county_area_in_zip: String,
  percent_of_zip_land_area_in_county: String,
  percent_of_county_land_area_in_zip: String,
  percent_of_zip_population_in_county: String,
  percent_of_county_population_in_zip: String,
  percent_of_zip_households_in_county: String,
  percent_of_county_households_in_zip: String,
});

const County = model("county_overlap", CountySchema);

module.exports = County;
