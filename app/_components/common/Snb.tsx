"use client";

import { useChatRoomListStore } from "@/app/_store/chat-store";
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import { useState } from "react";

export default function Snb(): React.JSX.Element {
  // 해당 페이지에서 사용하고자 하는 state hook 선언
  const [tmpRoomList, setTmpRoomList] = useState([]);

  // [0329 원은재]
  // zustand store 로부터 필요 state & dispatch 함수를 할당
  const roomList = useChatRoomListStore((state) => state.list);
  // const modifyRoom = useChatRoomListStore((state) => state.modifyRoom)

   const {addRoom, modifyRoom} = useChatRoomListStore();

  // 변경전 배열 가공
  function makeModifyRoomCondition(idx: number ){
    roomList[idx].isPin = !(roomList[idx].isPin)
    console.log(roomList)
    modifyRoom(roomList);
  }


  return (
    <nav className="snb">
      <h3>채팅 목록</h3>
      <ul>
        { roomList &&
          roomList.map((item, idx)=>(<><li key={"key"+item.id}>
              <ul className="chat-room-panel">
                <li>{item.name}</li>
                <li className={`pin ${item.isPin ? "active" : ""}`}>
                  {/* 고정 여부 */}
                  <button onClick={()=>makeModifyRoomCondition(idx)}>
                    {item.isPin ? <TurnedInIcon /> : <TurnedInNotIcon />}
                  </button>
                </li>
                <li>{item.lastTime}</li>
              </ul>
          </li></>))}
      </ul>
    </nav>
  );
};
