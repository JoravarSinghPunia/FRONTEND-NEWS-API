import React from "react";
import { Link } from "react-router-dom";

function ArticleCard(props) {
  const { article, setCurrentArticle } = props;

  return (
    <section className="article-container">
      <div>
        <ul className="card">
          <li className="article-name">
            <span className="articles-name"></span> {article.title}
          </li>
          <li className="topic">
            <span className="articles-name"></span>
            {article.topic.toUpperCase()}
          </li>
          <li className="author">
            <span className="articles-name">Written by:</span> {article.author}
          </li>
          <li className="votes">
            <span className="articles-name">Votes:</span> {article.votes}
          </li>
          <li className="comment_count">
            <span className="articles-name">Comments:</span>
            {article.comment_count}
          </li>
          <div>
            <img
              className="image"
              src={article.article_img_url}
              alt="Article images"
            />
          </div>
        </ul>

        <div className="cardActions">
          <button>
            <Link to={`/${article.article_id}`} target="_blank">
              Read article
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default ArticleCard;
