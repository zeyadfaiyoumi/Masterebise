import React from "react";
import Navbar from "../componants/navbar/Navbar";
import Footer from "../componants/footer/Footer";
import {
  Users,
  Target,
  Send,
  Phone,
  Mail,
  MapPin,
  Award,
  Star,
  ShieldCheck,
  Truck,
  Users2,
  HeartHandshake,
} from "lucide-react";

const Ourstory = () => {
  const teamMembers = [
    {
      name: "زياد فيومي",
      position: "المدير التنفيذي",
      email: "Zeyad@Gmail.com",
      phone: "0789 1719 252",
      location: "عمان، الأردن",
    },
    {
      name: "شاهين جابر",
      position: "مدير التطوير",
      email: "shaheen@Gmail.com",
      phone: "0777 725017",
      location: "عمان، الأردن",
    },
    {
      name: "عبادة الجوابرة",
      position: "مدير التسويق",
      email: "obada@Gmail.com",
      phone: "0777 386 827",
      location: "عمان، الأردن",
    },
  ];

  const achievements = [
    { number: "10,000+", text: "عميل سعيد" },
    { number: "50,000+", text: "طلب تم تنفيذه" },
    { number: "1,000+", text: "منتج متنوع" },
    { number: "99%", text: "نسبة رضا العملاء" },
  ];

  const values = [
    {
      icon: <ShieldCheck className="w-12 h-12 text-custmblue" />,
      title: "الجودة والموثوقية",
      description: "نلتزم بتقديم منتجات عالية الجودة وخدمة موثوقة لعملائنا",
    },
    {
      icon: <Users2 className="w-12 h-12 text-custmblue" />,
      title: "التركيز على العميل",
      description: "نضع عملاءنا في المقام الأول ونسعى دائماً لتلبية احتياجاتهم",
    },
    {
      icon: <HeartHandshake className="w-12 h-12 text-custmblue" />,
      title: "الأمانة والشفافية",
      description: "نؤمن بالتعامل الصادق والشفاف مع عملائنا وشركائنا",
    },
  ];

  return (
    <>
      <Navbar />
      <section className="bg-primary dark:bg-gray-900 pt-32">
        <div className="max-w-7xl mx-auto">
          {/* القسم الرئيسي */}
          <div className="text-center mb-20">
            <h1 className="text-5xl font-semibold text-custmblue mb-6">
              من نحن
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نحن شركة رائدة في مجال التجارة الإلكترونية، نسعى لتقديم تجربة تسوق
              فريدة ومميزة لعملائنا من خلال منصة متطورة وخدمة عملاء استثنائية.
            </p>
            <div className="w-32 h-2 bg-custmblue mx-auto mt-8 rounded-full"></div>
          </div>

          {/* الإنجازات */}
          <div className="mb-24 bg-blue-50 py-16 rounded-3xl shadow-inner">
            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-4xl font-bold text-custmblue mb-2">
                    {achievement.number}
                  </h3>
                  <p className="text-lg text-gray-600">{achievement.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* الرؤية والرسالة */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-4 rounded-full ml-4">
                  <Target className="w-10 h-10 text-custmblue" />
                </div>
                <h2 className="text-3xl font-bold text-custmblue">رؤيتنا</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                نسعى لأن نكون الوجهة الرائدة في مجال التجارة الإلكترونية في
                المنطقة العربية، من خلال توفير تجربة تسوق سلسة وآمنة لعملائنا،
                والارتقاء بمستوى الخدمات الإلكترونية لتلبي أعلى المعايير
                العالمية.
              </p>
            </div>

            <div className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-2xl overflow-hidden p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-50 p-4 rounded-full ml-4">
                  <Send className="w-10 h-10 text-custmblue" />
                </div>
                <h2 className="text-3xl font-bold text-custmblue">رسالتنا</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                تقديم أفضل المنتجات بأسعار منافسة مع ضمان جودة الخدمة وسرعة
                التوصيل، وتوفير تجربة تسوق متميزة تلبي احتياجات عملائنا. نلتزم
                بالابتكار المستمر وتطوير خدماتنا لتحقيق أعلى مستويات رضا
                العملاء.
              </p>
            </div>
          </div>

          {/* قيمنا */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-custmblue mb-4">قيمنا</h2>
              <p className="text-xl text-gray-600">
                المبادئ التي نؤمن بها ونعمل من خلالها
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 text-center p-8 rounded-2xl"
                >
                  <div className="bg-blue-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-custmblue mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-lg">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* فريق العمل */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-custmblue mb-4">
                فريق العمل
              </h2>
              <p className="text-xl text-gray-600">
                نخبة من المتخصصين يعملون لخدمتكم
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden p-8"
                >
                  <div className="text-center mb-6">
                    <div className="w-32 h-32 bg-gradient-to-r from-custmblue to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-4xl text-white font-bold">
                        {member.name[0]}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-custmblue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-custmblue font-medium mb-4">
                      {member.position}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600 hover:text-custmblue transition-colors">
                      <Mail className="w-6 h-6 ml-3" />
                      <span className="text-lg">{member.email}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-custmblue transition-colors">
                      <Phone className="w-6 h-6 ml-3" />
                      <span className="text-lg">{member.phone}</span>
                    </div>
                    <div className="flex items-center text-gray-600 hover:text-custmblue transition-colors">
                      <MapPin className="w-6 h-6 ml-3" />
                      <span className="text-lg">{member.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Ourstory;
