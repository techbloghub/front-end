import RemoteControl from '@/commons/components/features/Common/RemoteControl/RemoteControl';
import Card from '@/commons/components/features/Items/Card/Card';
import Header from '@/commons/components/widgets/Header/Header';
import SearchToolbar from '@/commons/components/widgets/SearchToolbar/SearchToolbar';
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
