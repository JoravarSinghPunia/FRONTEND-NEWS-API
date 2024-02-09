import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticlesByID } from "../../utils/api";
import Comments from "../components/CommentList";

export default function View_Article() {
  const [currentArticle, setCurrentArticle] = useState({});
  const [isUpVoted, setIsUpVoted] = useState(false);
  const [isDownVoted, setIsDownVoted] = useState(false);
  const [isVoted, setIsVoted] = useState(false);
  const [error, setError] = useState(null);

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

  function handleVote(votes) {
    if (votes === 1) {
      setIsUpVoted(!isUpVoted);
    }
    if (votes === -1) {
      setIsDownVoted(!isDownVoted);
    }

    if (isVoted) {
      votes = -votes;
    }

    setIsVoted(!isVoted);

    const currentCommentCount = currentArticle.comment_count;

    patchArticlesByID(article_id, votes)
      .then((articleData) => {
        articleData.comment_count = currentCommentCount;
        setError(false);
        setCurrentArticle(articleData);
      })
      .catch((err) => {
        setError(err);
      });
  }

  return (
    <div>
      {isLoading ? (
        <h1 className="loading">Content is loading...</h1>
      ) : (
        <main className="fullArticle">
          <h1 className="individual-title">{currentArticle.title}</h1>
          <br />
          <img
            className="article-image"
            src={currentArticle.article_img_url}
            alt="Article"
          />
          <br />

          <ul>
            <li id="articleAuthor">Written by: {currentArticle.author}</li>
            <li id="articleDate">Published on: {formattedDate}</li>
            <br />
            <button
              className="like"
              onClick={() => handleVote(1)}
              disabled={isDownVoted}
            >
              Like
            </button>
            <button
              className="dislike"
              onClick={() => handleVote(-1)}
              disabled={isUpVoted}
            >
              Dislike
            </button>
            <br />
            <li id="articleVotes">
              <span>❤️ {currentArticle.votes}</span>
            </li>
            <li>
              <span>💬 {currentArticle.comment_count}</span>
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
