import { create } from "zustand";
import { persist } from "zustand/middleware";

// [240327 원은재]
// REDUX INIT STATE 선언과 비슷한 느낌으로, 인터페이스에 해당 스토어가 가질수 있는 모든 상태를 정의함 
// - 기본적인 상태 변수를 포함하여, 상태 변경이나 수정을 위한 함수들까지 모두 선언하여 전달
interface BearState {
  bears: number;
  increaseBears: () => void;
  decreaseBears: () => void;
  removeAllBears: () => void;
}

// [240327 원은재]
// zustand create 함수에 전달 할 수 있는 타입은 반드시 ()() currying 표기법을 사용하여 전달해야함
// ms/typescript 에러 때문에 두 개 이상의 제네릭 타입을 전달 할 경우 하나의 타입에 해당하는 값만 들어오면 에러가 나는 버그가 있음
export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increaseBears: () => set((state) => ({ bears: state.bears + 1 })),
      decreaseBears: () => set((state) => ({ bears: state.bears - 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "bear-store", // default to LocalStorage
    }
  )
);