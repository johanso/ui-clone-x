// src/constants/mockData.ts
import { Post } from '@/components/Post/types';


export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    author: {
      name: 'Lama Dev',
      username: 'lamaWebDev',
      avatar: 'general/avatar.png'
    },
    media: {
      type: 'image',
      url: 'general/post.jpeg',
      width: 600,
      height: 600
    },
    createdAt: '2024-01-05T12:00:00.000Z',  // Usamos string ISO
    repostedBy: {
      name: 'Lama Dev',
      username: 'lamaWebDev'
    },
    stats: {
      comments: 157,
      reposts: 100,
      likes: 234
    }
  },
  {
    id: '2',
    content: 'Building a Twitter clone with Next.js! 🚀',
    author: {
      name: 'Lama Dev',
      username: 'lamaWebDev',
      avatar: 'general/avatar.png'
    },
    createdAt: '2024-01-05T12:00:00.000Z',  // Fecha fija
    stats: {
      comments: 42,
      reposts: 21,
      likes: 156
    }
  }
];