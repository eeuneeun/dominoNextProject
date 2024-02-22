'use client';

import React from 'react';
import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { User } from '../types/User.tsx';
import { useQuery } from '@tanstack/react-query';

async function getUsers() {
  return (await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json(),
  )) as User[];
}

export default function Page() {
  const [count, setCount] = React.useState(0);
  const { data, error } = useQuery<User[], Error>({
    queryKey: ['init-users'],
    queryFn: () => getUsers(),
    staleTime: 30 * 1000,
  });

  if (error instanceof Error) {
    console.log(error);
    // ^? const error: Error
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <>
      <p>{count}</p>
      {error ? (
        `<p>${error}</p>`
      ) : (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr 1fr',
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div
              key={user.id}
              style={{ border: '1px solid #ccc', textAlign: 'center' }}
            >
              <img
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                alt={user.nme}
                style={{ width: 180, height: 180 }}
              />
              <h3>{user.nme}</h3>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
