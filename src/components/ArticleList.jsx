import React, { useEffect, useState } from "react";

export default function ArticleList() {
  const [articles, setArticles] = useState(["articles"]);
  const [loadingCheck, setLoadingCheck] = useState(true);

  useEffect(() => {
    fetch(`https://backend-news-api-rzxs.onrender.com/api/articles`)
      .then((response) => {
        return response.json();
      })
      .then((body) => {
        console.log(body);
        setArticles(body.articles);
        setLoadingCheck(false);
      });
  }, []);

  return (
    <>
      <h2>All Articles</h2>
      {loadingCheck ? (
        <div>Content is loading...</div>
      ) : (
        <section className="article-container">
          {articles.map((article, index) => (
            <ul className="card" key={index}>
              <li className="article-name">
                <span className="articles-name">Title: </span> {article.title}
              </li>
              <li className="id">
                <span className="articles-name">ID:</span> {article.article_id}
              </li>
              <li className="topic">
                <span className="articles-name">Topic:</span> {article.topic}
              </li>
              <li className="author">
                <span className="articles-name">Price:</span> {article.author}p
              </li>
              {/* 
              article_id
: 
34
article_img_url
: 
"https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700"
author
: 
"grumpy19"
comment_count
: 
11
created_at
: 
"2020-11-22T11:13:00.000Z"
title
: 
"The Notorious MSG’s Unlikely Formula For Success"
topic
: 
"cooking"
votes
: 
0 */}
              <div>
                <img
                  className="image"
                  src={article.article_img_url}
                  alt="Article images"
                />
              </div>
            </ul>
          ))}
        </section>
      )}
    </>
  );
}
