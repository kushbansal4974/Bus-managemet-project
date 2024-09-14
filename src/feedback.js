const mongoose = require("mongoose")
const { type } = require("os")
const connect = mongoose.connect("mongodb://localhost:27017/login")
 
// check database connected or not
connect.then(()=>{
    console.log("Database succesfully connected to feedback")
}).catch(()=>{
    console.log("Server is not connected to feedback")
})

// create a schema
const FeedbackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    feedback: {
        type: String,
        required: true
    }
})

// collection part
const feedback = new mongoose.model("feedback_data", FeedbackSchema);

module.exports = feedback;