'use client';

import React from 'react';
import { User } from '../../types/User.tsx';
import { useQuery } from '@tanstack/react-query';

async function getUsers() {
  return (await fetch('https://jsonplaceholder.typicode.com/users').then(
    (res) => res.json(),
  )) as User[];
}

export default function Page() {
  const [count, setCount] = React.useState(0);
  const [id, setId] = React.useState(0);
  const { data, isLoading, error, isSuccess, isError } = useQuery<User[]>({
    queryKey: ['init-users'],
    queryFn: () => getUsers(),
    // enabled: false,
    staleTime: 20 * 1000,
  });

  if (error instanceof Error) {
    console.error('###error : ', error);
  } else if (isSuccess) {
    console.log('###isSuccess : ', isSuccess, count, data);
  } else if (isError) {
    console.log('###isError : ', isError, count, data);
  }

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  React.useEffect(() => {
    if (count === 10) {
      setId(count);
    }
  }, [count]);

  return (
    <>
      {isLoading ? (
        <p>로딩중</p>
      ) : (
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
                    alt={user.name}
                    style={{ width: 180, height: 180 }}
                  />
                  <h3>{user.name}</h3>
                  <h3>{user.username}</h3>
                  <h3>{user.email}</h3>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
