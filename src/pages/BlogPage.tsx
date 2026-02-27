import { blogPosts } from '../data/blogPosts'
import BlogCard from '../components/BlogCard'
import './BlogPage.css'

function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">Blog</h1>
          <p className="blog-hero__subtitle">
            Thoughts and learnings on my software development journey.
          </p>
        </div>
      </section>

      <div className="blog-content">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogPage
