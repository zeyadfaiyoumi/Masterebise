const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    user_id: { type: String, required: true },
    customerName: { type: String, required: true },
    city: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    storeName: { type: String, required: true },
    address: { type: String, required: true },
    notes: { type: String },
    cartItems: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, required: true },
        suggestedPrice: { type: Number, required: true },
        cost: { type: Number, required: true },
      },
    ],
    totalAmount: { type: Number, required: true },
    expectedProfit: { type: Number, required: true },
    complete: { type: Boolean, default: false }, // Flag for completed orders
    cancelled: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
