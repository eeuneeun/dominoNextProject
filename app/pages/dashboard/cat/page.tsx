'use client';

import React from 'react';
import { Cat } from '../../../types/Common.tsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import Image from 'next/image';

// # 함수 : 고양이 데이터 1개 가져오기
async function getCat() {
  return (await fetch(
    'https://api.thecatapi.com/v1/images/search?api_key="live_htTyfBboDIShSRUDlIyiLWqGLk81k0odsNZZQKXXHPjPKTfOGBsdGmMn5LIc9mtg"',
  ).then((res) => res.json())) as Cat[];
}

export default function Page() {
  // # 초를 세는 카운터
  const [count, setCount] = React.useState(0);
  // # 시간 판별 기준
  const [startTime, setStartTime] = React.useState(0);
  const { data, isLoading, error, isSuccess, isError } = useQuery<Cat[]>({
    queryKey: ['init-users'],
    queryFn: () => getCat(),
    enabled: startTime >= 10,
    staleTime: 5000, // 오래된 데이터로 간주되기 시작하는 주기
    gcTime: 5000, // 가비지 컬렉터에 의하여 캐시된 데이터가 삭제되는 주기 : staleTime + gcTime
    refetchInterval: 10000, // polling 기준 시간
  });

  // const {
  //   data,
  //   error,
  //   isError,
  //   isIdle,
  //   isPending,
  //   isPaused,
  //   isSuccess,
  //   failureCount,
  //   failureReason,
  //   mutate,
  //   mutateAsync,
  //   reset,
  //   status,
  //   submittedAt,
  //   variables,
  // } = useMutation<Cat[]>({
  //   mutationFn: () => getCat(),
  //   gcTime,
  //   mutationKey,
  //   networkMode,
  //   onError,
  //   onMutate,
  //   onSettled,
  //   onSuccess,
  //   retry,
  //   retryDelay,
  //   throwOnError,
  //   meta,
  // });

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
      setStartTime(count);
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
              {data?.map((cat) => (
                <div
                  key={cat.id}
                  style={{ border: '1px solid #ccc', textAlign: 'center' }}
                >
                  <Image
                    src={cat.url}
                    alt={cat.id}
                    width={cat.width}
                    height={cat.height}
                  />
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
