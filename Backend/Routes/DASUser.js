const express = require("express");
const { getAllUsers, toggleUserActivation } = require("../Controllers/DASUser");

const router = express.Router();

// جلب جميع المستخدمين
router.get("/users", getAllUsers);

// تغيير حالة التفعيل للمستخدم
router.post("/activation", toggleUserActivation);

module.exports = router;
