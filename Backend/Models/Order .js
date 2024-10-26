const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
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
  createdAt: { type: Date, default: Date.now },
  cancelled: { type: Boolean, default: false },
});

module.exports = mongoose.model("Order", orderSchema);
