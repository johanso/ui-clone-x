import { RECOMMENDED_USERS } from "@/constants/recommendedUsers";
import Link from "next/link";
import Image from "../commons/Image";

const Recommendations = () => {
 return (
   <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
     {RECOMMENDED_USERS.map((user) => (
       <div key={user.username} className="flex items-center justify-between">
         <div className="flex items-center gap-2">
           <div className="relative rounded-full overflow-hidden w-10 h-10">
             <Image
               src={user.avatar}
               alt={user.name}
               width={100}
               height={100}
               useTransformation={true}
             />
           </div>
           <div>
             <h2 className="text-md font-bold">{user.name}</h2>
             <span className="text-textGray text-sm">@{user.username}</span>
           </div>
         </div>
         <button className="py-1 px-4 font-semibold bg-white text-black rounded-full hover:bg-gray-200">
           Follow
         </button>
       </div>
     ))}
     <Link href="/connect" className="text-iconBlue hover:underline">
       Show More
     </Link>
   </div>
 );
};

export default Recommendations;