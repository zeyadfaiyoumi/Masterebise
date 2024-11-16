// store.js
import { configureStore } from "@reduxjs/toolkit";
import products from "./productslice";
import profileReducer from ".//profileSlice"; // استيراد profileSlice

export default configureStore({
  reducer: { products, profile: profileReducer }, // إضافة الـ slice هنا
});
