import { collapsedSearchWrapper } from './CollapsedSearch.css';
import { KeyboardEvent } from 'react';
import Image from 'next/image';
import { TagList } from '../../Lists/TagList/TagList';

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
        className={collapsedSearchWrapper}
        role="button"
        tabIndex={0}
        aria-label="검색 확장 버튼"
        onKeyDown={handleKeyDown}
      >
        <TagList tags={tagList} />
      </div>
      <Image src="/images/buttons/readingGlasses.png" alt="ReadingGlasses" width={22} height={30} />
    </>
  );
};
