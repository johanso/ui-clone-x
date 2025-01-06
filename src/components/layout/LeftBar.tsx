import Link from "next/link";
import Image from "@/components/commons/Image";
import { MENU_ITEMS, USER_INFO } from "@/constants/menuItems";

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* LOGO MENU BUTTON */}
      <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
        {/* LOGO */}
        <Link href="/" className="rounded-full">
          <Image src="icons/x-logo.png" alt="logo" width={44} height={44} className="filter invert" />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {MENU_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                src={`icons/${item.icon}`}
                alt={item.name}
                width={24}
                height={24}
              />
              <span className="hidden xxl:inline">{item.name}</span>
            </Link>
          ))}
        </div>
        {/* BUTTON */}
        <Link
          href="/"
          className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
        >
          <Image src="icons/post.svg" alt="new post" width={24} height={24} />
        </Link>
        <Link
          href="/"
          className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
        >
          Post
        </Link>
      </div>
      {/* USER */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative rounded-full overflow-hidden">
            <Image 
              src={USER_INFO.avatar} 
              alt={USER_INFO.name} 
              width={100} 
              height={100} 
              useTransformation={true} 
            />
          </div>
          <div className="hidden xxl:flex flex-col">
            <span className="font-bold">{USER_INFO.name}</span>
            <span className="text-sm text-textGray">{USER_INFO.username}</span>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">...</div>
      </div>
    </div>
  );
};

export default LeftBar;
