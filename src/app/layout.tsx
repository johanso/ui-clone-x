import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_CONFIG } from '@/constants/config';
import AsideLeft from "./components/asideLeft";
import AsideRight from "./components/asideRight";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="max-w-screen-md lg:max-w-screen-lg xl-w-screen-xl xxl:max-w-screen-xxl mx-auto flex justify-between">
          <aside className="px-2 xsm:px-4 xxl:px-8">
            <AsideLeft />
          </aside>
          <section className="flex-1 lg:min-w-[600px] border-x-[1px] border-borderGray">
            {children}
          </section>
          <aside className="hidden lg:flex ml-4 md:ml-8 flex-1">
            <AsideRight />
          </aside>
        </main>
      </body>
    </html>
  );
}
