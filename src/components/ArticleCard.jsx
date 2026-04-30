function ArticleCard({ image, author, title, excerpt }) {
  return (
    <article className="article-card">
      <img src={image} alt="" className="article-card__image" />
      <div className="article-card__content">
        <p className="article-card__author">By {author}</p>
        <h3>
          <a href="#">{title}</a>
        </h3>
        <p>{excerpt}</p>
      </div>
    </article>
  )
}

export default ArticleCard
