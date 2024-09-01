import Card from '@/components/Layouts/Card/Card';
import Header from '@/components/Layouts/Header/Header';
import Search from '@/components/Layouts/Search/Search';
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
