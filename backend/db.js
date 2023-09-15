const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = async()=>{
    try {
        const conn = await mongoose.connect(mongoURI);
        console.log("Connected successfully to Mongo!!");
    } catch (error) {
        console.error(error.message);
    }
    
    
    
}

module.exports = connectToMongo;