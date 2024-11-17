import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 1. إنشاء دالة جلب المنتجات
export const getProduct = createAsyncThunk("products/getProduct", async () => {
  const response = await axios.get("http://localhost:5001/api/zos/getdata");
  // .ENV
  return response.data;
});

// 3. إنشاء slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    productDetails: null,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // حالة جلب المنتجات
      .addCase(getProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// 4. تصدير الحالات
export const selectAllProducts = (state) => state.products.products;
export const selectProductDetails = (state) => state.products.productDetails;
export const selectProductsStatus = (state) => state.products.status;
export const selectProductsError = (state) => state.products.error;

// 5. تصدير المنتج slice
export default productSlice.reducer;
