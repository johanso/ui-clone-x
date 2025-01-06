import Post from "../Post"
import { MOCK_POSTS } from "@/constants/mockData"

const Feed = () => {
  return (
    <div className=''>
      {MOCK_POSTS.map((post) => (
        <Post 
          key={post.id}
          type="status"
          post={post}
        />
      ))}
    </div>
  )
}

export default Feed