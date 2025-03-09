import { Get } from '@/commons/configs/fetch/http.api';
import type { TagResponse } from '@/domains/tag/tpyes/tag.type';
import { PostingResponse } from '../types/postings.type';

export const getPostings = async (tags?: string, cursor?: string, title?: string) => {
  const queryString = new URLSearchParams();
  if (tags) queryString.set('tags', tags);
  if (cursor) queryString.set('cursor', cursor);
  if (title) queryString.set('title', title);

  return Get<PostingResponse>(`/postings?${queryString.toString()}`);
};
