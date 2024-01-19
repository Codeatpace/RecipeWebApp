const mongoose = require('mongoose');
const {Schema} = mongoose;
const recipesSchema = new Schema({
    dishName : {
        type: String,
        required: true
    },
    ingredients : {
        type: String,
        required: true
    },
    steps : {
        type: String,
        required: true
    },
    imgSrc : {
        type: String,
        required: true
    },
})
module.exports = mongoose.model('recipe', recipesSchema)