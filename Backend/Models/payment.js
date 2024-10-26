const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    stripePaymentId: { type: String, required: true }, // معرف الدفع من Stripe
    email: { type: String, required: true }, // تخزين البريد الإلكتروني
    name: { type: String, required: true }, // تخزين الاسم
    paymentStatus: { type: String, required: true }, // حالة الدفع
  },
  { timestamps: true }
);

module.exports = mongoose.model("Payment", paymentSchema);
