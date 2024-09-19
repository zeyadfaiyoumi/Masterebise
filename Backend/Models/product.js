const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: { type: String, required: true },
  cost: { type: String, required: true },
  suggestedPrice: { type: String, required: true },
  supplier: { type: String, required: true },
  imageURL: { type: String },
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true }, // حالة المنتج: فعال أو غير فعال
  category: { type: String, required: true }, // الفئة
});

module.exports = mongoose.model("Product", productSchema);
