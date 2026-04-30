import ArticleCard from './ArticleCard'
import content from '../content.json'

function ArticlesSection() {
  const articles = content.articles

  return (
    <section className="articles">
      <div className="container">
        <h2>Latest Articles</h2>
        <div className="articles__grid">
          {articles.map((article) => (
            <ArticleCard key={article.title} {...article} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ArticlesSection
