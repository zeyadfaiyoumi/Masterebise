import { configureStore } from "@reduxjs/toolkit"; // استخدم استيراد مسمى
import products from "./productslice";

export default configureStore({
  reducer: { products },
});
