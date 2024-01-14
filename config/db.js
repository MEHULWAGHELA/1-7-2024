require('dotenv').config();
const mongoose = require("mongoose");
const MONGOURL = process.env.MONGODB_URL;
const db = async () => {
    try {
        await mongoose.connect(MONGOURL)
        console.log("database connected")
    }
    catch (error) {
        console.log(error)
    }
}

module.exports = db