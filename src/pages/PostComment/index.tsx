import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { PostCommentType } from "../../types";
import Loading from "../../components/Loading";

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
            <div key={item.id} className="comments--item">
              <h1>
                <span> {item.id}</span> - {item.name}
              </h1>
              <h2>
                <span>Email: </span>
                {item.email}
              </h2>
              <h2>
                <span>Comment:</span> {item.body}.
              </h2>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
