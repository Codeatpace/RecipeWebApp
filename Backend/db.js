const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config({path:'./Info.env'})
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
