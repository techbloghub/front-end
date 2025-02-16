import * as styles from './tagBox.css';

export function TagBox({ tagName }: { tagName: string }) {
  return <div className={styles.tagBox}>{tagName}</div>;
}
