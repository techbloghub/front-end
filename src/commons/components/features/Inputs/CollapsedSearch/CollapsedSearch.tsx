import { collapsedSearchWrapper } from './CollapsedSearch.css';
import { KeyboardEvent } from 'react';
import Image from 'next/image';
import { TagList } from '../../Lists/TagList/TagList';
import * as styles from './CollapsedSearch.css';

export const CollapsedSearch = ({
  tagList,
  handleKeyDown,
}: {
  tagList: string[];
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
}) => {
  return (
    <>
      <div
        className={styles.collapsedSearchWrapper}
        role="button"
        tabIndex={0}
        aria-label="검색 확장 버튼"
        onKeyDown={handleKeyDown}
      >
        {tagList.length > 0 ? <TagList tags={tagList} /> : <p className={styles.placeholder}>검색어를 입력해주세요.</p>}
      </div>
      <Image src="/images/buttons/readingGlasses.png" alt="ReadingGlasses" width={22} height={30} />
    </>
  );
};
