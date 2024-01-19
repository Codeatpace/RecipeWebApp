const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://singhsakshidb:Sakshi.22@cluster0.jbryvkn.mongodb.net/Recipe?retryWrites=true&w=majority"

const mongoDB = async () => {
    try{
        await mongoose.connect(mongoURI);
        console.log("Connection Successful")
    }
    catch(err){
        console.log(err)
    }
}

module.exports = mongoDB