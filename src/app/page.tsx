import RemoteControl from '@/components/features/Common/RemoteControl/RemoteControl';
import Card from '@/components/features/Items/Card/Card';
import Header from '@/components/widgets/Header/Header';
import SearchToolbar from '@/components/widgets/SearchToolbar/SearchToolbar';
import * as styles from '@/commons/styles/rootStyles.css';

export default function RootPage() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <SearchToolbar />
      <Card />
      <RemoteControl />
    </div>
  );
}
