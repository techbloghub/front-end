import Header from '@/components/Layouts/Header/Header';
import * as styles from '@/styles/rootStyles.css';

export default function RootPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
    </div>
  );
}
