const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  content: String,
  swell: String,
  wind: String,
});

const surfSpotSchema = new Schema({
  name: String,
  location: Number,
  reviews: [reviewSchema],
});

module.exports = mongoose.model("surfSpot", surfSpotSchema);
