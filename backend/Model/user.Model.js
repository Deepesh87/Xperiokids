const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username : {type :String},
    emailID : {type :String},
    password : {type : String},
})


const UserModel = mongoose.model("user",userSchema)

module.exports = UserModel