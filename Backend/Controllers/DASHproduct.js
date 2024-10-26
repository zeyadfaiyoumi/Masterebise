// controllers/productController.js
const Product = require("../Models/product"); // استيراد الموديل

// جلب جميع المنتجات
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find(); // سحب كل المنتجات
    res.status(200).json(products);
    console.log(products.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting product", error: error.message });
  }
};

// تعديل منتج
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating product", error: error.message });
  }
};
const createProduct = async (req, res) => {
  const { productName, cost, suggestedPrice, supplier } = req.body;

  try {
    const newProduct = new Product({
      productName,
      cost,
      suggestedPrice,
      supplier,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ error: "خطأ في إضافة المنتج" });
  }
};
module.exports = {
  getAllProducts,
  deleteProduct,
  updateProduct,
  createProduct,
};
