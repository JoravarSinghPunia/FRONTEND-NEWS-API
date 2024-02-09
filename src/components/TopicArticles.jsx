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
    setLoading(true);
    fetchTopics(topic).then((response) => {
      console.log(response);
      setArticles(response);
      setLoading(false);
    });
  }, [topic]);

  return (
    <main id="articles">
      {articles.map((article) => (
        <TopicCard key={article.article_id} article={article} />
      ))}
    </main>
  );
};
