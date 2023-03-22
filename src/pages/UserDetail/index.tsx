import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../api";
import { UserType } from "../../types";
import "./styles.css";
import Loading from "./../../components/Loading/index";

export default function UserDetail() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const [user, setUser] = useState<UserType>({
    email: "",
    id: 0,
    name: "",
    phone: "",
    website: "",
  });

  useEffect(() => {
    setLoading(true);

    api
      .get(`/users/${id}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.log("Ops, algo deu errado" + err));

    setLoading(false);
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user--detail-area">
          <div className="user--detail">
            <div>
              <h1>
                <span>Name:</span> {user.name}
              </h1>
            </div>
            <p>
              <span>Email:</span> {user.email}
            </p>
            <p>
              <span>Phone:</span> {user.phone}
            </p>
            <p>
              <span>Site: </span>
              {user.website}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
