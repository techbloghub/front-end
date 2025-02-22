import { Get } from '@/commons/configs/fetch/http.api';
import type { TagResponse } from '@/domains/tag/tpyes/tag.type';

export const getTags = async (search?: string) => Get<TagResponse>(`/tags`, { search });
