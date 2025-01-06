// src/app/page.tsx
import Link from 'next/link';
import { NAVIGATION_ITEMS } from '@/constants/navigation';
import Share from '@/components/features/Share';
import Feed from '@/components/features/Feed';


export default function HomePage() {
  return (
    <section className="min-h-screen">
      <nav className="border-b border-borderGray px-4 pt-4 sticky top-0 z-10 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm">
        <ul className="flex justify-around font-bold text-textGray">
          {NAVIGATION_ITEMS.map((item) => (
            <li
              key={item.id}
              className={`${!item.showOnMobile ? 'hidden md:block' : ''}`}
            >
              <Link
                href={item.path}
                className={`flex items-center pb-3 transition-colors hover:text-textGrayLight ${
                  item.active ? 'border-b-4 border-iconBlue' : ''
                }`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      
      <Share />
      <Feed />
    </section>
  );
}