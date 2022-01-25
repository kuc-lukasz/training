import { SingleUserPhoto } from "./UserPhotos";
import "../styles/SingleUser.css";

export const SingleUser = ({ name, id, email, gender }) => {
  return (
    <>
      <div className="single-user-window">
        <SingleUserPhoto />
        <h4>
          {name} <span>( {id} )</span>
        </h4>

        <p>{email}</p>
        <p>{gender}</p>
      </div>
    </>
  );
};
