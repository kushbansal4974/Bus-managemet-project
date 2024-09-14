const mongoose = require("mongoose")
const { type } = require("os")
const connect = mongoose.connect("mongodb://localhost:27017/login")
 
// check database connected or not
connect.then(()=>{
    console.log("Database succesfully connected")
}).catch(()=>{
    console.log("Server is not connected")
})

// create a schema
const LoginSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
})

// collection part
const collection = new mongoose.model("users", LoginSchema)

module.exports = collection;