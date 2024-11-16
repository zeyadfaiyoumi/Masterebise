const express = require("express");
const router = express.Router();
const { loginAdmin } = require("../Controllers/adminLoginController");

router.post("/admin/login", loginAdmin);

module.exports = router;
