import { Link } from "react-router-dom";
import * as React from "react";

export default function TopicCard(props) {
  const { topic } = props;
  return (
    <button>
      <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link>
    </button>
  );
}
