export default function CommentCard(props) {
  const { comment } = props;

  const formattedDate = comment.created_at
    ? new Date(comment.created_at)
        .toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
        .replace(",", "")
    : null;

  return (
    <section className="comment">
      <p>{comment.body}</p>
      <br />
      <div className="comment-user-date">
        <span>{comment.author} </span>
        <span>| {formattedDate}</span>
        <br />
        <span>❤️ {comment.votes}</span>
      </div>
    </section>
  );
}
