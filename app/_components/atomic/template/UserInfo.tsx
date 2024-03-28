import Link from 'next/link';
import * as React from 'react';

export interface IUserInfoProps {
}

export function UserInfo (props: IUserInfoProps) {
  return (
    <section className='auth-info'>
        <button className='user-profile'>은</button>
        <div className='panel-wrap'>
            <ul>
                <li><Link href="/settings">설정</Link></li>
                <li><Link href="/signout">로그아웃</Link></li>
            </ul>
        </div>
    </section>
  );
}
