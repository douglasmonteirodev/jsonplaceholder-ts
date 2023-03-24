import { useEffect, useState } from "react";
import api from "../../api";
import Loading from "../../components/Loading";
import PostItem from "../../components/PostItem";
import { PostType } from "../../types";

export default function Posts() {
  const [listPost, setListPost] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/posts")
      .then((res) => setListPost(res.data))
      .catch((err) => console.log("Ops, algo deu errado" + err));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="posts--area">
          {listPost.map((item) => (
            <PostItem
              key={item.id}
              id={item.id}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      )}
    </>
  );
}
