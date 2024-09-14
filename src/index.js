const express = require('express');
const path = require("path");
const bcrypt = require("bcrypt");
const collection = require("./config")
const feedback = require("./feedback")
const app = express();
const port = 3000;

// convert data into json file
app.use(express.json())

app.use(express.urlencoded({extended: false}))

// use ejs as the view engine
app.set('view engine', 'ejs')
// static file
app.use(express.static("public"))

app.get('/', (req, res) => {
  res.render("home_first")
})

app.get('/login', (req, res) => {
  res.render("login")
})

app.get('/signup', (req, res)=>{
    res.render("signup")
})

app.get('/help', (req, res)=>{
    res.render("help")
})
app.get('/feedback', (req, res)=>{
    res.render("feedback")
})
app.get('/contact', (req, res)=>{
    res.render("contact")
})



// Register user
app.post("/signup",async (req,res)=>{

    const data = {
        email: req.body.email,
        password: req.body.password
    }

    // check if the user already exists in the database
    const existingUser = await collection.findOne({email: data.email})

    if(existingUser){
        res.send("User Registred")
    }else{
        // hash the password
        res.render("login")
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(data.password, saltRounds)

        data.password = hashedPassword

        const userdata = await collection.insertMany(data)
        console.log(userdata)
    }

    
})

// login user
app.post("/", async (req,res)=>{
    try{
        const check = await collection.findOne({email: req.body.email})
        if (!check){
            res.send("ERROR 404: username cannot found")
        }

        // compare the hash password from the database with the plain text
        const isPasswordMatch = await bcrypt.compare(req.body.password, check.password)
        if(isPasswordMatch){
            res.render("home")
        }else{
            res.send("wrong password")
        }
    }catch{
        res.send("wrong Details")
    }
})

// // feedback data into database
// app.post("/feedback",async(req,res)=>{
//     try{
//         const feed = {
//             name : req.body.name,
//             email : req.body.email,
//             feedback : req.body.feedback,

//         }

//         const feeddata = await feedback.insertMany(feed)
//         console.log(feeddata)
//     }catch{
//     console.log(e)
// }
// })

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})