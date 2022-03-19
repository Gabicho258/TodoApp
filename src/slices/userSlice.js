import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { user } from "../api/index";

const { loginUser, createUser, getOneUser } = user;

const initialState = {};

export const loginUserAsync = createAsyncThunk("loginUser", async (user) => {
  const response = await loginUser(user);
  return response;
});

export const createUserAsync = createAsyncThunk("user/create", async (user) => {
  const response = await createUser(user);
  return response;
});

export const getOneUserAsync = createAsyncThunk(
  "user/getOneUser",
  async (id) => {
    const response = await getOneUser(id);
    return response.data;
  }
);
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOneUserAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUserAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUserAsync.pending, (state, action) => {
        state.alertUser = false;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.alertUser = true;
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.userLoggued = action.payload;
        state.loggued = true;
        localStorage.setItem("user", JSON.stringify(action.payload));
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.created = true;
      });
  },
});
export const userCreated = (state) => state.user.created;
export const userInfo = (state) => state.user.userLoggued;
export const loggued = (state) => state.user.loggued;
export const alertUser = (state) => state.user.alertUser;

export default userSlice.reducer;
