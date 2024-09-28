// import { Link } from "react-router-dom";
// import Navbar from "../componants/navbar/Navbar";

// function Detils() {
//   return (
//     <>
//       <Navbar />{" "}
//       <section className="py-32  bg-primary">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//             <div className="flex flex-col justify-center items-start">
//               <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
//                 <div className="flex items-center justify-between gap-6 mb-6">
//                   <div className="text">
//                     <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
//                       ساعة Mi W02 الذكية
//                     </h2>
//                     <p className="font-normal text-base text-gray-500">
//                       المورد: ZOS
//                     </p>
//                   </div>
//                   <button className="group transition-all duration-500 p-0.5">
//                     <svg
//                       width="60"
//                       height="60"
//                       viewBox="0 0 60 60"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <circle
//                         className="fill-indigo-50 transition-all duration-500 group-hover:fill-indigo-100"
//                         cx="30"
//                         cy="30"
//                         r="30"
//                         fill=""
//                       />
//                       <path
//                         className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-700"
//                         d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
//                         stroke=""
//                         stroke-width="1.6"
//                         stroke-miterlimit="10"
//                         stroke-linecap="round"
//                         stroke-linejoin="round"
//                       />
//                     </svg>
//                   </button>
//                 </div>

//                 <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
//                   <div className="flex items-center">
//                     <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900 ">
//                       JD 19.00{" "}
//                     </h5>
//                     <span className="ml-3 font-semibold text-lg text-indigo-600">
//                       30% خصم
//                     </span>
//                   </div>
//                   <svg
//                     className="mx-5 max-[400px]:hidden"
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="2"
//                     height="36"
//                     viewBox="0 0 2 36"
//                     fill="none"
//                   >
//                     <path d="M1 0V36" stroke="#E5E7EB" />
//                   </svg>
//                   <button className="flex items-center gap-1 rounded-lg bg-amber-400 py-1.5 px-2.5 w-max">
//                     <span className="text-base font-medium text-white">
//                       4.8
//                     </span>
//                   </button>
//                 </div>
//                 <p className="font-medium text-sm text-gray-900 mb-2">
//                   🕒 ساعة Mi W02 الذكية - ابتكار التكنولوجيا والموضة في جهاز
//                   واحد! 💡 تواكب كل لحظة: اكتشف الساعة الذكية Mi W02، الحل
//                   الأمثل لكل من يبحث عن الأداء والأناقة في جهاز واحد. بفضل
//                   تصميمها الأنيق والمبتكر، تعتبر Mi W02 الرفيق المثالي لحياتك
//                   اليومية. ⚙️ مميزات استثنائية: شاشة عالية الدقة: شاشة AMOLED
//                   بمقاس 1.39 بوصة لتجربة بصرية فائقة. بطارية تدوم طويلاً: حتى 14
//                   يومًا من الاستخدام بفضل البطارية ذات الكفاءة العالية. مقاومة
//                   للماء: معيار مقاومة الماء 5ATM لتناسب جميع أنشطتك اليومية بما
//                   في ذلك السباحة. مراقبة الصحة: قياس معدل ضربات القلب على مدار
//                   الساعة، مراقبة النوم، ونظام تتبع النشاط اليومي. إشعارات ذكية:
//                   عرض الإشعارات من هاتفك الذكي مباشرة على معصمك، بما في ذلك
//                   المكالمات، الرسائل، وتطبيقات التواصل الاجتماعي. 📱 توافق واسع:
//                   تتوافق ساعة Mi W02 الذكية مع أنظمة Android و iOS، مما يتيح لك
//                   الربط السلس مع هاتفك الذكي والاستفادة من كافة الميزات
//                   المتقدمة. 👟 لأسلوب حياة نشط: سواء كنت تجري، تمارس رياضة
//                   اليوغا، أو تتنزه في الطبيعة، ستساعدك Mi W02 في تتبع تقدمك
//                   وتحقيق أهدافك الصحية بكل دقة وراحة. ✨ تصميم أنيق: ساعة Mi W02
//                   الذكية تأتي بتصميم عصري يناسب جميع الأذواق، مع أحزمة قابلة
//                   للتبديل لتتكيف مع مظهرك اليومي. 🔗 احصل عليها الآن واستمتع
//                   بالراحة والأناقة في جهاز واحد! #MiW02 #ساعة_ذكية
//                   #تكنولوجيا_وأناقة #أسلوب_حياة_نشط
//                 </p>

