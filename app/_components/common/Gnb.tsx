"use client";

import React, { ReactEventHandler, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserInfo } from "../atomic/template/UserInfo";

export default function Gnb(): React.JSX.Element {
  const pathname = usePathname();
  const [isLogin, setIsLogin]= useState(false)

  function signin(event:React.MouseEvent<HTMLElement>){
    event.preventDefault()
    setIsLogin(true)
  }

  return (
    <nav className="gnb flex-between">
      <ul className="menu-list flex-start">
        <li><Link href="/chat">채팅</Link></li>
        <li><Link href="/report">보고서 (오픈 예정)</Link></li>
        <li><Link href="/summary">요약 (오픈 예정)</Link></li>
      </ul>
      <ul className="user-info">
        { isLogin ? (
          <li>
            <UserInfo />
          </li>
          ):(
          <li onClick={signin}><Link href="/signin">로그인</Link></li>
        )
        }
        
      </ul>
    </nav>
  );
}
