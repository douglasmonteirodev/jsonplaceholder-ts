import React, { useEffect, useState } from "react";
import api from "./../../api";
import { UserType } from "../../types";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
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
            <Link to={`${item.id}`}>
              <div className="username-item">
                <div className="username-title">
                  <p style={{ color: "#fff" }}>{item.id}</p> <span>-</span>
                  <p> {item.name}</p>
                </div>
                <div className="username-infos">
                  <p>
                    <span>Email:</span> {item.email}
                  </p>
                  <p>
                    <span>Phone:</span> {item.phone}
                  </p>
                  <p>
                    <span>Site:</span> {item.website}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}
