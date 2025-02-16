'use client';

import { KeyboardEvent, useEffect, useState } from 'react';
import * as styles from './Search.css';
import { getTags } from '@/domains/tag/api/tags.api';
import type { TagType } from '@/domains/tag/tpyes/tag.type';
import { CollapsedSearch } from '../CollapsedSearch/CollapsedSearch';
import { ExpandedSearch } from '../ExpandedSearch/ExpandedSearch';

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
      setFocusedIndex((prev) => {
        if (prev === -1) return 0;
        return Math.min(prev + 1, relatedTags.length - 1);
      });
      return;
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prev) => {
        const next = prev > 0 ? prev - 1 : -1;
        return next;
      });
      return;
    }

    if (event.key === 'Enter') {
      event.preventDefault();

      if (focusedIndex >= 0 && relatedTags[focusedIndex]) {
        const selectedTag = relatedTags[focusedIndex].name;

        setTagList((prev) => {
          if (prev.includes(selectedTag)) {
            return prev;
          }
          return [...prev, selectedTag];
        });

        setInputValue('');
        setRelatedTags([]);
        setFocusedIndex(-1);
      } else if (inputValue.trim()) {
        const newTag = inputValue.trim();

        setTagList((prev) => {
          if (prev.includes(newTag)) {
            return prev;
          }
          return [...prev, newTag];
        });

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
    <div className={styles.wrapper} role="button" tabIndex={0} onClick={onClickExpanded}>
      {isExpanded ? (
        <ExpandedSearch
          inputValue={inputValue}
          setInputValue={setInputValue}
          handleKeyDown={handleKeyDown}
          tagList={tagList}
          relatedTags={relatedTags}
          focusedIndex={focusedIndex}
          onClickRelatedTag={onClickRelatedTag}
          onClickExpanded={onClickExpanded}
        />
      ) : (
        <CollapsedSearch tagList={tagList} handleKeyDown={handleKeyDown} />
      )}
    </div>
  );
}
