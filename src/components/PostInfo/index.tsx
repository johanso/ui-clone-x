// src/components/PostInfo/index.tsx
import Image from "../commons/Image";

interface PostInfoProps {
  postId?: string;
}

const PostInfo = ({ postId }: PostInfoProps) => {
  return (
    <button 
      className="cursor-pointer w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full"
      aria-label="More options"
    >
      <Image 
        src="icons/infoMore.svg" 
        alt="More options" 
        width={16} 
        height={16} 
      />
    </button>
  );
};

export default PostInfo;