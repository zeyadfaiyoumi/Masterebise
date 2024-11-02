const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../Models/payment");

exports.createPaymentIntent = async (req, res) => {
  try {
    const { email, name, payment_method } = req.body;
    let paymentIntent;
    let paymentStatus;

    if (payment_method === "card") {
      paymentIntent = await stripe.paymentIntents.create({
        amount: 1000,
        currency: "usd",
        receipt_email: email,
        metadata: { name },
      });
      paymentStatus = paymentIntent.status;
    } else {
      paymentStatus = "غير مدفوع";
    }
    تلام;

    await Payment.create({
      email,
      name,
      amount: paymentIntent ? paymentIntent.amount : 1000,
      currency: paymentIntent ? paymentIntent.currency : "usd",
      paymentStatus: paymentStatus,
    });

    res.json({
      clientSecret: paymentIntent ? paymentIntent.client_secret : null,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
