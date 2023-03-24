import { useEffect, useState } from "react";
import api from "./../../api";
import UserItem from "../../components/UserItem";
import Loading from "../../components/Loading";
import { UserType } from "../../types";
import "./styles.css";

export default function Users() {
  const [listUser, setListUser] = useState<UserType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    api
      .get("/users")
      .then((res) => setListUser(res.data))
      .catch((err) => console.log("Ops, algo deu errado" + err));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="users--area">
          {listUser.map((item) => (
            <UserItem
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
              email={item.email}
              website={item.website}
            />
          ))}
        </div>
      )}
    </>
  );
}
