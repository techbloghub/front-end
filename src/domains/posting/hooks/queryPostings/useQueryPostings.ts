import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostings } from '../../api/posting.api';
import { QUERY_KEYS } from '@/commons/constants/keys/queryKeys';
import { PostingResponse } from '../../types/postings.type';
import { useSearchModeStore } from '@/commons/store/searchMode/useSearchModeStore';
import { SearchMode } from '@/commons/types/search/search.type';

export const useQueryPostings = (tags?: string, title?: string) => {
  const { searchMode } = useSearchModeStore();

  const tagsParam = searchMode === SearchMode.TAG ? tags : undefined;
  const titleParam = searchMode === SearchMode.TITLE ? title : undefined;

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEYS.POSTINGS, tagsParam, titleParam],
    queryFn: ({ pageParam }) => getPostings(tagsParam, pageParam, titleParam),
    initialPageParam: undefined,
    getNextPageParam: (lastPage: PostingResponse) => {
      return lastPage.has_next_page ? lastPage.postings[lastPage.postings.length - 1].posting_id.toString() : undefined;
    },
    enabled: Boolean(tagsParam) || Boolean(titleParam) || (!tagsParam && !titleParam),
  });

  return {
    data,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage: !!hasNextPage,
    isFetchingNextPage,
    postings: data?.pages.flatMap((page) => page.postings) || [],
  };
};
