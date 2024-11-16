import React, { useState } from "react";

function Fedback() {
  const feedbacks = [
    {
      text: "ما شاء الله من الشركات المميزة بجودة منتجاتها والواقع احلى من الصور💙",
      name: "Zeyad",
      role: "CEO at ZOS",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    },
    {
      text: "تجربتي مع هذه الشركة كانت رائعة! سأوصي بها للجميع.",
      name: "Ahmed",
      role: "مدير تطوير الأعمال",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/ahmed-gouch.png",
    },
    // يمكنك إضافة المزيد من التعليقات هنا
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFeedback = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  const prevFeedback = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length
    );
  };

  return (
    <section className="py-12 bg-gradient-to-r from-[#f0f2f9] to-[#e4f1f5]">
      <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#31363F] mb-8 text-center pt-12">
        ماذا يُقال عنا
      </h2>
      <div className="max-w-screen-xl mx-auto text-center bg-white shadow-lg rounded-lg p-8">
        <div className="relative">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-[#1f7b6f]"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-2xl font-medium text-gray-900 dark:text-white transition-transform duration-500 ease-in-out transform hover:scale-105">
                {feedbacks[currentIndex].text}
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <div className="flex flex-col items-start">
                <div className="font-medium text-gray-900 dark:text-white">
                  {feedbacks[currentIndex].name}
                </div>
              </div>
            </figcaption>
          </figure>
          <button
            onClick={prevFeedback}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-custmblue text-white p-2 rounded-full transition-colors duration-300  shadow-lg"
          >
            🔙
          </button>
          <button
            onClick={nextFeedback}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-custmblue text-white p-2 rounded-full transition-colors duration-300  shadow-lg"
          >
            🔜
          </button>
        </div>
      </div>
    </section>
  );
}

export default Fedback;
