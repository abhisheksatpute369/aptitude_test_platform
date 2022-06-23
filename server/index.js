const mongoose = require("mongoose");
const express  = require("express");
const cors = require("cors");


// middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());

// database connection
mongoose.connect("mongodb://localhost:27017/registerstudent",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("database connected succefully!")
}) 

//routes
app.post("/login", (req, res) => {
    res.send("my login info");
})

app.post("/signup", (req, res) => {
    res.send("my signup info");
})

app.listen(9002, () => {
    console.log("Listen on port 9002");
})