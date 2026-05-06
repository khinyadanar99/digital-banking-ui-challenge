import "../App.css";
import content from "../content.json";
import ArticleCard from "./ArticleCard";
import Section from "./Section";


function Article() {
  const { articles } = content;
  return (

    <div className="bg-Gray-50 py-20">
        <Section>
            <h2>Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-15">
                {articles?.map((article, index) => {
                    
                    return(
                        <ArticleCard 
                        image={article.image}
                        author={article.author}
                        title={article.title}
                        excerpt={article.excerpt}></ArticleCard>
                    )
                })}
                
            </div>
        
        </Section>
    </div>
    
  );
}

export default Article;