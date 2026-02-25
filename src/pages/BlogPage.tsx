import './BlogPage.css'

function BlogPage() {
  return (
    <div className="blog-page">
      <section className="blog-hero">
        <div className="blog-hero__content">
          <h1 className="blog-hero__title">Blog</h1>
          <p className="blog-hero__subtitle">
            Thoughts, learnings, and articles on software development.
          </p>
        </div>
      </section>

      <div className="blog-content">
        {/* Blog posts will go here */}
      </div>
    </div>
  )
}

export default BlogPage
