import { TRENDING_EVENT, TRENDING_TOPICS } from "@/constants/trendingData";
import Link from "next/link";
import Image from "../commons/Image";

const PopularTags = () => {
 return (
   <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
     <h1 className="text-xl font-bold text-textGrayLight">
       {"What's"} Happening
     </h1>

     {/* Trending Event */}
     <div className="flex gap-4">
       <div className="relative w-20 h-20 rounded-xl overflow-hidden">
         <Image
           src={TRENDING_EVENT.image}
           alt={TRENDING_EVENT.title}
           width={120}
           height={120}
           useTransformation={true}
         />
       </div>
       <div className="flex-1">
         <h2 className="font-bold text-textGrayLight">
           {TRENDING_EVENT.title}
         </h2>
         <span className="text-sm text-textGray">{TRENDING_EVENT.time}</span>
       </div>
     </div>

     {/* Topics */}
     {TRENDING_TOPICS.map((topic, index) => (
       <div key={index} className="">
         <div className="flex items-center justify-between">
           <span className="text-textGray text-sm">{topic.category} • Trending</span>
           <Image src="icons/infoMore.svg" alt="info" width={16} height={16} />
         </div>
         <h2 className="text-textGrayLight text-md font-bold">{topic.title}</h2>
         <span className="text-textGray text-sm">{topic.postCount}</span>
       </div>
     ))}

     <Link href="/trending" className="text-iconBlue">
       Show More
     </Link>
   </div>
 );
};

export default PopularTags;
