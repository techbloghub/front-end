interface PostingResponse {
  count: number;
  has_next_page: string;
  postings: PostingItemType[];
}

interface PostingItemType {
  posting_id: number;
  title: string;
  url: string;
  company: string;
  logo: string;
  tags: string[];
  create_time: string;
  update_time: string;
  published_time: string;
}

export type { PostingResponse, PostingItemType };
