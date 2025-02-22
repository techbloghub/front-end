import type { TagType } from '@/domains/tag/tpyes/tag.type';
import * as styles from './RelatedTags.css';
import Tag from '@/commons/components/atoms/Icons/Tag/Tag';

export const RelatedTags = ({
  relatedTags,
  focusedIndex,
  onClickRelatedTag,
}: {
  relatedTags: TagType[];
  focusedIndex: number;
  onClickRelatedTag: (tag: TagType) => void;
}) => {
  return (
    <ul className={styles.relatedTagWrapper}>
      {relatedTags.map((tag, index) => (
        <li
          key={tag.id}
          className={`${styles.relatedTagBox} ${index === focusedIndex ? styles.focusedTag : ''}`}
          onClick={() => onClickRelatedTag(tag)}
          tabIndex={0}
          role="option"
          aria-selected={index === focusedIndex}
        >
          <Tag />
          <p className={styles.relatedTagText}>{tag.name}</p>
        </li>
      ))}
    </ul>
  );
};
