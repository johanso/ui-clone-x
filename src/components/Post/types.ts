// src/components/Post/types.ts
export interface PostAuthor {
  name: string;
  username: string;
  avatar: string;
}

export interface PostMedia {
  type: 'image' | 'video';
  url: string;
  width?: number;
  height?: number;
  sensitive?: boolean;
}

export interface PostStats {
  comments: number;
  reposts: number;
  likes: number;
}

export interface Post {
  id: string;
  content: string;
  author: PostAuthor;
  media?: PostMedia;
  createdAt: string;
  repostedBy?: {
    name: string;
    username: string;
  };
  stats: PostStats;
}

export interface PostProps {
  type?: 'status' | 'comment';
  post: Post;
}