//                 <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
//                   <button className="group py-3 px-5 rounded-full bg-primary text-custmblue font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
//                     <svg
//                       className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
//                       width="22"
//                       height="22"
//                       viewBox="0 0 22 22"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
//                         stroke=""
//                         strokeWidth="1.6"
//                         strokeLinecap="round"
//                       />
//                     </svg>
//                     اضافة الى منتجاتي
//                   </button>
//                 </div>
//                 <Link to="/Cartt">
//                   <button className="text-center w-full px-5 py-4 rounded-[100px] bg-custmblue flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
//                     اشتري الان
//                   </button>
//                 </Link>
//               </div>
//             </div>
//             <div className="flex items-center justify-center">
//               <img
//                 src="https://ae01.alicdn.com/kf/S9643822ca1934baca6fd42f3bed807b5D/IMILAB-W02-1-85.jpg"
//                 alt="Mi W02 Smartwatch"
//                 className="w-full max-w-md"
//               />
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Detils;
import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "../componants/navbar/Navbar";

function ProductDetails() {
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  // البحث عن المنتج الذي يتطابق مع الـ ID
  const productDetails = products.find((product) => product._id === id);
  if (!productDetails) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-12 bg-white rounded-lg shadow-lg">
          <svg
            className="animate-spin h-12 w-12 text-blue-500 mx-auto mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12c0-4.42 3.58-8 8-8s8 3.58 8 8h-4c0-2.21-1.79-4-4-4S4 9.79 4 12H0z"
            />
          </svg>
          <h2 className="text-lg font-semibold text-gray-700">
            جاري التحميل...
          </h2>
        </div>
      </div>
    ); // عرض رسالة التحميل إذا لم يتم العثور على المنتج
  }
  return (
    <>
      <Navbar />
      <section className="py-32 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col justify-center items-start">
              <div className="pro-detail w-full max-lg:max-w-[608px] lg:pl-8 xl:pl-16 max-lg:mx-auto max-lg:mt-8">
                <div className="flex items-center justify-between gap-6 mb-6">
                  <div className="text">
                    <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2">
                      {productDetails.productName}
                    </h2>
                    <p className="font-normal text-base text-gray-500">
                      {productDetails.supplier}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center mb-8 gap-y-3">
                  <div className="flex items-center">
                    <h5 className="font-manrope font-semibold text-2xl leading-9 text-gray-900">
                      {productDetails.suggestedPrice} JD
                    </h5>
                    {/* أضف هنا أي خصم إذا كان موجودًا */}
                  </div>
                </div>

                <p className="font-medium text-sm text-gray-900 mb-2">
                  {productDetails.description}
                </p>

                <div className="flex items-center flex-col min-[400px]:flex-row gap-3 mb-3 min-[400px]:mb-8">
                  <button className="group py-3 px-5 rounded-full bg-primary text-custmblue font-semibold text-lg w-full flex items-center justify-center gap-2 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-indigo-300 hover:bg-indigo-100">
                    <svg
                      className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-indigo-600"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7394 17.875C10.7394 18.6344 10.1062 19.25 9.32511 19.25C8.54402 19.25 7.91083 18.6344 7.91083 17.875M16.3965 17.875C16.3965 18.6344 15.7633 19.25 14.9823 19.25C14.2012 19.25 13.568 18.6344 13.568 17.875M4.1394 5.5L5.46568 12.5908C5.73339 14.0221 5.86724 14.7377 6.37649 15.1605C6.88573 15.5833 7.61377 15.5833 9.06984 15.5833H15.2379C16.6941 15.5833 17.4222 15.5833 17.9314 15.1605C18.4407 14.7376 18.5745 14.0219 18.8421 12.5906L19.3564 9.84059C19.7324 7.82973 19.9203 6.8243 19.3705 6.16215C18.8207 5.5 17.7979 5.5 15.7522 5.5H4.1394ZM4.1394 5.5L3.66797 2.75"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                    اضافة الى منتجاتي
                  </button>
                </div>

                <Link to="/Cartt">
                  <button className="text-center w-full px-5 py-4 rounded-[100px] bg-custmblue flex items-center justify-center font-semibold text-lg text-white shadow-sm shadow-transparent transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-300">
                    اشتري الان
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={
                  productDetails.imageURL || "https://via.placeholder.com/300"
                }
                alt={productDetails.productName}
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
