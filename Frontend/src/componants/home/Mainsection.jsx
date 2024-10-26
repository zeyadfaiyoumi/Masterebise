// function Mainsection() {
//   return (
//     <>
//       <section className="py-9 bg-[#f0f2f9]">
//         <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#31363F] mb-6 lg:mb-8 text-center lg:text-center  pt-24 ">
//           أبرز الأقسام
//         </h2>
//         <div className="flex justify-center items-center">
//           <div className="2xl:mx-auto 2xl:container py-12 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
//             <div className="flex flex-col jusitfy-center items-center space-y-10">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4  w-full">
//                 <div className="relative group flex justify-center items-center h-full w-full">
//                   <img
//                     className="object-center object-cover h-full w-full"
//                     src="https://i.pinimg.com/564x/26/c1/66/26c1667f67ab51fee28f10019370e02b.jpg"
//                     alt="girl-image"
//                   />
//                   <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
//                     أدوات منزلية
//                   </button>
//                   <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
//                 </div>

//                 <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
//                   <div className="relative group flex justify-center items-center h-full w-full">
//                     <img
//                       className="object-center object-cover h-full w-full"
//                       src="https://images.ctfassets.net/86of3mjdn78g/3xe56s8QA7VBVaeaBFqxBS/a2c1364d3766de9340385d24a3ca851b/10_electronic_brands_avex_Banner.jpg"
//                       alt="shoe-image"
//                     />
//                     <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
//                       الإلكترونيات
//                     </button>
//                     <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
//                   </div>
//                   <div className="relative group flex justify-center items-center h-full w-full">
//                     <img
//                       className="object-center object-cover h-full w-full"
//                       src="https://i.ibb.co/Hd1pVxW/louis-mornaud-Ju-6-TPKXd-Bs-unsplash-1-2.png"
//                       alt="watch-image"
//                     />
//                     <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
//                       ساعات
//                     </button>
//                     <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
//                   </div>
//                 </div>

//                 <div className="relative group justify-center items-center h-full w-full hidden lg:flex">
//                   <img
//                     className="object-center object-cover h-full w-full"
//                     src="https://i.pinimg.com/564x/71/2f/7d/712f7d90fcef36e2dd8a95f5553b1ff0.jpg"
//                     alt="girl-image"
//                   />
//                   <button className="dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white">
//                     إكسسوارات
//                   </button>
//                   <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-white bg-opacity-50"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//     </>
//   );
// }
// export default Mainsection;
import React from "react";
import { Laptop, Headphones, Watch, Smartphone } from "lucide-react";
import { Link } from "react-router-dom"; // تأكد من استيراد Link

const CategoryCard = ({ title, icon: Icon, imageSrc }) => (
  <Link to="/Catalog" className="w-full">
    <div className="bg-primary relative group flex flex-col justify-center items-center h-full w-full overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <img
        className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
        src={imageSrc}
        alt={title}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  </Link>
);

function Mainsection() {
  const categories = [
    {
      title: "الإلكترونيات",
      icon: Smartphone,
      imageSrc:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
    {
      title: "الساعات",
      icon: Watch,
      imageSrc:
        "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1779&q=80",
    },
    {
      title: "اللابتوبات",
      icon: Laptop,
      imageSrc:
        "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80",
    },
    {
      title: "السماعات",
      icon: Headphones,
      imageSrc:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="font-manrope font-bold text-4xl lg:text-5xl text-[#31363F] mb-12 text-center">
          أبرز الأقسام
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Mainsection;
