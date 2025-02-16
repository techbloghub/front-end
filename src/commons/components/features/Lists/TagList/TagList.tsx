import { TagBox } from '@/commons/components/atoms/boxes/tagBox/tagBox';
import * as styles from './TagList.css';

export const TagList = ({ tags }: { tags: string[] }) => {
  return (
    <div className={styles.tagListWrapper}>
      {tags.map((tag) => (
        <TagBox key={tag} tagName={tag} />
      ))}
    </div>
  );
};
