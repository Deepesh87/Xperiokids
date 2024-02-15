const mongoose = require("mongoose")
require('dotenv').config()

const connection = async()=>{
   await mongoose.connect(process.env.DATABASE_URL)
}

module.exports = connection