import { useQuery } from '@tanstack/react-query';
import { getPostings } from '../../api/posting.api';
import { QUERY_KEYS } from '@/commons/constants/keys/queryKeys';

export const useQueryPostings = (tags?: string, cursor?: string, title?: string) => {
  const { data, isLoading, error } = useQuery({
    queryKey: [QUERY_KEYS.POSTINGS, tags, cursor, title],
    queryFn: () => getPostings(tags, cursor, title),
  });

  return { data, isLoading, error };
};
