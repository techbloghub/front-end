'use client';

import { useState } from 'react';
import Image from 'next/image';
import * as styles from './Search.css';

export default function Search() {
  const [isExpanded] = useState(false);

  return (
    <div className={styles.wrapper}>
      {isExpanded ? (
        <>
          <div className={styles.expandedWrapper}>
            <input type="text" placeholder="검색어를 입력하세요" />
          </div>

          <div className={styles.OutExpandedWrapper} />
        </>
      ) : (
        <>
          <div className={styles.tagWrapper}>
            {new Array(3).fill('React').map((el) => (
              <div key="test" className={styles.tagBox}>
                {el}
              </div>
            ))}
          </div>
          <div className={styles.glassesWrapper}>
            <Image src="/images/buttons/readingGlasses.png" alt="ReadingGlasses" width={22} height={30} />
          </div>
        </>
      )}
    </div>
  );
}
