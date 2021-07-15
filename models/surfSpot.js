const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
    {
    content: String,
    swell: String, 
    wind: String,   
});


const surfSpotSchema = new Schema({
    name: String, 
    location: Number,
    reviews: [reviewSchema]
})

//compile the schema into a model and export it 

module.exports = mongoose.model('surfSpot', surfSpotSchema)

// form to create a new surfspot