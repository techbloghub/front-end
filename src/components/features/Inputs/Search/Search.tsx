'use client';

import { useState } from 'react';
import Image from 'next/image';
import Tag from '@/components/atoms/Icons/Tag/Tag';
import * as styles from './Search.css';

export default function Search() {
  const [isExpanded] = useState(true);
  const [tagList, setTagList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState(''); // 입력값을 저장할 state 추가

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      setTagList((prev) => [...prev, inputValue.trim()]);
      setInputValue('');
    }
  };

  return (
    <div className={styles.wrapper}>
      {isExpanded ? (
        <>
          <div className={styles.expandedWrapper}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="검색어를 입력하세요"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            <div className={styles.expandedTagWrapper}>
              {tagList.map((el) => (
                <div key={el} className={styles.tagBox}>
                  {el}
                </div>
              ))}
            </div>

            <ul className={styles.relatedTagWrapper}>
              <li className={styles.relatedTagBox}>
                <Tag />
                <p className={styles.relatedTagText}>관련 태그</p>
              </li>
              <li className={styles.relatedTagBox}>
                <Tag />
                <p className={styles.relatedTagText}>관련 태그</p>
              </li>
            </ul>
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
