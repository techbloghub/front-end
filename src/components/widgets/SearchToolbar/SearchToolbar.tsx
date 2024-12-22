import Slider from '@/components/features/Common/Slider/Slider';
import Search from '@/components/features/Inputs/Search/Search';
import * as styles from './SearchToolbar.css';

export default function SearchToolbar() {
  return (
    <div className={styles.wrapper}>
      <Search />
      <Slider />
    </div>
  );
}
