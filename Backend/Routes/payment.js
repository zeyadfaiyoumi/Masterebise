const express = require("express");
const { createPaymentIntent } = require("../Controllers/payment");
const router = express.Router();

router.post("/payment", createPaymentIntent);

module.exports = router;
