import Navbar from "../componants/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../componants/footer/Footer";
import {
  faWallet,
  faCheckCircle,
  faHeadset,
  faBox,
  faDollarSign,
  faQuestionCircle,
} from "@fortawesome/free-solid-svg-icons";
function Profil() {
  return (
    <>
      <Navbar />
      <div className="bg-primary">
      <section className=" grid grid-cols-1   mt-20 sm:grid-cols-2 md:grid-cols-3 gap-6 m p-12 ">
        <div className=" bg-gray-100 rounded-lg shadow-lg p-6 sm:col-span-2 md:col-span-1">
          <div className="flex  justify-start mb-4">
            <FontAwesomeIcon
              icon={faWallet}
              className="text-black text-2xl mr-2 pl-2"
            />
            <h1 className="font-bold text-xl">المحفظة المالية</h1>
          </div>
          <hr className="h-1 bg-red-500 mb-4" />
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3 ">
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="text-[#0A00C7] text-xl mr-2 h-16 w-20 flex justify-center"
              />
            </div>
            <h1 className="font-bold p-7 flex justify-center">
              اجمالي الرصيد المتاح
            </h1>

            <h1 className="font-bold text-[#0A00C7] text-2xl flex justify-center">
              15.5 د.أ
            </h1>
          </div>
        </div>

        <div className=" bg-gray-100 rounded-lg shadow-lg p-6 sm:col-span-2 md:col-span-1">
          <div className="flex  justify-start mb-4">
            <FontAwesomeIcon
              icon={faBox}
              className="text-black text-2xl mr-2 pl-2"
              title="Orders"
            />
            <h1 className="font-bold text-xl"> الطلبات</h1>
          </div>
          <hr className="h-1 bg-red-500 mb-4" />
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3 ">
              <FontAwesomeIcon
                icon={faBox}
                className="text-[#0A00C7] text-xl mr-2 h-16 w-20 flex justify-center"
                title="Orders"
              />
            </div>
            <h1 className="font-bold p-7 flex justify-center">
              اجمالي الطلبات المسلمة
            </h1>

            <h1 className="font-bold text-[#0A00C7] text-2xl flex justify-center">
              12
            </h1>
          </div>
        </div>
        <div className=" bg-gray-100 rounded-lg shadow-lg p-6 sm:col-span-2 md:col-span-1">
          <div className="flex  justify-start mb-4">
            <FontAwesomeIcon
              icon={faDollarSign}
              className="text-black text-2xl mr-2 pl-2"
              title="Sales"
            />
            <h1 className="font-bold text-xl"> المبيعات</h1>
          </div>
          <hr className="h-1 bg-red-500 mb-4" />
          <div className="flex flex-col items-center">
            <div className="flex items-center mb-3 ">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="text-[#0A00C7] text-xl mr-2 h-16 w-20 flex justify-center"
                title="Sales"
              />
            </div>
            <h1 className="font-bold p-7 flex justify-center">
              اجمالي المبيعات
            </h1>

            <h1 className="font-bold text-[#0A00C7] text-2xl flex justify-center">
              39.5 د.أ
            </h1>
          </div>
        </div>
      </section>
      <div className="flex flex-col gap-4 p-14">
        <div className="h-16 bg-white rounded-lg shadow-md flex items-center justify-between p-4">
          <div className="flex">
            <FontAwesomeIcon
              icon={faQuestionCircle}
              className="text-black text-2xl mr-2 pl-2"
              title="Technical Support"
            />
            <h1 className="font-semibold text-lg"> مركز الدعم الفني </h1>
          </div>
          <div className="flex">
            <h1 className="font-semibold text-lg text-[#0A00C7]">ارسل طلب </h1>
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-[#0A00C7] text-2xl mr-3"
            />
          </div>
        </div>
      </div></div>
      <Footer />
    </>
  );
}
export default Profil;
