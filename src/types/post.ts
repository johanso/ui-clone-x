export interface Post {
  id: string;
  content: string;
  author: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  createdAt: Date;
  media?: {
    type: 'image' | 'video';
    url: string;
  }[];
  stats: {
    likes: number;
    comments: number;
    reposts: number;
  };
}

export interface PostStats {
  comments: number;
  reposts: number;
  likes: number;
  bookmarks: number;
}

export interface PostMedia {
  id: string;
  type: 'image' | 'video';
  url: string;
  width: number;
  height: number;
  settings: MediaSettings;
}

export interface MediaSettings {
  type: 'original' | 'wide' | 'square';
  sensitive: boolean;
}
