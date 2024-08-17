import Image from 'next/image';
import * as styles from './Search.css';

export default function Search() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tagWrapper}>
        {new Array(5).fill('React').map((el) => (
          <div key="test" className={styles.tagBox}>
            {el}
          </div>
        ))}
      </div>
      <div className={styles.glassesWrapper}>
        <Image src="/images/buttons/readingGlasses.png" alt="ReadingGlasses" width={22} height={30} />
      </div>
    </div>
  );
}
