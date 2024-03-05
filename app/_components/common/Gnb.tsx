"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import  from "../../_/layout.module.css";

export default function Gnb(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav>
      <Link href="/menu">메뉴</Link>
      <Link href="/e-coupon">e-쿠폰</Link>
      <Link href="/voucher">상품권 선물</Link>
      <Link href="/event">이벤트·제휴</Link>
      <Link href="/branch">매장검색</Link>
      <Link href="/chainstore">가맹점 모집</Link>
    </nav>
  );
}
