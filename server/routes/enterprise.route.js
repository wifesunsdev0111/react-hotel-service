const express = require("express");

const {
  getAllData,
  geZipCodeData,
  getRecentZipCode,
  getPopularZipCode,
} = require("../controllers/enterprise.controller.js");

const router = express.Router();

router.get("/all/:searchValue", getAllData);
router.get("/data/:searchValue", geZipCodeData);
router.get("/recent", getRecentZipCode);
router.get("/popular", getPopularZipCode);

module.exports = router;
