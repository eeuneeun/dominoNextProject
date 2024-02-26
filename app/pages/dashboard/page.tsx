'use client';

import React from 'react';
import Link from 'next/link';
export default function Page() {
  return (
    <>
      <ul>
        <li>
          <Link href="/dashboard/user">유저</Link>
        </li>
        <li>
          <Link href="/dashboard/cat">고양이</Link>
        </li>
      </ul>
    </>
  );
}
