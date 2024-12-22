import Search from '@/components/features/Inputs/Search/Search';
import Card from '@/components/features/Items/Card/Card';
import Header from '@/components/widgets/Header/Header';
import * as styles from '@/styles/rootStyles.css';

export default function RootPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Search />
      <Card />
    </div>
  );
}
