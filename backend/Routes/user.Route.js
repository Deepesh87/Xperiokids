const express = require("express");
const bcrypt = require("bcrypt")
const UserModel = require("../Model/user.Model");

const UserRoute = express.Router();

UserRoute.get("/", (req, res) => {
  res.send("Hello World");
});

UserRoute.post("/register", async (req, res) => {
  const {
    username,
    emailID,
    password,
    firebaseId,
    firebaseDisplayName,
    firebaseEmail,
  } = req.body;
  try {

    let user;
    if(username&&emailID&&password){
    bcrypt.hash(password,10,(err,hash)=>{
        user = {
            username : username,
            emailID: emailID,
            password : hash
        }
    })
      
    }else if(firebaseId&&firebaseDisplayName&&firebaseEmail){
        user = {
            firebaseEmail : firebaseEmail,
            firebaseId : firebaseId,
            firebaseDisplayName : firebaseDisplayName
        }
    }
    await UserModel.create(user);
    res.send({msg : "User is Registered Successfully"})
  } catch (error) {
    res.send({msg : error})
  }
});

UserRoute.post("/login",(req,res)=>{
    
})

module.exports = UserRoute;
