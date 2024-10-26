// function Whyour() {
//   return (
//     <>
//       <section className="py-9 bg-[#f0f2f9]">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
//             <div className="flex justify-center items-center lg:justify-end lg:pr-16">
//               <img
//                 src="https://cdn.salla.sa/BXlpO/8nVyjuGBlaenaQNk57qHO8Y01skc8lhHhpWpQRea.png"
//                 alt="About Us tailwind page"
//                 className="transition-transform duration-500 ease-in-out transform hover:scale-105"
//               />
//             </div>
//             <div className="flex items-center lg:items-start lg:pl-16">
//               <div className="w-full">
//                 <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#31363F] mb-6 lg:mb-8 text-center lg:text-center  pt-24 ">
//                   لماذا نحنُ
//                 </h2>
//                 <p className="font-bold text-lg lg:text-xl leading-8 text-[#31363F] max-w-2xl mx-auto lg:mx-0 text-center lg:text-center">
//                   في متجرنا، بدأت رحلتنا برؤية بسيطة ولكن قوية – ثورة في تجربة
//                   التسوق عبر الإنترنت من خلال تقديم أسعار لا تُقاوم دون المساس
//                   بالجودة. فهمنا الإحباط الذي واجهه العديد من مشتري المنتجات عبر
//                   الإنترنت: الأسعار المرتفعة، والرسوم الخفية، ونقص الثقة في
//                   المنتجات التي يشترونها.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
// export default Whyour;
import React from "react";
import { ChevronLeft, Star, ShoppingCart, ThumbsUp } from "lucide-react";

function Whyour() {
  return (
    <section className="py-16 bg-[#f0f2f9]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex justify-center items-center lg:justify-end lg:pr-16 mb-12 lg:mb-0">
            <div className="relative">
              <img
                src="https://cdn.salla.sa/BXlpO/8nVyjuGBlaenaQNk57qHO8Y01skc8lhHhpWpQRea.png"
                alt="About Us tailwind page"
                className="transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
          </div>
          <div className="flex items-center lg:items-start lg:pl-16">
            <div className="w-full">
              <h2 className="font-manrope font-bold lg:text-5xl text-[#31363F] mb-8 text-center lg:text-right">
                لماذا نحنُ
              </h2>
              <p className="font-semibold text-lg lg:text-xl leading-8 text-[#31363F] max-w-2xl mx-auto lg:mx-0 text-center lg:text-right mb-8">
                في متجرنا، بدأت رحلتنا برؤية بسيطة ولكن قوية – ثورة في تجربة
                التسوق عبر الإنترنت من خلال تقديم أسعار لا تُقاوم دون المساس
                بالجودة. فهمنا الإحباط الذي واجهه العديد من مشتري المنتجات عبر
                الإنترنت: الأسعار المرتفعة، والرسوم الخفية، ونقص الثقة في
                المنتجات التي يشترونها.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <ShoppingCart className="w-8 h-8 text-custmblue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">تسوق سهل</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <ThumbsUp className="w-8 h-8 text-custmblue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">جودة عالية</h3>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-md mb-4">
                    <Star className="w-8 h-8 text-custmblue" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">خدمة ممتازة</h3>
                </div>
              </div>
              <div className="text-center lg:text-right mt-12"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Whyour;
