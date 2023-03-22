import { useEffect, useState } from "react";
import api from "../../api";
import { PostType } from "../../types";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import "./styles.css";

export default function Posts() {
  const [listPost, setListPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPost();
  }, []);

  function loadPost() {
    setLoading(true);

    api
      .get("/posts")
      .then((res) => setListPost(res.data))
      .catch((err) => console.log("Ops, algo deu errado" + err));

    setLoading(false);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="posts--area">
          {listPost.map((item) => (
            <Link to={`${item.id}/comments`}>
              <div className="username-item">
                <div className="username-title">
                  <p style={{ color: "#fff" }}>{item.id}</p> <span>-</span>
                  <p className="title">
                    {item.title.length > 40
                      ? `${item.title.substring(0, 40)}...`
                      : `${item.title}`}
                  </p>
                </div>
                <p className="username-infos">
                  {item.body.length > 150
                    ? `${item.body.substring(0, 150)}...`
                    : `${item.body}.`}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
