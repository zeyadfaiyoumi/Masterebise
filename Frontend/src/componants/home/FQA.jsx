import FQ from "../../assets/FQA.png";

function FQA() {
  return (
    <>
      <section className="py-9 bg-[#f0f2f9]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
            <div className="w-full lg:w-1/2">
              <img
                src={FQ}
                alt="FAQ tailwind section"
                className="w-full rounded-xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:max-w-xl">
                <div className="mb-6 lg:mb-16">
                  <h2 className="text-4xl text-center font-bold text-gray-900 leading-[3.25rem] mb-5 lg:text-right">
                    الأسئلة الأكثر شيوعًا
                  </h2>
                </div>
                <div className="accordion">
                  {/* Accordion Item 1 */}
                  <div className="border-t border-gray-200">
                    <input
                      type="checkbox"
                      id="accordion1"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="accordion1"
                      className="flex justify-between items-center text-xl font-normal text-gray-600 w-full py-4 cursor-pointer transition-colors duration-300 hover:text-indigo-600"
                    >
                      <h5>كيف يمكنك إجراء عملية شراء؟</h5>
                      <svg
                        className="text-gray-900 transition-transform duration-300 transform rotate-0 peer-checked:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <div className="max-h-0 overflow-hidden transition-max-height duration-300 peer-checked:max-h-40">
                      <p className="py-4 text-base text-gray-600">
                        لإجراء عملية شراء، قم بتصفح المنتجات، اختر ما ترغب في
                        شرائه، وأضفه إلى عربة التسوق. بعد ذلك، انتقل إلى صفحة
                        الدفع واملأ معلومات الشحن والدفع الخاصة بك. اضغط على زر
                        إتمام الشراء لتأكيد الطلب.
                      </p>
                    </div>
                  </div>

                  {/* Accordion Item 2 */}
                  <div className="border-t border-gray-200">
                    <input
                      type="checkbox"
                      id="accordion2"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="accordion2"
                      className="flex justify-between items-center text-xl font-normal text-gray-600 w-full py-4 cursor-pointer transition-colors duration-300 hover:text-indigo-600"
                    >
                      <h5>ما هو الوقت المتوقع لوصول الطلب؟</h5>
                      <svg
                        className="text-gray-900 transition-transform duration-300 transform rotate-0 peer-checked:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <div className="max-h-0 overflow-hidden transition-max-height duration-300 peer-checked:max-h-40">
                      <p className="py-4 text-base text-gray-500">
                        الوقت المتوقع لوصول الطلب يعتمد على موقعك ونوع الشحن
                        الذي اخترته. عادةً ما يتم تسليم الطلبات خلال 3-7 أيام
                        عمل.
                      </p>
                    </div>
                  </div>

                  {/* Accordion Item 3 */}
                  <div className="border-t border-gray-200">
                    <input
                      type="checkbox"
                      id="accordion3"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="accordion3"
                      className="flex justify-between items-center text-xl font-normal text-gray-600 w-full py-4 cursor-pointer transition-colors duration-300 hover:text-indigo-600"
                    >
                      <h5>ما هي طرق الدفع المتاحة؟</h5>
                      <svg
                        className="text-gray-900 transition-transform duration-300 transform rotate-0 peer-checked:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <div className="max-h-0 overflow-hidden transition-max-height duration-300 peer-checked:max-h-40">
                      <p className="py-4 text-base text-gray-500">
                        نحن نقدم عدة طرق للدفع تشمل بطاقات الائتمان، بطاقات
                        الخصم، والدفع عند الاستلام. اختر الطريقة التي تناسبك
                        أثناء إتمام عملية الشراء.
                      </p>
                    </div>
                  </div>

                  {/* Accordion Item 4 */}
                  <div className="border-t border-gray-200">
                    <input
                      type="checkbox"
                      id="accordion4"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="accordion4"
                      className="flex justify-between items-center text-xl font-normal text-gray-600 w-full py-4 cursor-pointer transition-colors duration-300 hover:text-indigo-600"
                    >
                      <h5>هل يمكنني تعديل أو إلغاء طلبي بعد تقديمه؟</h5>
                      <svg
                        className="text-gray-900 transition-transform duration-300 transform rotate-0 peer-checked:rotate-180"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </label>
                    <div className="max-h-0 overflow-hidden transition-max-height duration-300 peer-checked:max-h-40">
                      <p className="py-4 text-base text-gray-500">
                        نعم، يمكنك تعديل أو إلغاء طلبك إذا لم يتم شحنه بعد. يرجى
                        الاتصال بخدمة العملاء في أقرب وقت ممكن لتعديل أو إلغاء
                        طلبك.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default FQA;
