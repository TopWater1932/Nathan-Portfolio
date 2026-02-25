import { Link } from 'react-router-dom'
import type { BlogPost } from '../data/blogPosts'
import './BlogCard.css'

interface BlogCardProps {
  post: BlogPost
}

function getPreview(content: React.ReactNode): string {
  // Extract text from ReactNode by rendering to a temporary element is not possible
  // outside the DOM, so we walk the element tree recursively.
  function extractText(node: React.ReactNode): string {
    if (typeof node === 'string' || typeof node === 'number') return String(node)
    if (Array.isArray(node)) return node.map(extractText).join('')
    if (node && typeof node === 'object' && 'props' in node) {
      return extractText((node as React.ReactElement).props.children)
    }
    return ''
  }

  const words = extractText(content).trim().split(/\s+/)
  if (words.length <= 15) return words.join(' ')
  return words.slice(0, 15).join(' ') + '...'
}

function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.id}`} className="blog-card">
      {post.image ? (
        <img className="blog-card__image" src={post.image} alt={post.title} />
      ) : (
        <div
          className="blog-card__image"
          style={{ background: post.imagePlaceholderGradient ?? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
          aria-hidden="true"
        />
      )}
      <div className="blog-card__body">
        <h3 className="blog-card__title">{post.title}</h3>
        <p className="blog-card__preview">{getPreview(post.content)}</p>
        <span className="blog-card__date">{post.datePosted}</span>
      </div>
    </Link>
  )
}

export default BlogCard
