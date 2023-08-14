// const catchAsyncError = require("../middleWare/catchAsyncError");

const catchAsyncError = require("../middleWare/catchAsyncError");
const Order = require("../models/orderModel");
const ErrorHandler = require("../utils/errorHandler");

// ORDER CONSTROLLER
exports.newOrder = catchAsyncError(async (req, res, next) => {
    const {
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;
  
    const order = await Order.create({
      shippingInfo,
      orderItems,
      paymentInfo,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
      paidAt: Date.now(),
 
    });
  
    res.status(201).json({
      success: true,
      order,
    });
  });