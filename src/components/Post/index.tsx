// src/components/Post/index.tsx
import Video from "../commons/Video";
import { PostProps } from './types';
import { formatDate } from '../../lib/utils';
import Image from "../commons/Image";
import PostInfo from "../PostInfo";
import PostInteractions from "../PostInteractions";

const Post = ({ type = 'status', post }: PostProps) => {
  if (!post) return null;

  return (
    <article className="p-4 pb-2 border-y border-borderGray">
      {/* Repost Header */}
      {post.repostedBy && (
        <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="#71767b"
              d="M4.75 3.79l4.603 4.3-1.706 1.82L6 8.38v7.37c0 .97.784 1.75 1.75 1.75H13V20H7.75c-2.347 0-4.25-1.9-4.25-4.25V8.38L1.853 9.91.147 8.09l4.603-4.3zm11.5 2.71H11V4h5.25c2.347 0 4.25 1.9 4.25 4.25v7.37l1.647-1.53 1.706 1.82-4.603 4.3-4.603-4.3 1.706-1.82L18 15.62V8.25c0-.97-.784-1.75-1.75-1.75z"
            />
          </svg>
          <span>{post.repostedBy.name} reposted</span>
        </div>
      )}

      {/* Post Content */}
      <div className={`flex gap-4 ${type === "status" ? "flex-col" : ""}`}>
        {/* Avatar for comment view */}
        {type !== "status" && (
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={post.author.avatar}
              alt={`${post.author.name}'s avatar`}
              width={100}
              height={100}
              useTransformation={true}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-2">
          {/* Header */}
          <div className="w-full flex justify-between">
            <span className="flex gap-4">
              {type === "status" && (
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.avatar}
                    alt={`${post.author.name}'s avatar`}
                    width={100}
                    height={100}
                    useTransformation={true}
                  />
                </div>
              )}
              <div
                className={`flex items-center flex-wrap ${
                  type === "status" ? "flex-col gap-0 !items-start" : ""
                }`}
              >
                <h2 className="text-md font-bold">{post.author.name}</h2>
                <span className={`text-textGray ${type === "status" ? "text-sm" : ""}`}>
                  @{post.author.username}
                </span>
                {type !== "status" && (
                  <time className="text-textGray">
                    {formatDate(post.createdAt)}
                  </time>
                )}
              </div>
            </span>
            <PostInfo />
          </div>

          {/* Content */}
       
          <p className={type === "status" ? "text-md ml-14" : ""}>
            {post.content}
          </p>

          {/* Media */}
          {post.media && 
            <div className="mt-2 ml-14 rounded-lg overflow-hidden">
              {
                post.media.type === "image" ? (
                  <Image
                    src={post.media.url}
                    alt=""
                    width={post.media.width || 600} // Aseguramos un valor por defecto
                    height={post.media.height || 600} // Aseguramos un valor por defecto
                    className={post.media.sensitive ? "blur-lg" : ""}
                  />
                ) : (
                  <Video
                    path={post.media.url}
                    className={post.media.sensitive ? "blur-lg" : ""}
                  />
                )
              }
            </div>
          }

          {/* Timestamp for status view */}
          {type === "status" && (
            <time className="text-textGray hidden">
              {formatDate(post.createdAt, 'long')}
            </time>
          )}

          {/* Interactions */}
          <div className="ml-14">
            <PostInteractions initialStats={post.stats} />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;