const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/usersModel");
const sendToken = require("../utils/jwtToken");

//Register New User
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name, email, password,
    avatar: {
      public_id: "this is temp",
      url: "ppURL"
    }
  });

  sendToken(user, 201, res);
})

//Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {

  const { email, password } = req.body;
  //checking if user have password and email both
  if (!email || !password) {
    return next(new ErrorHandler("Please enter both Email and Password", 400))
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid Email or Password", 401))
  }

  const isPasswordMatch = await user.comparePassword(password);

  if (!isPasswordMatch) {
    return next(new ErrorHandler("Invalid Email or Password", 401))
  }

  sendToken(user, 200, res);
});


//Logout User
exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(
      Date.now()),
    httpOnly: true,
  })

  res.status(200).json({
    success: true,
    message: "Logged out"
  })
})