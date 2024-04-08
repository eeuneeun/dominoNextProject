import { create, StateCreator } from "zustand";
import { devtools, persist } from 'zustand/middleware'

type userInfo = {
  id : string,
  name: string,
  reqCount : number,
}

export interface IUserSlice{
  userInfo : userInfo,
  modifyUserInfo:(newUserInfo: userInfo)=>void; 
}


// 유저 정보 관련
export const userSlice = create<IUserSlice>()(
  devtools(
    persist(
      (set) => ({
        userInfo : {
          id : "",
          name: "",
          reqCount : 0,
        },
        modifyUserInfo: (newUserInfo) => {
          set({ userInfo : newUserInfo});
        },
      }),
      { name: 'bearStore' },
    )))