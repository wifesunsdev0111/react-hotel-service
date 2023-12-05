const { model, Schema, mongoose } = require("mongoose");

const IrsHistoricalSchema = new Schema({
  zip: String,
  year: String,
  population: String,
  population_margin_of_error: String,
  households: String,
  households_margin_of_error: String,
});

const IrsHistorical = model("irs_historical", IrsHistoricalSchema);

module.exports = IrsHistorical;
