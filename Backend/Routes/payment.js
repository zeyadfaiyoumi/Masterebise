const express = require("express");
const paymentController = require("../Controllers/payment");

const router = express.Router();

router.post("/payment", paymentController.createPaymentIntent);

module.exports = router;
