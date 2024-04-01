"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../../_styles/layout.module.css";

export const Nav = () => {
  const pathname = usePathname();

  return (
    <footer> Floatyn는 실수를 할 수 있습니다. 중요한 정보는 확인해주세요.</footer>
  );
};
