require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// const winston = require('winston');
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 5000;
const User = require('./models/User');
const {auth} =require('./middlewares/auth');

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
// Database connection
mongoose
    .connect('mongodb+srv://journalinKuy:journalinKUY@cluster0.g3aq7y0.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true,
    })
    .then(() => console.log("Connected to the databases!"))
    .catch((err) => console.log(err))


app.post('/register',function(req,res){
    const newuser=new User(req.body);
    console.log(newuser);
 
    // if(newuser.password!=newuser.password2)return res.status(400).json({message: "password not match"});
    
    User.findOne({email:newuser.email},function(err,user){
        if(user) return res.status(400).json({ auth : false, message :"email exits"});
 
        newuser.save((err,doc)=>{
            if(err) {console.log(err);
                return res.status(400).json({ success : false});}
            res.status(200).json({
                succes:true,
                user : doc
            });
        });
    });
});

app.post('/login', function(req,res){
    let token=req.cookies.auth;
    User.findByToken(token,(err,user)=>{
        if(err) return  res(err);
        if(user) return res.status(400).json({
            error :true,
            message:"You are already logged in"
        });
    
        else{
            User.findOne({'email':req.body.email},function(err,user){
                if(!user) return res.status(400).json({isAuth : false, message : ' Auth failed ,email not found'});
        
                user.comparepassword(req.body.password,(err,isMatch)=>{
                    if(!isMatch) return res.json({ isAuth : false,message : "password doesn't match"});
        
                user.generateToken((err,user)=>{
                    if(err) return res.status(400).send(err);
                    res.cookie('auth',user.token)
                    res.status(200).json({
                        isAuth : true,
                        id : user._id,
                        email : user.email,
                        name : user.name,
                        token : user.token
                    });
                });    
            });
          });
        }
    });
});

// routes prefix
app.use("/api/post", require('./routes/routes'))
app.use("/api/timelines", require('./routes/routesT'))
// const userRoutes = require("./routes/user"); //bring in our user routes
// app.use("/user", userRoutes);

// Start server
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));