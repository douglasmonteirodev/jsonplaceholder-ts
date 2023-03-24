import { UserType } from "../../types";
import { Link } from "react-router-dom";
import "./styles.css";

export default function UserItem({
  email,
  id,
  name,
  phone,
  website,
}: UserType) {
  return (
    <>
      <Link to={`${id}`}>
        <div className="username-item">
          <div className="username-title">
            <p style={{ color: "#fff" }}>{id}</p> <span>-</span>
            <p> {name}</p>
          </div>
          <div className="username-infos">
            <p>
              <span>Email:</span> {email}
            </p>
            <p>
              <span>Phone:</span> {phone}
            </p>
            <p>
              <span>Site:</span> {website}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
