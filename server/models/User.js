const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const confiq=require('../config/config').get(process.env.NODE_ENV);
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Include your name"]
  },
  email: {
    type: String,
    required: [true, "Please Include your email"]
  },
  password: {
    type: String,
    required: [true, "Please Include your password"]
  },
  tokens: [
    {
      token: {
        type: String,
        required: true
      }
    }
  ]
});

//this method will hash the password before saving the user model
userSchema.pre("save", async function(next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

//this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign({ _id: user._id, name: user.name, email: user.email },
  "secret");
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//to login
userSchema.methods.comparepassword=function(password,cb){
  bcrypt.compare(password,this.password,function(err,isMatch){
      if(err) return cb(next);
      cb(null,isMatch);
  });
}

// generate token
userSchema.methods.generateToken=function(cb){
  var user =this;
  var token=jwt.sign(user._id.toHexString(),confiq.SECRET);

  user.token=token;
  user.save(function(err,user){
      if(err) return cb(err);
      cb(null,user);
  })
}

// find by token
userSchema.statics.findByToken=function(token,cb){
  var user=this;

  jwt.verify(token,confiq.SECRET,function(err,decode){
      user.findOne({"_id": decode, "token":token},function(err,user){
          if(err) return cb(err);
          cb(null,user);
      })
  })
};

module.exports = mongoose.model("User", userSchema);
// const User = mongoose.model("User", userSchema);
// module.exports = User;