# X-UI Clone (Twitter/X Clone)

A modern Twitter/X clone built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a responsive design and real-time interactions.

[Live Demo](https://ui-clone-x.vercel.app/)


## Features

- Server-Side Rendering (SSR)
- ImageKit for media handling
- Responsive layout
- Post creation & sharing
- Media upload with preview
- Real-time interactions

## Tech Stack

- Next.js 15.1.0
- React 19
- TypeScript
- Tailwind CSS
- ImageKit
- Vercel (Deployment)


## Project Structure

- `src/app`: Next.js App Router and pages
- `src/components`: React components
  - `common`: Reusable UI components
  - `layout`: Layout-specific components
  - `features`: Feature-specific components
- `src/constants`: Application constants
- `src/types`: TypeScript type definitions
- `src/lib`: Utilities and configurations

## Getting Started

```bash
# Clone repository
git clone https://github.com/johanso/ui-clone-x.git

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev