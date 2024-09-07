import { Link } from "react-router-dom";
import Navbar from "../componants/navbar/Navbar";

function Chart() {
  return (
    <>
      <Navbar />
      <div className="pt-28 bg-primary">
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">
            سلة المشتريات
          </h2>
          <div className="grid grid-cols-6 gap-4 text-center border-b border-gray-300 pb-3 mb-4">
            <span className="font-medium text-gray-600">الكمية</span>
            <span className="font-medium text-gray-600">سعر البيع المطلوب</span>
            <span className="font-medium text-gray-600">سعر التكلفة</span>
            <span className="font-medium text-gray-600">الوصف</span>
            <span className="font-medium text-gray-600">الصورة</span>
            <span className="font-medium text-gray-600">الاجمالي</span>
          </div>
          <div className="grid grid-cols-6 gap-4 items-center bg-white p-4 rounded-md shadow-sm">
            <input
              type="number"
              defaultValue="1"
              className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
            />
            <input
              type="number"
              defaultValue="36"
              className="text-gray-700 text-center border border-gray-300 rounded-md py-2 px-4"
            />
            <span className="text-custmblue text-center font-semibold">25JD</span>
            <span className="text-gray-800 text-center font-semibold">
              ساعة Mi W02 الذكية
            </span>
            <div className="flex justify-center items-center">
              <img
                aria-hidden="true"
                alt="Mi W02 Smart Watch"
                src="https://openui.fly.dev/openui/50x50.svg?text=⌚"
                className="w-14 h-14 rounded-full border border-gray-300 shadow-md"
              />
            </div>
            <span className="text-gray-700 text-center font-semibold">
              36JD
            </span>
            <button className="flex justify-center items-center text-red-600 col-span-1 hover:bg-red-100 p-2 rounded-full">
              <i className="fas fa-trash-alt text-lg"></i>
            </button>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  تفاصيل الشحن
                </h2>
                <form>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="customer-name"
                    >
                      الاسم
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="customer-name"
                      placeholder="ادخل اسم العميل هنا"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="country"
                    >
                      الدولة
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="country"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="city">
                      المدينة
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="city"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="phone-number"
                    >
                      رقم الهاتف
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="phone-number"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="store-name"
                    >
                      اسم متجرك
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="store-name"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 mb-2"
                      htmlFor="address"
                    >
                      العنوان
                    </label>
                    <input
                      className="w-full p-2 border border-gray-300 rounded"
                      type="text"
                      id="address"
                      placeholder="بالتفصيل (المنطقة،اسم الشارع،معلم مميز،رقم الشقة)"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2" htmlFor="notes">
                      ملاحظاتك:
                    </label>
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded"
                      id="notes"
                      rows="3"
                    ></textarea>
                  </div>
                </form>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <iframe
                  className="frameOfGps"
                  width="100%"
                  height="200"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    event.city
                  )}+(culture)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
                  title="Event Location"
                >
                  <a
                    href={`https://www.google.com/maps?q=${encodeURIComponent(
                      event.city
                    )}+(culture)`}
                  >
                    View on Google Maps
                  </a>
                </iframe>

                <h3 className="text-xl font-bold text-gray-800 mb-4 pt-5">
                  ملخص الطلب
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-1">
                    اجمالي سعر تكلفة المنتجات:{" "}
                    <span className="font-bold">25JD</span>
                  </p>
                  <p className="text-gray-600 mb-1">
                    تكلفة شحن الطلب: <span className="font-bold">3JD</span>
                  </p>
                  <p className="text-gray-600 mb-1">
                    اجمالي التكلفة: <span className="font-bold">28JD</span>
                  </p>
                  <p className="text-scand mb-1">
                    المبلغ المراد تحصيله من العميل بعد اضافة تكلفة الشحن:{" "}
                    <span className="font-bold">36JD</span>
                  </p>
                  <p className="text-scand">
                    ارباحك من الطلب: <span className="font-bold">8JD</span>
                  </p>
                </div>
                <div className="p-5 border-t border-gray-300 mt-4">
                  <p className="text-gray-600 mb-2">
                    الرجاء لاختيار طريقة الدفع
                  </p>
                  <label className="inline-flex items-center mb-2">
                    <input
                      type="radio"
                      name="payment-method"
                      value="cash"
                      className="mr-2"
                    />
                    <span className="text-gray-600">عند الاستلام</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="payment-method"
                      value="transfer"
                      className="mr-2"
                    />
                    <span className="text-gray-600">تحويل</span>
                  </label>
                  <Link to="/checkout">
                    <button
                      type="submit"
                      className="bg-custmblue text-white p-3 rounded-lg w-full hover:bg-blue-600 transition mt-4"
                    >
                      تاكيد
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
