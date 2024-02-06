import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <Link to="/" className="byte-board">
        <div>
          <h1>The Byte Board</h1>
        </div>
      </Link>
    </>
  );
}
