// import Topic from "../components/TopicArticles";
import Articles from "../components/ArticleList";
import { useState } from "react";

export default function Home(props) {
  const [articles, setArticles] = useState(null);
  const [isLoadingArticles, setIsLoadingArticles] = useState(true);
  const { setCurrentArticle } = props;

  return (
    <>
      {/* <TopicArticles
        setArticles={setArticles}
        setIsLoadingArticles={setIsLoadingArticles}
      /> */}

      <Articles
        setCurrentArticle={setCurrentArticle}
        articles={articles}
        setArticles={setArticles}
        isLoadingArticles={isLoadingArticles}
        setIsLoadingArticles={setIsLoadingArticles}
      />
    </>
  );
}
