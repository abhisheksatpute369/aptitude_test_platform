const mongoose = require("mongoose");
const express  = require("express");
const cors = require("cors");


// middlewares start
const app = express();
app.use(express.json());
app.use(express.urlencoded())
app.use(cors());
//middleware end

// database connection start
mongoose.connect("mongodb://localhost:27017/registerstudent",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("database connected succefully!")
})
//database connection end 

//define user schema
const userSchema = new mongoose.Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

//routes start
app.post("/login", (req, res) => {
    res.send("my login info");
})

app.post("/signup", (req, res) => {
    res.send("my signup info");
})

app.listen(9002, () => {
    console.log("Listen on port 9002");
})
//Routes end