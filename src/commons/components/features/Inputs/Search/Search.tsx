'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import Image from 'next/image';
import * as styles from './Search.css';
import { getTags } from '@/domains/tag/api/tags.api';
import type { TagType } from '@/domains/tag/tpyes/tag.type';
import { TagList } from '../../Lists/TagList/TagList';
import { RelatedTags } from '../../Lists/RelatedTags/RelatedTags';

export default function Search() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [tagList, setTagList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [relatedTags, setRelatedTags] = useState<TagType[]>([]);
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);

  useEffect(() => {
    const searchTags = async () => {
      if (inputValue.trim().length > 0) {
        try {
          const response = await getTags(inputValue);
          setRelatedTags(response.tags);
        } catch (error) {
          console.error('태그 검색 실패:', error);
          setRelatedTags([]);
        }
      } else {
        setRelatedTags([]);
      }
    };

    const timer = setTimeout(searchTags, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.nativeEvent.isComposing || event.keyCode === 229) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prev) => (prev < relatedTags.length - 1 ? prev + 1 : prev));
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prev) => (prev > 0 ? prev - 1 : -1));
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();
      if (focusedIndex >= 0) {
        const selectedTag = relatedTags[focusedIndex].name;
        setTagList((prev) => [...prev, selectedTag]);
        setInputValue('');
        setRelatedTags([]);
        setFocusedIndex(-1);
      } else if (inputValue.trim()) {
        setTagList((prev) => [...prev, inputValue.trim()]);
        setInputValue('');
        setRelatedTags([]);
      }
      return;
    }

    if (event.key === 'Escape') {
      setIsExpanded(false);
      setFocusedIndex(-1);
    }
  };

  const onClickExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const onClickRelatedTag = (tag: TagType) => {
    setTagList((prev) => [...prev, tag.name]);
    setInputValue('');
    setRelatedTags([]);
    setFocusedIndex(-1);
  };

  return (
    <div className={styles.wrapper} role="button" tabIndex={0} onClick={onClickExpanded} onKeyDown={handleKeyDown}>
      {isExpanded ? (
        <>
          <div className={styles.expandedWrapper}>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="검색어를 입력하세요"
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
      ) : (
        <>
          <div
            className={styles.tagWrapper}
            role="button"
            tabIndex={0}
            aria-label="검색 확장 버튼"
            onKeyDown={handleKeyDown}
          >
            <TagList tags={tagList} />
          </div>
          <div className={styles.glassesWrapper}>
            <Image src="/images/buttons/readingGlasses.png" alt="ReadingGlasses" width={22} height={30} />
          </div>
        </>
      )}
    </div>
  );
}
