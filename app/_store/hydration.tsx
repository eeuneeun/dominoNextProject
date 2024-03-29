"use client"; 

import * as React from "react";
import { useChatRoomListStore } from "./chat-store"; 
// [240327 원은재]
// nextJS 에서 사용하고자 하는 경우에는 반드시 hydration 작업이 필요함
// 이는 SSR, SSG 렌더링 특성상 여러번의 렌더링 시에도 하나의 store 를 재사용 할 수 있게 하기 위함임
// zustand 이외의 라이브러리 사용시 hydration 의 순서 고려도 생각해 보아야 할 지점임
const Hydration = () => {
  React.useEffect(() => {
    useChatRoomListStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;