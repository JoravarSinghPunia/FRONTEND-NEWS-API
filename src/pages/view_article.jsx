import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";

import * as React from "react";

export default function View_Article() {
  const [currentArticle, setCurrentArticle] = useState({});

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((articleData) => {
      setCurrentArticle(articleData);
    });
  }, [article_id]);

  return (
    <>
      <main className="fullArticle">
        <img src={currentArticle.article_img_url}></img>
        <ul>
          <li id="articleVotes">
            <span>{currentArticle.votes} votes </span>
          </li>
          <li>
            <span>{currentArticle.comment_count} comments </span>
          </li>
          <h2>{currentArticle.title}</h2>
          <li full-article-author>by {currentArticle.author}</li>
          <br></br>
          <li>{currentArticle.body}</li>
        </ul>
      </main>
    </>
  );
}
