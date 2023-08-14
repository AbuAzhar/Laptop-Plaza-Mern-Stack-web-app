const express = require("express");
const {newOrder} = require("../controller/orderController")
const router = express.Router();

router.route("/order").post(newOrder);

module.exports = router;