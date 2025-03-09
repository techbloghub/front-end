'use client';

import { useState } from 'react';
import * as styles from './Slider.css';
import { useSearchModeStore } from '@/commons/store/searchMode/useSearchModeStore';
import { SearchMode } from '@/commons/types/search/search.type';

export default function Slider() {
  const { searchMode, toggleSearchMode } = useSearchModeStore();

  return (
    <div className={styles.wrapper}>
      <div className={styles.Bar} onClick={toggleSearchMode} role="slider" tabIndex={2}>
        <div className={`${styles.Circle} ${searchMode === SearchMode.TITLE ? styles.circleDown : styles.circleUp}`} />
      </div>
    </div>
  );
}
