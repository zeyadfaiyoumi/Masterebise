import Navbar from "../componants/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faShoppingCart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Myproduct() {
  return (
    <>
      <Navbar />
      <div className="pt-28 bg-primary pb-96">
        <div className="p-4 bg-gray-100 rounded-lg shadow-md max-w-4xl mx-auto mt-8">
          <h2 className="text-lg font-bold mb-4">قائمة المنتجات</h2>
          <div className="my-4">
            <label
              htmlFor="product-search"
              className="block text-muted-foreground mb-2"
            >
              الوصول السريع للمنتج
            </label>
            <input
              type="text"
              id="product-search"
              placeholder="ادخل اسم المنتج"
              className="w-full p-2 border border-border rounded-md"
            />
          </div>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="p-2 border border-border">الصورة</th>
                <th className="p-2 border border-border">العنوان</th>
                <th className="p-2 border border-border">سعر البيع المقترح</th>
                <th className="p-2 border border-border">سعر التكلفة</th>
                <th className="p-2 border border-border">الحالة</th>
                <th className="p-2 border border-border">الاجراءات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-border">
                <td className="p-2 border border-border">
                  <img
                    src="https://placehold.co/50x50"
                    alt="Mi W02 Smart Watch"
                    className="rounded"
                  />
                </td>
                <td className="p-2 border border-border">ساعة Mi W02 الذكية</td>
                <td className="p-2 border border-border text-red-500">31JD</td>
                <td className="p-2 border border-border text-scand">25JD</td>
                <td className="p-2 border border-border">
                  <button className="bg-scand text-white p-1 rounded">
                    فعال
                  </button>
                </td>
                <td className="p-2 border border-border">
                  <div className="flex justify-around">
                    <Link>
                      <button className="text-blue-600 hover:bg-blue-100 p-1 rounded-full">
                        <FontAwesomeIcon icon={faEye} />
                      </button>
                    </Link>
                    <Link to="/Cartt">
                      <button className="text-yellow-600 hover:bg-yellow-100 p-1 rounded-full">
                        <FontAwesomeIcon icon={faShoppingCart} />
                      </button>
                    </Link>
                    <button className="text-red-600 hover:bg-red-100 p-1 rounded-full">
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="mt-4 text-muted-foreground flex justify-between items-center">
            <span>1-1 of 10</span>
            <div>
              <button className="text-primary hover:underline">❮</button>
              <button className="ml-2 text-primary hover:underline">❯</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Myproduct;
