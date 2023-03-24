import { Link } from "react-router-dom";
import { PostType } from "../../types";
import "./styles.css";

export default function PostItem({ body, id, title }: PostType) {
  return (
    <>
      <Link to={`${id}/comments`}>
        <div className="username-item">
          <div className="username-title">
            <p style={{ color: "#fff" }}>{id}</p> <span>-</span>
            <p className="title">
              {title.length > 40 ? `${title.substring(0, 40)}...` : `${title}`}
            </p>
          </div>
          <p className="username-infos">
            {body.length > 150 ? `${body.substring(0, 150)}...` : `${body}.`}
          </p>
        </div>
      </Link>
    </>
  );
}
