import { TagType } from '@/domains/tag/tpyes/tag.type';
import { RelatedTags } from '../../Lists/RelatedTags/RelatedTags';
import { TagList } from '../../Lists/TagList/TagList';
import * as styles from './ExpandedSearch.css';
import { KeyboardEvent } from 'react';

export const ExpandedSearch = ({
  inputValue,
  setInputValue,
  handleKeyDown,
  tagList,
  relatedTags,
  focusedIndex,
  onClickRelatedTag,
  onClickExpanded,
}: {
  inputValue: string;
  setInputValue: (value: string) => void;
  handleKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
  tagList: string[];
  relatedTags: TagType[];
  focusedIndex: number;
  onClickRelatedTag: (tag: TagType) => void;
  onClickExpanded: () => void;
}) => {
  return (
    <>
      <div className={styles.expandedWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="검색어를 입력해 주세요."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />

        <TagList tags={tagList} />

        <RelatedTags relatedTags={relatedTags} focusedIndex={focusedIndex} onClickRelatedTag={onClickRelatedTag} />
      </div>

      <div
        className={styles.OutExpandedWrapper}
        onClick={onClickExpanded}
        role="button"
        tabIndex={0}
        aria-label="검색 축소 화면 버튼"
        onKeyDown={handleKeyDown}
      />
    </>
  );
};
