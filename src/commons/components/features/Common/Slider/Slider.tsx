'use client';

import * as styles from './Slider.css';
import { useSearchModeStore } from '@/commons/store/searchMode/useSearchModeStore';
import { SearchMode } from '@/commons/types/search/search.type';
import { useState } from 'react';

export default function Slider() {
  const { searchMode, toggleSearchMode } = useSearchModeStore();
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipText = searchMode === SearchMode.TITLE ? '제목 검색 모드' : '태그 검색 모드';

  return (
    <div className={styles.wrapper}>
      <div className={styles.Bar} onClick={toggleSearchMode} role="slider" tabIndex={2}>
        <div
          className={`${styles.Circle} ${searchMode === SearchMode.TITLE ? styles.circleDown : styles.circleUp}`}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {showTooltip && <div className={styles.tooltip}>{tooltipText}</div>}
        </div>
      </div>
    </div>
  );
}
