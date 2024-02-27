'use client';

import React from 'react';
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <ul>
        <li>
          <Link href="/pages/dashboard/user">유저</Link>
        </li>
        <li>
          <Link href="/pages/dashboard/cat">고양이</Link>
        </li>
      </ul>
    </>
  );
}
