import { useParams, Link } from 'react-router-dom'
import { blogPosts } from '../data/blogPosts'
import './BlogArticlePage.css'

function BlogArticlePage() {
  const { id } = useParams<{ id: string }>()
  const post = blogPosts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <div className="article-not-found">
        <div className="container">
          <h1>Post not found</h1>
          <Link to="/blog" className="article-back-link">← Back to Blog</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="article-page">
      <div className="container">
        <Link to="/blog" className="article-back-link">← Back to Blog</Link>

        <article className="article">
          <header className="article__header">
            <h1 className="article__title">{post.title}</h1>
            <div className="article__meta">
              <span className="article__author">{post.author}</span>
              <span className="article__meta-divider">·</span>
              <span className="article__date">{post.datePosted}</span>
            </div>
          </header>

          <div className="article__body">
            {post.content}
          </div>
        </article>
      </div>
    </div>
  )
}

export default BlogArticlePage
