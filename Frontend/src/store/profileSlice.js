// profileSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Thunk لجلب بيانات الملف الشخصي
export const fetchUserProfile = createAsyncThunk(
  "profile/fetchUserProfile",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:5001/api/zos/profil", {
        withCredentials: true,
      });
      return response.data.Users[0];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateUserProfile = createAsyncThunk(
  "profile/updateUserProfile",
  async (updatedData, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.put(
        "http://localhost:5001/api/zos/updateUserprofil",
        updatedData,
        { withCredentials: true }
      );
      // بعد نجاح التحديث نقوم بجلب البيانات المحدثة
      dispatch(fetchUserProfile()); // تحديث البيانات مباشرة بعد الحفظ
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
const profileSlice = createSlice({
  name: "profile",
  initialState: {
    userInfo: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = { ...state.userInfo, ...action.payload };
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default profileSlice.reducer;
