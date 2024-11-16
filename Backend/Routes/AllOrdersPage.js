// routes/ordersRoutes.js
const express = require("express");
const router = express.Router();
const {
  getUserOrders,
  cancelOrder,
  markAsDelivered,
} = require("../Controllers/AllOrdersPage");

// جلب جميع الطلبات
router.get("/DgetUserOrders", getUserOrders);

// إلغاء الطلب
router.put("/DcancelOrder/:orderId", cancelOrder);
router.put("/markAsDelivered/:orderId", markAsDelivered);

module.exports = router;
