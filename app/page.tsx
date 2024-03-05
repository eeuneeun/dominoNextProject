import type { Metadata } from "next";
import Main from "./(pages)/main/page";

export default function IndexPage() {
  return <Main />;
}

export const metadata: Metadata = {
  title: "Redux Toolkit",
};
