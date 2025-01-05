'use client';

import ArrowUp from '@/components/atoms/Icons/ArrowUp/ArrowUp';
import { scrollToTop } from '@/utils/ui/scrollToTop/scrollToTop';
import * as styles from './RemoteControl.css';

export default function RemoteControl() {
  return (
    <aside className={styles.wrapper}>
      <button
        className={styles.iconWrapper}
        type="button"
        aria-label="페이지 최상단으로 이동"
        onClick={() => scrollToTop}
      >
        <ArrowUp />
      </button>
    </aside>
  );
}
