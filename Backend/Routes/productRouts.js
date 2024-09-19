const express = require("express");
const router = express.Router();
const productControllers = require("../Controllers/productControllers");
router.get("/getdata",productControllers.getData)
module.exports = router;
