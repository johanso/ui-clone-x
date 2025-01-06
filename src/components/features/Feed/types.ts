import { Post as PostType } from '@/types/post';

export interface FeedProps {
  posts?: PostType[];
  isLoading?: boolean;
}