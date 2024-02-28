import AcmeLogo from '@/app/ui/acme-logo';
import styles from '@/app/ui/home.module.css';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-start rounded-lg bg-white-500 p-4 md:h-20">
        <Image src="/logo.png" width={150} height={50} alt="로고" />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div className="flex md:w-5/5">
            <span className={styles.shape} />
            <span className={styles.shape2} />
            <span>&nbsp;&nbsp;&nbsp;MADE BY EUNJAE</span>
          </div>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>
              TEST SERVER DATA CASHING & <br />
              UNIT TEST PROJECT
            </strong>
          </p>
          <Link
            href="/pages/dashboard"
            className="login-btn flex items-center gap-5 self-start rounded-lg px-6 py-3 text-sm font-medium text-white transition-colors md:text-base"
          >
            <span>LET&apos;S GO</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src={`https://cdn.dominos.co.kr/renewal2018/w/event/230802_deliciouslyA/img_1.jpg`}
            alt={`아이유`}
            width={500}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
