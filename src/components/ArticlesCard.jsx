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
          <li className="sub-heading">
            <span className="articles-name"></span>
            {article.topic.toUpperCase()}
          </li>
          <li className="sub-heading">
            <span className="articles-name">Author:</span> {article.author}
          </li>
          <li className="sub-heading">
            <span className="articles-name">❤️</span> {article.votes}
          </li>
          <li className="sub-heading">
            <span className="articles-name">💬</span>
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
