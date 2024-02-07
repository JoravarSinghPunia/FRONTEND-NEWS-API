import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../utils/api";
import Comments from "../components/CommentList";

export default function View_Article() {
  const [currentArticle, setCurrentArticle] = useState({});
  console.log(currentArticle);

  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((articleData) => {
        setCurrentArticle(articleData);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [article_id]);

  const formattedDate = currentArticle.created_at
    ? new Date(currentArticle.created_at)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .replace(",", "")
    : null;

  return (
    <div>
      {isLoading ? (
        <h1 className="loading">Content is loading...</h1>
      ) : (
        <main className="fullArticle">
          <h1>{currentArticle.title}</h1>
          <br />
          <img src={currentArticle.article_img_url} alt="Article" />
          <ul>
            <li id="articleAuthor">Written by: {currentArticle.author}</li>
            <li id="articleDate">Published on: {formattedDate}</li>

            <br />
            <li id="articleVotes">
              <span>❤️ {currentArticle.votes} votes </span>
            </li>
            <li>
              <span>💬 {currentArticle.comment_count} comments </span>
            </li>
            <br />
            <li>{currentArticle.body}</li>
          </ul>
          <br />
          <h2 className="comments-title">Comments</h2>
          <Comments article_id={article_id} />
        </main>
      )}
    </div>
  );
}
