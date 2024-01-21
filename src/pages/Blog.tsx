import List from '../components/List'
import Post from '../data/posts'

function Blog() {
  return (
    <div class="flex">
      <div class="flex flex-col w-full">
        <h1 class="text-5xl font-bold mb-8">Writings</h1>
        <List items={Object.values(Post)} />
      </div>
    </div>
  )
}

export default Blog;
