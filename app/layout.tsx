import Image from "next/image";
import type { ReactNode } from "react";
import Header from "./_components/common/Header";
import Snb from "./_components/common/Snb";

import "./_styles/reset.css";
import "./_styles/global.css";
import global from "./_styles/global.module.scss";
import styles from "./_styles/layout.module.css";
import Hydration from "./_store/hydration";

interface Props {
  readonly children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
      <html lang="ko">
        <body>
          <Hydration />
          <Header />
          <Snb />
          <section className="contents-wrap">
            <main
              className={styles.main}
              style={{ color: global.primaryColor }}
            >
              {children}
            </main>
          </section>
        </body>
      </html>
  );
}
