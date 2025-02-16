interface TagType {
  id: number;
  name: string;
}

interface TagResponse {
  count: number;
  tags: TagType[];
}

export type { TagType, TagResponse };
