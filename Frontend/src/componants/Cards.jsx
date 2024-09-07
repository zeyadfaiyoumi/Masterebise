import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      <div className="max-w-sm bg-gray-100 border border-gray-200 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 dark:bg-gray-800 dark:border-gray-700">
        <Link to="/details">
          <img
            className="rounded-t-lg w-full h-64 "
            src="https://tv-it.com/storage/shada/smart-watch/smart-watch-imilab-w02-watch.webp"
            alt="Smart Watch"
          />
        </Link>
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            ساعة Mi W02 الذكية
          </h5>
          <p className="mb-3 font-normal text-[#0A00C7] dark:text-gray-400">
            المورد: ZOS
          </p>
          <div className="flex justify-between">
            <div>
              <p className="font-normal text-black dark:text-gray-400">
                سعر التكلفة
              </p>
              <p className="font-bold text-scand  dark:text-gray-400 text-center">
                25 JD
              </p>
            </div>
            <div>
              <p className="font-normal text-black dark:text-gray-400 ">
                الربح المتوقع
              </p>
              <p className="font-bold text-scand dark:text-gray-400 text-center ">
                6.5 JD
              </p>
            </div>
          </div>
          <Link to="/Cart">
            <button
              type="button"
              className="mt-4 w-full text-white bg-[#0A00C7] hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              اضافة الى منتجاتي
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Cards;
