export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  bio?: string;
  coverImage?: string;
  stats: UserStats;
  isVerified: boolean;
  joinedAt: Date;
}

export interface UserStats {
  followers: number;
  following: number;
  posts: number;
}