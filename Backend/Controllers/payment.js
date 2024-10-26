const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const Payment = require("../Models/payment"); // استدعاء المودل

const createPaymentIntent = async (req, res) => {
  try {
    const { email, name, payment_method } = req.body; // استقبال الاسم مع البريد الإلكتروني

    // إنشاء PaymentIntent بناءً على paymentMethod
    const paymentIntent = await stripe.paymentIntents.create({
      payment_method: payment_method,
      confirm: true, // تأكيد الدفع فوراً
      amount: 5000, // مثال: المبلغ المطلوب (يتم تحديده حسب حالتك)
      currency: "usd", // العملة
    });

    // حفظ بيانات الدفع في قاعدة البيانات
    const payment = new Payment({
      stripePaymentId: paymentIntent.id, // تخزين معرف الدفع من Stripe
      email: email, // تخزين البريد الإلكتروني
      name: name, // تخزين الاسم
      paymentStatus: paymentIntent.status, // تخزين حالة الدفع
    });

    await payment.save(); // حفظ البيانات في قاعدة البيانات

    return res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating payment intent:", error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { createPaymentIntent };
