"use client";

import React, { FunctionComponent } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../../_styles/layout.module.css";

const Header: FunctionComponent = () => {
  const pathname = usePathname();

  return (
    <div>
      <h1>
        <Link href="/">도미노 로고</Link>
      </h1>
    </div>
  );
};

export default Header;
