import { createSlice, combineReducers } from "@reduxjs/toolkit";
import { dummyAPI } from "../Actions/AuthUser";

const initialState = {
    dummyLists: [],
  };

export let dummyAPISlice = createSlice({
    name: "dummyAPI",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(dummyAPI.pending, (state) => {
        state.status = "loading";
      });
      builder.addCase(dummyAPI.fulfilled, (state, { payload }) => {
        state.dummyLists = payload;
        state.status = "success";
      });
      builder.addCase(dummyAPI.rejected, (state, { payload }) => {
        state.dummyLists = payload;
        state.status = "failed";
      });
    },
  });

  
export default combineReducers({
    isDummyApiListData: dummyAPISlice.reducer,
  });