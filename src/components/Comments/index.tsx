// src/components/Comments/index.tsx
import Image from "../commons/Image";
import Post from "../Post";
import { MOCK_POSTS } from "@/constants/mockData";

interface CommentsProps {
  postId: string;
}

const Comments = ({ postId }: CommentsProps) => {
  // Usamos algunos posts de MOCK_POSTS como comentarios de ejemplo
  const commentPosts = MOCK_POSTS.slice(0, 3);

  return (
    <div className="">
      <form className="flex items-center justify-between gap-4 p-4 border-b border-borderGray">
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            src="general/avatar.jpg"
            alt="User Avatar"
            width={100}
            height={100}
            useTransformation={true}
          />
        </div>
        <input
          type="text"
          className="flex-1 bg-transparent outline-none p-2 text-xl"
          placeholder="Post your reply"
        />
        <button className="py-2 px-4 font-bold bg-white text-black rounded-full">
          Reply
        </button>
      </form>

      {/* Comment List */}
      {commentPosts.map(post => (
        <Post 
          key={post.id}
          post={post} 
          type="comment" 
        />
      ))}
    </div>
  );
};

export default Comments;