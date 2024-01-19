const mongoose = require('mongoose');
const mongoURI = process.env.URI

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
