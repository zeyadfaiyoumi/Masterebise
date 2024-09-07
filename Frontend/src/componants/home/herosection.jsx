import heropic from "../../assets/heropic.gif";
function Hero() {
  return (
    <>
      <section className=" bg-primary dark:bg-gray-900 pt-28">
        <div className="  grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-12 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-16 place-self-center lg:col-span-6 text-right">
            <h1 className="max-w-2xl mb-6 mt-16 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-[#31363F]">
              رحلتك في التجارة
            </h1>
            <h3 className="max-w-2xl mb-6 text-xl font-extrabold md:text-2xl xl:text-3xl text-[#31363F] flex justify-center">
              تبدأ مع منصة
            </h3>
            <h3
              className="max-w-2xl mb-8 text-4xl md:text-5xl xl:text-6xl dark:text-white font-extrabold tracking-tight leading-relaxed flex justify-center 
  text-transparent bg-gradient-to-r from-custmblue via-[#010101]  to-custmblue bg-clip-text 
  transition-transform duration-300 ease-in-out"
            >
              ZOS
            </h3>

            <p className="max-w-2xl mb-8 font-semibold text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
              منصة مبتكرة تربط التجار بالموردين بسلاسة.
            </p>
            <div className="flex justify-center">
              <button
                type="button"
                className="text-white bg-custmblue border border-white hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600 dark:hover:text-white dark:focus:ring-red-900 transform transition-transform duration-300 hover:scale-105"
              >
                ابدأ
              </button>
            </div>
          </div>
          <div className="hidden lg:flex lg:col-span-6 justify-center items-center">
            <img
              className="h-auto max-w-lg transition-all duration-300 rounded-lg hover:scale-105 mt-8"
              src={heropic}
              alt="image description"
            />
          </div>
        </div>
      </section>
    </>
  );
}
export default Hero;
