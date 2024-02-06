import ArticleCard from "./ArticlesCard.jsx";
import { useEffect, useState } from "react";
import { getAllArticles } from "../../utils/api.js";

export default function Articles(props) {
  const { setCurrentArticle } = props;
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((articlesData) => {
        setArticles(articlesData);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <h1>Content is loading...</h1>
      ) : (
        <>
          <h2 className="all-articles">All Articles</h2>

          <main id="articles">
            {articles.map((article) => (
              <ArticleCard
                key={article.article_id}
                article={article}
                setCurrentArticle={setCurrentArticle}
              />
            ))}
          </main>
        </>
      )}
    </>
  );
}
