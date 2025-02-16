import { Get } from '@/configs/fetch/http.api';

export const getTags = async (search?: string) => Get(`/tags`, { search });
