const express = require("express")
const connection = require("./utils/server")
const UserRoute = require("./Routes/user.Route")
require('dotenv').config()
const cors = require("cors");
const app = express()
app.use(cors())
app.use(express.json())

app.use("/user",UserRoute)


app.listen(process.env.PORT,()=>{
    try {
        connection()
        console.log(`Server is connected on ${process.env.PORT}`)
    } catch (error) {
        console.error(error)      
    }
})