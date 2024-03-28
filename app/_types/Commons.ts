import { ReactNode } from "react";

export interface Props {
  readonly children: ReactNode;
}

export type User = {
  id: string;
  email: string;
  name: string;
  username: string;
};

export type Cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};
