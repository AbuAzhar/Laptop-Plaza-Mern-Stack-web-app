const catchAsyncError = require("../middleWare/catchAsyncError");
const User = require("../models/userModels");
const ErrorHandler = require("../utils/errorHandler");

exports.registerUser = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "sample public id ",
      url: "https://via.placeholder.com/150",
    },
  });

  const token = user.getJWTToken();
  res.status(200).json({
    success: true,
    token,
  })
});

// USER LOGIN 
exports.loginUser = catchAsyncError(async (req, res, next) =>{
  const {email, password} = req.body;

  if(!email || !password){
    return next(new ErrorHandler("Please Enter Email & Password",400))
  };
  
  const user = await user.findOne({ email }).select("+password")

  if(!user){
    return next(new ErrorHandler("Invalid Email or Pasword",400))
  };
  
})
