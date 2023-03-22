import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import "./styles.css";

export default function Home() {
  return (
    <div className="home--buttons">
      <Link to="/posts">
        <span>
          <AiOutlineMessage />
        </span>
        POSTS
      </Link>
      <Link to="/users">
        <span>
          <AiOutlineUser />
        </span>
        USERS
      </Link>
    </div>
  );
}
