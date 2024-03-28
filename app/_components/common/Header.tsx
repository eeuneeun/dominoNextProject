"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import Gnb from "./Gnb";

export default function Header(): React.JSX.Element {

  return (
    <header className="header flex-start">
      <h1 className="logo">
        <Link href="/">BI 로고</Link>
      </h1>
      <Gnb />
    </header>
  );
};
