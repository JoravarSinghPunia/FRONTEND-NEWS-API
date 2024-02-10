import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchTopics } from "../../utils/api";
import TopicCard from "./TopicCard";

export const TopicArticles = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    fetchTopics(topic)
      .then((response) => {
        setArticles(response);
      })
      .then(() => {
        setLoading(false);
      });
  }, [topic]);

  return (
    <>
      {loading ? (
        <h1 className="loading">Content is loading...</h1>
      ) : (
        <main id="articles">
          {articles.map((article) => (
            <TopicCard key={article.article_id} article={article} />
          ))}
        </main>
      )}
    </>
  );
};
