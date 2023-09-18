const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/test_DB";

const connectToMongo = async()=>{
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected successfully to Mongo!!");
    } catch (error) {
        console.error(error.message);
    }

    
}

module.exports = connectToMongo;