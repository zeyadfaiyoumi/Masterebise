const express = require("express");
const OrderControllers = require("../Controllers/Order ");
const Auth = require("../Middlewares/auth");

const router = express.Router();

router.post("/Order", Auth, OrderControllers.createOrder); 
router.get("/profit", Auth, OrderControllers.getUserOrderStats);
router.get("/getUserOrders", Auth, OrderControllers.getUserOrders);
router.post("/cancelOrder/:orderId", Auth, OrderControllers.cancelOrder);

module.exports = router; 
