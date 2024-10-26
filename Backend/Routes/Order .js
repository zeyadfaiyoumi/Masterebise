const express = require("express");
const OrderControllers = require("../Controllers/Order ");
const Auth = require("../Middlewares/auth");

const router = express.Router();

router.post("/Order", Auth, OrderControllers.createOrder); // تأكد من أن هذا السطر صحيح
router.get("/profit", Auth, OrderControllers.getUserOrderStats);
router.get("/getUserOrders", Auth, OrderControllers.getUserOrders);
router.post("/cancelOrder/:orderId", Auth, OrderControllers.cancelOrder);

module.exports = router; // تأكد من تصدير الراوتر بشكل صحيح
