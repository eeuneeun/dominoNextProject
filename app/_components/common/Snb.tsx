"use client";

import { useChatRoomListStore } from "@/app/_store/chatStore";
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useState } from "react";

export default function Snb(): React.JSX.Element {
  // 해당 페이지에서 사용하고자 하는 state hook 선언
  const [tmpRoomList, setTmpRoomList] = useState([]);

  // [0329 원은재]
  // zustand store 로부터 필요 state & dispatch 함수를 할당
  // const modifyRoom = useChatRoomListStore((state) => state.modifyRoom)

   const {chatRoomList, addRoom, modifyRoomList} = useChatRoomListStore();

  // 변경전 배열 가공
  function makeModifyRoomCondition(idx: number ){
     
    chatRoomList[idx].isPin = !(chatRoomList[idx].isPin)
    console.log(chatRoomList)
    modifyRoomList(chatRoomList);
  }

  function addNewChatRoom(){
    console.log("새 채팅방 추가");
  }
  return (
    <nav className="snb">
      <h3>채팅 목록</h3>
      <button className='add-chatroom' onClick={addNewChatRoom}>
          <AddBoxIcon />
        </button>
      <ul>
        { chatRoomList &&
          chatRoomList.map((item, idx)=>(<><li key={"key"+item.id}>
              <ul className="chat-room-panel">
                <li>{item.title}</li>
                <li className={`pin ${item.isPin ? "active" : ""}`}>
                  {/* 고정 여부 */}
                  <button onClick={()=>makeModifyRoomCondition(idx)}>
                    {item.isPin ? <TurnedInIcon /> : <TurnedInNotIcon />}
                  </button>
                </li>
                <li>{item.updated_at}</li>
              </ul>
          </li></>))}
      </ul>
    </nav>
  );
};
