const { model, Schema, mongoose } = require("mongoose");

const AcsHistoricalSchema = new Schema({
  zip: String,
  year: String,
  population: String,
  population_margin_of_error: String,
  households: String,
  households_margin_of_error: String,
});

const AcsHistorical = model("acs_historical", AcsHistoricalSchema);

module.exports = AcsHistorical;
