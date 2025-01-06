export const SITE_CONFIG = {
  name: 'X Clone',
  description: 'A Twitter/X clone built with Next.js',
  url: process.env.NEXT_PUBLIC_APP_URL,
  ogImage: '/og.jpg',
  author: {
    name: 'Your Name',
    website: 'your-website.com',
  },
} as const;