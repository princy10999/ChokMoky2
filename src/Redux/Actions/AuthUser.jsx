import { createAsyncThunk } from "@reduxjs/toolkit";
import { ApiGetNoAuth, ApiPostNoAuth } from "../../Api/Api";
import { api } from "../../Api/AuthApi";
export const dummyAPI = createAsyncThunk("dummyAPI", async (body) => {
  return ApiGetNoAuth(api.dummyAPI)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const emailVerify = createAsyncThunk("emailVerify", async (body) => {
  return ApiPostNoAuth(api.emailVerify, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const userSignupWithEmail = createAsyncThunk(
  "userSignupWithEmail",
  async (body) => {
    return ApiPostNoAuth(api.userSignupWithEmail, body)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => err);
  }
);
export const userSignupWithMobile = createAsyncThunk(
  "dummyAPI",
  async (body) => {
    return ApiPostNoAuth(api.userSignupWithMobile, body)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => err);
  }
);
export const mobileVerify = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.mobileVerify, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const loginCheack = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.loginCheack, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const loginCheackWithOtp = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.loginCheackWithOtp, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const loginCheackWithEmail = createAsyncThunk(
  "dummyAPI",
  async (body) => {
    return ApiPostNoAuth(api.loginCheackWithEmail, body)
      .then((res) => {
        return res?.data;
      })
      .catch((err) => err);
  }
);
export const forgetPassword = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.forgetPassword, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const verifyOtp = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.verifyOtp, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const resetPassword = createAsyncThunk("dummyAPI", async (body) => {
  return ApiPostNoAuth(api.resetPassword, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});
export const socialLogin = createAsyncThunk("socialLogin", async (body) => {
  return ApiPostNoAuth(api.socialLogin, body)
    .then((res) => {
      return res?.data;
    })
    .catch((err) => err);
});