// # 예제 코드

import { createAppSlice } from "@/app/_store/createAppSlice";
import type { AppThunk } from "@/app/_store/store";
import type { PayloadAction } from "@reduxjs/toolkit";

export type isLoginState = {
  type: boolean;
  status: boolean;
};

export type tokenState = {
  type: string;
  value: "";
};

type authStateType = {
  isLogin: isLoginState["status"];
  accToken: tokenState["value"];
  refToken: tokenState["value"];
  asyStatus?: string;
};

const authState: authStateType = {
  isLogin: false,
  accToken: "",
  refToken: "",
  asyStatus: "",
};

export const authSlice = createAppSlice({
  name: "counter",
  initialState: authState,
  reducers: (create) => ({
    loginChk: create.reducer((state) => {
      state = {
        isLogin: false,
        accToken: "",
        refToken: "",
        asyStatus: "none",
      };
    }),
    signin: create.reducer((state, action: PayloadAction) => {
      state = {
        isLogin: true,
        accToken: "",
        refToken: "",
        asyStatus: "none",
      };
    }),
    // Use the `PayloadAction` type to declare the contents of `action.payload`
    signout: create.reducer((state, action: PayloadAction<number>) => {
      state = {
        isLogin: false,
        accToken: "",
        refToken: "",
        asyStatus: "none",
      };
    }),

    asyncSignin: create.asyncThunk(
      async (amount: number) => {
        let response = { data: "" };
        // const response = await fetchCount(amount);
        return response.data;
      },
      {
        pending: (state) => {
          state.asyStatus = "loading";
        },
        fulfilled: (state, action) => {
          state.asyStatus = "idle";
        },
        rejected: (state) => {
          state.asyStatus = "failed";
        },
      }
    ),
  }),
  // You can define your selectors here. These selectors receive the slice
  // state as their first argument.
  selectors: {
    selectLoginChk: (authState) => authState.isLogin,
    selectAsyncStatus: (authState) => authState.asyStatus,
    selectAccToken: (authState) => authState.accToken,
    selectRefToken: (authState) => authState.refToken,
  },
});

export const { loginChk, signin, signout, asyncSignin } = authSlice.actions;

export const authSelector = authSlice.selectors;
