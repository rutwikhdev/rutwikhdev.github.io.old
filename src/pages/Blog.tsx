import List from '../components/List'
import Data from '../data/posts'

function Blog() {
  return (
    <div class="flex">
      <div class="flex flex-col w-full">
        <h1 class="text-5xl font-bold mb-8">Writings</h1>
        <List items={Data.posts} />
      </div>
    </div>
  )
}

export default Blog;
