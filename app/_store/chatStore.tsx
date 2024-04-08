import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type roomInfo ={
    id: string;
    _id: string;
    user_id: string;
    title : string;
    created_at: string;
    updated_at: string;
    document_group_id : string;
    isPin : boolean;
    history : [];
}

interface IChatRoom{
    roomInfo : roomInfo
    modifyRoom: () => void;
}

interface IChatRoomList {
    chatRoomList : roomInfo[]
    addRoom:(newRoom: roomInfo)=>void;
    modifyRoomList: (newList:roomInfo[]) => void;
}

// 채팅룸 정보 관련
export const useChatRoomStore = create<IChatRoom>()(
    devtools(
        persist(
            (set) => ({
                roomInfo : {
                    id: "0",
                    _id: "0",
                    user_id: "local",
                    title : "새 채팅",
                    created_at: "",
                    updated_at: "",
                    document_group_id : "",
                    isPin : false,
                    history : []
                },
                modifyRoom: () => set((state)=>({roomInfo : state.roomInfo}))
            }),
            {
                name: "chatRoomInfo-store", // default to LocalStorage
            }
        )
    )
);

// 채팅룸 리스트 관련
export const useChatRoomListStore = create<IChatRoomList>()(
    devtools(
        persist(
            (set) => ({
                chatRoomList : [{
                    id: "0",
                    _id: "0",
                    user_id: "local",
                    title : "새 채팅",
                    created_at: "",
                    updated_at: "",
                    document_group_id : "",
                    isPin : false,
                    history : []
                }],
                addRoom: (newRoom) => {
                    set((state)=>({ chatRoomList : state.chatRoomList.concat(newRoom) }));
                },
                modifyRoomList:  (newList) => {
                    set({ chatRoomList : newList});
                },
            }),
            {
                name: "chatRoomInfo-store", // default to LocalStorage
            }
        )
    )
);

// 비지니스 로직 쪽으로 빠질 헬퍼 함수
function findRoom(room : roomInfo, findId : roomInfo["id"]){
  if(room.id === findId){
      return true;
  }
}