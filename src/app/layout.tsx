// src/app/layout.tsx
import { LayoutProps } from '@/types/layout';
import { SITE_CONFIG } from '@/constants/config';
import LeftBar from "@/components/layout/LeftBar";
import RightBar from "@/components/layout/RightBar";
import "./globals.css";

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({ children, modal }: LayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-textGrayLight antialiased">
        <div className="mx-auto flex max-w-screen-md justify-between lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl">
          <header className="sticky top-0 z-40 h-screen px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </header>
          
          <main className="flex-1 border-x border-borderGray lg:min-w-[600px]">
            {children}
            {modal}
          </main>
          
          <aside className="sticky top-0 hidden h-screen flex-1 lg:flex ml-4 md:ml-8">
            <RightBar />
          </aside>
        </div>
      </body>
    </html>
  );
}