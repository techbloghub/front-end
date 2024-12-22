import Card from '@/components/features/Items/Card/Card';
import Header from '@/components/widgets/Header/Header';
import SearchToolbar from '@/components/widgets/SearchToolbar/SearchToolbar';
import * as styles from '@/styles/rootStyles.css';

export default function RootPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SearchToolbar />
      <Card />
    </div>
  );
}
