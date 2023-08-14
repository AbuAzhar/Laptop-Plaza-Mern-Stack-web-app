const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please Enter Your Name"],
    minLength: [4, "Name Should have more than 4 characters"],
    maxLength: [20, "Name Should have less than 20 characters"],
  },
  email: {
    type: String,
    require: [true, "Please Enter your Email"],
    unique: true,
    validate: [validator.isEmail, "Please Enter a valid Email"],
  },
  password: {
    type: String,
    require: [true, "Please Enter your Password"],
    minLength: [6, "Password Should be greater than 8 characters"],
    select: false,
  },
  avatar: {
    public_id: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  role: {
    type: String,
    default: "user",
  },

  resetPasswordToken: String,
  expireResetPasswordToken: Date,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password =await bcrypt.hash(this.password, 15);
});



// JWT TOKEN 
userSchema.methods.getJWTToken = function (){
  return jwt.sign({id:this._id},process.env.JWT_SECRET,{
    expiresIn:process.env.JWT_EXPIRE,
  });
}

module.exports = mongoose.model("User", userSchema);
