'use client';

import { useState } from 'react';
import * as styles from './Slider.css';

export default function Slider() {
  const [isDown, setIsDown] = useState(false);

  const handleBarClick = () => {
    setIsDown((prev) => !prev);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.Bar} onClick={handleBarClick} role="slider" tabIndex={2}>
        <div className={`${styles.Circle} ${isDown ? styles.circleDown : styles.circleUp}`} />
      </div>
    </div>
  );
}
