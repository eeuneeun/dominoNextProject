import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

type roomInfo ={
  id: string;
  name : string;
  lastTime : string;
  isPin : boolean;
  history : [];
}

interface IChatRoom{
  roomInfo : roomInfo
  modifyRoom: () => void;
}

interface IChatRoomList {
    list : roomInfo[]
    addRoom:(newRoom: roomInfo)=>void; 
    modifyRoom: (newList:roomInfo[]) => void;
}
  
// 채팅룸 정보 관련
export const chatRoomSlice = create<IChatRoom>()(
  persist(
    (set) => ({
      roomInfo : {
      id: "0",
      name : "새 채팅",
      lastTime : "2024-03-27",
      isPin : false,
      history : []
      },
      modifyRoom: () => set((state)=>({roomInfo : state.roomInfo}))
    }),
    {
      name: "chatRoomInfo-store", // default to LocalStorage
    }
  )
);



// 채팅룸 리스트 관련
export const chatRoomListSlice = create<IChatRoomList>()(
  devtools(
  persist(
    (set) => ({
      list : [{
      id: "0",
      name : "새 채팅",
      lastTime : "2024-03-27",
      isPin : false,
      history : []
      }],
      addRoom: (newRoom) => { 
        set((state)=>({ list : state.list.concat(newRoom) }));
      }, 
      modifyRoom:  (newList) => {
        set({ list : newList});
      },
      
    }),
    {
      name: "chatRoomInfo-store", // default to LocalStorage
    }
  )
));

