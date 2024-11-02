// const mongoose = require("mongoose");

// const paymentSchema = new mongoose.Schema(
//   {
//     email: { type: String, required: true },
//     name: { type: String, required: true },
//     amount: { type: Number, required: true },
//     currency: { type: String, required: true },
//     paymentStatus: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const Payment = mongoose.model("Payment", paymentSchema);
// module.exports = Payment;
const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    name: { type: String, required: true },
    amount: { type: Number, required: true },
    currency: { type: String, required: true },
    paymentStatus: { type: String, required: true },
  },
  { timestamps: true }
);

const Payment = mongoose.model("Payment", paymentSchema);
module.exports = Payment;
