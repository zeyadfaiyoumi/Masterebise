import Navbar from "../componants/navbar/Navbar";
import Footer from "../componants/footer/Footer";
// import zeyad from "../assets/zeyad.JPG";
import React from "react";
import {
  FaEye,
  FaBullseye,
  FaChartLine,
  FaUsers,
  FaBoxOpen,
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const Ourstory = () => {
  const teamMembers = [
    {
      name: "زياد ماهر زياد فيومي",
      role: "المؤسس والرئيس التنفيذي",
      image:
        "https://cdn.discordapp.com/attachments/1239307079853019276/1277876324123410452/zeyad.JPG?ex=66cec291&is=66cd7111&hm=47e9cd5c30c6c66918b58dc9d0cae9bbae862966478b917cb1598c423c19da47&", // المسار الجديد
      social: {
        facebook:
          "https://www.facebook.com/profile.php?id=100064364074387&mibextid=ZbWKwL",
        instagram:
          "https://www.instagram.com/zeyad_al_faiyoumi?igsh=MXg2aWJzajRyNTIzMw==",
      },
    },
    {
      name: "شاهين ايهاب شاهين جابر",
      role: "مدير التسويق",
      image:
        "https://cdn.discordapp.com/attachments/1239307079853019276/1277875973051650140/53fbac53a57da688.jpeg?ex=66cec23d&is=66cd70bd&hm=8b195d4ddab63caaeb8f7a4ef025189b856e5b27cef2ed50d1d6dd39e45850b4&", // المسار الجديد
      social: {
        facebook:
          "https://www.facebook.com/profile.php?id=100004574075700&mibextid=JRoKGi",
        instagram:
          "https://www.instagram.com/shaheen_jaber?igsh=bzZjdzhxaDBoZjJ5",
      },
    },
    {
      name: "عبادة اسماعيل علي الجوابرة",
      role: "مدير التكنولوجيا",
      image:
        "https://cdn.discordapp.com/attachments/1239307079853019276/1277875973483925515/3840881bf7afb4bd.jpeg?ex=66cec23d&is=66cd70bd&hm=a815a1896168c17a0beaacdf94796f0639eae2770a710191918bf5ab2beb5f9a&", // المسار الجديد
      social: {
        facebook: "https://www.facebook.com/obada.jawabreh.94?mibextid=JRoKGi",
        instagram:
          "https://www.instagram.com/obada_jawabreh?igsh=enY0NXRwM2k2dmxn",
      },
    },
  ];

  const stats = [
    {
      label: "المبيعات السنوية",
      value: "10 مليون دينار",
      icon: <FaShoppingCart />,
    },
    { label: "التجار", value: "500+", icon: <FaUsers /> },
    { label: "الموردين", value: "100+", icon: <FaBoxOpen /> },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-primary min-h-screen">
        <div className="container mx-auto px-4 py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaEye className="text-4xl text-blue-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">رؤيتنا</h2>
              <p className="text-black">
                نسعى لأن نكون المنصة الرائدة في مجال التجارة الإلكترونية، نربط
                بين التجار والموردين بكفاءة وفعالية.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaBullseye className="text-4xl text-green-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">رسالتنا</h2>
              <p className="text-black">
                توفير منصة موثوقة وسهلة الاستخدام تمكن التجار من الوصول إلى أفضل
                الموردين وتنمية أعمالهم.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FaChartLine className="text-4xl text-red-500 mb-4" />
              <h2 className="text-xl font-semibold mb-2">أهدافنا</h2>
              <p className="text-black">
                تحقيق نمو مستدام، توسيع قاعدة عملائنا، وتحسين تجربة المستخدم
                باستمرار.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md mb-16">
            <h2 className="text-2xl font-semibold mb-4">قصة نجاحنا</h2>
            <p className="mb-6 text-black">
              بدأنا رحلتنا في عام 2020 بفكرة بسيطة: جعل التجارة الإلكترونية أكثر
              سهولة وفعالية للجميع. منذ ذلك الحين، نمونا بشكل كبير، وساعدنا آلاف
              التجار في تنمية أعمالهم وربطهم بأفضل الموردين.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 border-2 border-gray-200"
                  />
                  <h3 className="text-lg font-semibold mb-2">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href={member.social.facebook}
                      className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      aria-label={`Facebook profile of ${member.name}`}
                    >
                      <FaFacebookF className="text-2xl" />
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
                      aria-label={`Instagram profile of ${member.name}`}
                    >
                      <FaInstagram className="text-2xl" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              إنجازاتنا بالأرقام
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl text-blue-500 mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ourstory;
