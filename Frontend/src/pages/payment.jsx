import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";

// تحميل مكتبة Stripe
const stripePromise = loadStripe(
  "pk_test_51Po3xJA4L1QDrrEEECST7zzuz3EwgAvliyrzirIXNUtRvRBxHoSGucEZfKX6JyA1Z5A5OpSdpSh5VUuvkwGTFAj2007tEPrtx7"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [name, setName] = useState(""); // إضافة حقل الاسم
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);

  const handleStripeSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError("Stripe.js has not loaded yet.");
      return;
    }

    setProcessing(true);

    try {
      // إرسال الطلب إلى الخادم لإنشاء PaymentIntent مع إضافة الاسم
      const response = await axios.post(
        "http://localhost:5001/api/zos/payment",
        {
          email,
          name, // إرسال الاسم مع البريد الإلكتروني
          payment_method: "card", // إرسال طريقة الدفع
        }
      );

      const { error: backendError, clientSecret } = response.data;

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      // تأكيد الدفع باستخدام clientSecret
      const { error: stripeError, paymentIntent } =
        await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: { email, name }, // إرسال الاسم مع البريد الإلكتروني
          },
        });

      if (stripeError) {
        setError(stripeError.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("Payment Successful!");
      }

      setProcessing(false);
    } catch (error) {
      setError(error.message);
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">Payment</h2>
      <form onSubmit={handleStripeSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <CardElement className="w-full p-3 border border-gray-300 rounded-md" />
        </div>

        {error && <div className="text-red-500 text-center mb-4">{error}</div>}

        <button
          type="submit"
          disabled={!stripe || processing}
          className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md"
        >
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

const PaymentPage = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentPage;
