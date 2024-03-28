"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Snb(): React.JSX.Element {
  const pathname = usePathname();

  return (
    <nav className="snb">
      <h3>채팅 목록</h3>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </nav>
  );
};
