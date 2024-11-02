import React, { useState } from "react";
import Navbar from "../componants/navbar/Navbar";
import Footer from "../componants/footer/Footer";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";

// تحميل مكتبة Stripe
const stripePromise = loadStripe(
  "pk_test_51Po3xJA4L1QDrrEEECST7zzuz3EwgAvliyrzirIXNUtRvRBxHoSGucEZfKX6JyA1Z5A5OpSdpSh5VUuvkwGTFAj2007tEPrtx7"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("online");
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
      let response;
      if (paymentMethod === "online") {
        // إرسال الطلب إلى الخادم لإنشاء PaymentIntent
        response = await axios.post("http://localhost:5001/api/zos/payment", {
          email,
          name,
          payment_method: "card",
        });
      } else {
        // معالجة الدفع عند الاستلام
        response = await axios.post("http://localhost:5001/api/zos/payment", {
          email,
          name,
          payment_method: "cash",
        });
      }

      const { error: backendError, clientSecret } = response.data;

      if (backendError) {
        setError(backendError);
        setProcessing(false);
        return;
      }

      // تأكيد الدفع باستخدام clientSecret فقط إذا كانت طريقة الدفع عبر الإنترنت
      if (paymentMethod === "online") {
        const { error: stripeError, paymentIntent } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: { email, name },
            },
          });

        if (stripeError) {
          setError(stripeError.message);
        } else if (paymentIntent.status === "succeeded") {
          Swal.fire({
            title: "تمت عملية الدفع بنجاح!",
            text: "شكراً لك على الدفع.",
            icon: "success",
          });
        }
      } else {
        Swal.fire({
          title: "تم تأكيد الطلب!",
          text: "ستقوم بالدفع عند الاستلام.",
          icon: "success",
        });
      }

      setProcessing(false);
    } catch (error) {
      setError(error.message);
      setProcessing(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-primary">
        <div className="p-8 w-96 bg-primary shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            عملية الدفع
          </h2>
          <form onSubmit={handleStripeSubmit}>
            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                الاسم الكامل
              </label>
              <input
                type="text"
                placeholder="أدخل اسمك الكامل"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-5">
              <label className="block text-sm font-medium mb-1">
                طريقة الدفع
              </label>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500"
              >
                <option value="online">الدفع عبر الإنترنت</option>
                <option value="cash">الدفع عند الاستلام</option>
              </select>
            </div>

            {paymentMethod === "online" && (
              <div className="mb-5">
                <label className="block text-sm font-medium mb-1">
                  تفاصيل البطاقة
                </label>
                <CardElement className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-blue-500" />
              </div>
            )}

            {error && (
              <div className="text-red-500 text-center mb-4">{error}</div>
            )}

            <button
              type="submit"
              disabled={!stripe || processing}
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              {processing ? "جاري المعالجة..." : "ادفع الآن"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
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
