function Butoon(Name) {
  return (
    <>
      <button
        type="button"
        className={` text-white bg-[#0A00C7] hover:text-white border border-white hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 ${Name.className}`}
      >
        {Name.name}
      </button>
    </>
  );
}
export default Butoon;
