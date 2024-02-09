import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchTopics } from "../../utils/api";
import TopicCard from "./TopicCard";

export const TopicArticles = (props) => {
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTopics().then((topicsData) => {
      setIsLoading(false);
      setTopics(topicsData);
    });
  }, []);

  return (
    <>
      <section id="topics">
        {isLoading ? (
          <p>Loading topics...</p>
        ) : (
          <>
            {topics.map((topic) => {
              return <TopicCard key={topic.slug} topic={topic} />;
            })}
            <button>
              <Link to={`/articles/all`}>view all</Link>
            </button>
          </>
        )}
      </section>
    </>
  );
};
