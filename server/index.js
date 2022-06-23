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
    const {email,password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user)
        {
            if(password === user.password)
            {
                res.send({messege:"Login Successful", user:user})
            }
            else
            {
                res.send({messege: "wrong password"})
            }
        }
        else
        {
            res.send({messege : "user not registered"})
        }
    })
})

app.post("/signup", (req, res) => {
    const {firstName,lastName,email,password} = req.body
    //check if allready exist or not
    User.findOne({email: email}, (err, user) => {
        if(user)
        {
            res.send({messege: "User already exist!"})
        }
        else
        {
            const user = new User({
                firstName,lastName,email,password
            })
            user.save(err => {
                if(err)
                {             //for checking if any err at connection
                    res.send(err)
                }
                else
                {
                    res.send({messege: "successfully Registered"})
                }
            })
        }
    })
    
})

app.listen(9002, () => {
    console.log("Listen on port 9002");
})
//Routes end