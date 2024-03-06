import Image from "next/image";
import type { ReactNode } from "react";
import { StoreProvider } from "./_store/StoreProvider";
import Header from "./_components/common/Header";
import Gnb from "./_components/common/Gnb";

import global from "./_styles/global.module.scss";
import styles from "./_styles/layout.module.css";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <StoreProvider>
      <html lang="ko">
        <body>
          <Header />
          <Gnb />
          <section className={styles.container}>
            <main
              className={styles.main}
              style={{ color: global.primaryColor }}
            >
              {children}
            </main>
          </section>
        </body>
      </html>
    </StoreProvider>
  );
}
