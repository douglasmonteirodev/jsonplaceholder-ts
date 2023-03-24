import { PostCommentType } from "../../types";
import "./styles.css";

export default function PostCommentItem({
  body,
  email,
  id,
  name,
}: PostCommentType) {
  return (
    <div key={id} className="comments--item">
      <h1>
        <span> {id}</span> - {name}
      </h1>
      <h2>
        <span>Email: </span>
        {email}
      </h2>
      <h2>
        <span>Comment:</span> {body}.
      </h2>
    </div>
  );
}
