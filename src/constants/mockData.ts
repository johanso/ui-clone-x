// src/constants/mockData.ts
import { Post } from '@/components/Post/types';

export const MOCK_POSTS: Post[] = [
  {
    id: '1',
    content: 'The next generation of AI will transform how we work and live. ChatGPT is just the beginning. The future is incredibly bright for those who embrace these technological changes. 🤖✨ #AI #Innovation',
    author: {
      name: 'Elon Musk',
      username: 'elonmusk',
      avatar: 'general/avatar-elon.jpg'
    },
    media: {
      type: 'image',
      url: 'general/ai-image.jpg',
      width: 600,
      height: 400
    },
    createdAt: '2024-01-05T12:00:00Z',
    stats: {
      comments: 15723,
      reposts: 8945,
      likes: 127830
    }
  },
  {
    id: '2',
    content: 'Climate change is the defining challenge of our time. We need to invest in clean energy and sustainable technologies now. The cost of inaction far exceeds the cost of action. 🌍 #ClimateAction #Sustainability',
    author: {
      name: 'Bill Gates',
      username: 'BillGates',
      avatar: 'general/avatar-bill.jpg'
    },
    createdAt: '2024-01-04T15:30:00Z',
    stats: {
      comments: 8432,
      reposts: 12543,
      likes: 89321
    }
  },
  {
    id: '3',
    content: 'Had an incredible meeting with our Meta AI team. The progress on the metaverse is phenomenal. Excited to reveal what we are building. The future of social connection will be transformative! 🚀 #Metaverse #Tech',
    author: {
      name: 'Mark Zuckerberg',
      username: 'finkd',
      avatar: 'general/avatar-mark.jpg'
    },
    media: {
      type: 'image',
      url: 'general/ai-meta.jpg',
      width: 600,
      height: 400
    },
    createdAt: '2024-01-03T18:45:00Z',
    stats: {
      comments: 5234,
      reposts: 3421,
      likes: 45632
    }
  },
  {
    id: '4',
    content: 'Success in tech requires constant learning and adaptation. The tech landscape evolves every 6 months - embrace it! Reading one technical paper a day keeps obsolescence away 📚 #TechLife #ContinuousLearning',
    author: {
      name: 'Sundar Pichai',
      username: 'sundarpichai',
      avatar: 'general/avatar-sundar.jpg'
    },
    createdAt: '2024-01-02T09:15:00Z',
    stats: {
      comments: 3421,
      reposts: 5632,
      likes: 34521
    }
  },
  {
    id: '5',
    content: 'Celebrating 30 years since the first Linux kernel commit. Open source has transformed the world. Remember: the best code is code that helps others. Keep contributing, keep sharing! 🐧 #Linux #OpenSource',
    author: {
      name: 'Linus Torvalds',
      username: 'Linus__Torvalds',
      avatar: 'general/avatar-linus.jpg'
    },
    createdAt: '2024-01-01T20:30:00Z',
    repostedBy: {
      name: 'GitHub',
      username: 'github'
    },
    stats: {
      comments: 4521,
      reposts: 8943,
      likes: 67234
    }
  }
 ];