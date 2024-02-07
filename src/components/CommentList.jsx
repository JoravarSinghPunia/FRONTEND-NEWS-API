import * as React from "react";
import { useEffect, useState } from "react";

import { getCommentsByID } from "../../utils/api";
import CommentCard from "./CommentCard";

export default function Comments(props) {
  const [comments, setComments] = useState([]);

  const { article_id } = props;

  useEffect(() => {
    getCommentsByID(article_id).then((commentsData) => {
      setComments(commentsData);
    });
  }, []);

  if (comments.length === 0) {
    return <p>No comments available</p>;
  }

  return (
    <>
      <div className="allComments">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </>
  );
}
