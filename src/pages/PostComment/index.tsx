import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import PostCommentItem from "../../components/PostCommentItem";
import Loading from "../../components/Loading";
import { PostCommentType } from "../../types";
import "./styles.css";

export default function PostComment() {
  const [comments, setComments] = useState<PostCommentType[]>([]);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    api
      .get(`/posts/${id}/comments`)
      .then((res) => setComments(res.data))
      .catch((err) => console.log("Ops, algo deu errado" + err));
    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="comments--area">
          {comments.map((item) => (
            <PostCommentItem
              key={item.id}
              id={item.id}
              name={item.name}
              email={item.email}
              body={item.body}
            />
          ))}
        </div>
      )}
    </>
  );
}
