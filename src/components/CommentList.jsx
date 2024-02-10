import * as React from "react";
import { useEffect, useState, useContext } from "react";
import { CurrentUser } from "../Contexts/CurrentUser";
import { getCommentsByID, postCommentOnArticleById } from "../../utils/api";
import CommentCard from "./CommentCard";

export default function Comments(props) {
  const { article_id } = props;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentInput, setCurrentInput] = useState();

  const [newComments, setNewComments] = useState([]);
  const [postCommentError, setPostCommentError] = useState(null);
  const [isPosting, setIsPosting] = useState(false);

  const { currentUser } = useContext(CurrentUser);

  useEffect(() => {
    getCommentsByID(article_id)
      .then((commentsData) => {
        setComments(commentsData);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    setIsPosting(true);
    setPostCommentError(null);
    const commentToSubmit = currentInput;

    if (!commentToSubmit) {
      setPostCommentError("Comment must be at least 1 character long");
      setIsPosting(false);
    } else {
      const newCommentsObj = {
        username: currentUser.username,
        body: commentToSubmit,
        created_at: new Date().toISOString(),
      };
      setNewComments((otherNewComments) => {
        return [newCommentsObj, ...otherNewComments];
      });
      postCommentOnArticleById(
        article_id,
        currentUser.username,
        commentToSubmit
      )
        .then((commentData) => {
          setPostCommentError(null);
          setCurrentInput("");
          setIsPosting(false);
        })
        .catch((err) => {
          setPostCommentError(err);
          setIsPosting(false);
        });
    }
  }

  if (isLoading) {
    return <h1>Loading Comments...</h1>;
  }

  if (comments.length === 0) {
    return <p>No comments available</p>;
  }

  return (
    <section id="postCommentContainer">
      <form onSubmit={handleSubmit} className="commentForm">
        <div>
          <label htmlFor="commentInput">Enter a comment:</label>
          <br />
          <br />
          <textarea
            id="commentInput"
            rows={4}
            value={currentInput}
            onChange={(event) => setCurrentInput(event.target.value)}
          />
        </div>
        <br />
        <button type="submit" disabled={isPosting}>
          Post comment
        </button>
      </form>
      {postCommentError && <p>{postCommentError}</p>}
      {newComments.length !== 0
        ? newComments.map((newComment, index) => (
            <div className="comment" key={index}>
              <p>{newComment.body}</p>
              <br />
              <div className="comment-user-date">
                <span>{newComment.username} Guest&nbsp; | Posted now</span>
                <br />
                <span>❤️ 0</span>
              </div>
            </div>
          ))
        : null}
      <div className="allComments">
        {comments.map((comment) => {
          return <CommentCard key={comment.comment_id} comment={comment} />;
        })}
      </div>
    </section>
  );
}
