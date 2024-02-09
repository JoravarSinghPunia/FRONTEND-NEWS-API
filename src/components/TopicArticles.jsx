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

  //   return (
  //     <>
  //       <section id="topics">
  //         {loading ? (
  //           <p>Loading topics...</p>
  //         ) : (
  //           <section>
  //             <div>
  //               <ul className="article-container">
  //                 {articles.map((article) => (
  //                   <li className="card" key={article.article_id}>
  //                     <Link
  //                       className="article-name"
  //                       to={`/${article.article_id}`}
  //                     >
  //                       {article.title}
  //                     </Link>
  //                     <Link className="sub-heading" to={`/${article.article_id}`}>
  //                       {article.author}
  //                     </Link>
  //                     <Link className="sub-heading" to={`/${article.article_id}`}>
  //                       ❤️{article.votes}
  //                     </Link>
  //                     <Link to={`/${article.article_id}`}>
  //                       💬{article.comment_count}
  //                     </Link>
  //                     <Link to={`/${article.article_id}`}>
  //                       <img
  //                         className="image"
  //                         src={article.article_img_url}
  //                         alt="Article images"
  //                       />
  //                     </Link>
  //                   </li>
  //                 ))}
  //               </ul>
  //             </div>
  //           </section>
  //         )}
  //       </section>
  //     </>
  //   );
  // }; ------>This code works
  return (
    <main id="articles">
      {articles.map((article) => (
        <TopicCard
          key={article.article_id}
          article={article}
          // setCurrentArticle={setCurrentArticle}
        />
      ))}
    </main>
  );
};
