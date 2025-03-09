import { Get } from '@/commons/configs/fetch/http.api';
import type { TagResponse } from '@/domains/tag/tpyes/tag.type';

export const getPostings = async (tags?: string, cursor?: string, title?: string) =>
  Get<TagResponse>(`/postings${tags ? `?tags=${tags}` : ''}&cursor=${cursor}&title=${title}`);
