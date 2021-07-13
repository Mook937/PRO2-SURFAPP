const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const surfSpotSchema = new Schema({
    name: String, 
    location: Number,
    
})

//compile the schema into a model and export it 

module.exports = mongoose.model('surfSpot', surfSpotSchema)

// form to create a new surfspot