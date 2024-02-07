export default function CommentCard(props) {
  const { comment } = props;
  return (
    <section className="comment">
      <p>{comment.body}</p>
      <span>{comment.votes} votes</span>
      <div className="comment-user-date">
        <span>{comment.author} </span>
        <span>| {comment.created_at}</span>
      </div>
    </section>
  );
}
