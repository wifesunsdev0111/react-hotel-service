const { model, Schema, mongoose } = require("mongoose");

const PlaceSchema = new Schema({
  zip: String,
  state_name: String,
  state_abbr: String,
  state_fips: String,
  state_ansi: String,
  place_geoid: String,
  place_name: String,
  place_type: String,
  place_fips: String,
  place_ansi: String,
  percent_of_zip_area_in_place: String,
  percent_of_place_area_in_zip: String,
  percent_of_zip_land_area_in_place: String,
  percent_of_place_land_area_in_zip: String,
  percent_of_zip_population_in_place: String,
  percent_of_place_population_in_zip: String,
  percent_of_zip_households_in_place: String,
  percent_of_place_households_in_zip: String,
});

const Place = model("place_overlap", PlaceSchema);

module.exports = Place;
