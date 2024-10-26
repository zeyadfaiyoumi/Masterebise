// routes/productRoutes.js
const express = require("express");
const router = express.Router();
const getAllProducts = require("../Controllers/DASHproduct");

// التأكد من تطابق المسار
router.get("/products", getAllProducts.getAllProducts);
router.post("/products", getAllProducts.createProduct);
router.delete("/products/:id", getAllProducts.deleteProduct);
router.put("/products/:id", getAllProducts.updateProduct);
module.exports = router;
