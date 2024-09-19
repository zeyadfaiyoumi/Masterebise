import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("http://localhost:5001/api/zos/getdata");
      return res.data; // إرجاع البيانات فقط
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message); // إرجاع رسالة الخطأ
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle", // حالة الطلب
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = "loading"; // تحديث الحالة إلى تحميل
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = "succeeded"; // تحديث الحالة إلى مكتملة
        state.products = action.payload; // تخزين البيانات في الحالة
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = "failed"; // تحديث الحالة إلى فاشلة
        state.error = action.payload; // تخزين رسالة الخطأ
      });
  },
});

export default productSlice.reducer;
