import { useEffect, useState } from "react";
import "../styles/users.css";
import { SingleUser } from "./singleUser";
import { PluralPhoto } from "./UserPhotos";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  return (
    <>
      <PluralPhoto />
      <div className="users-window">
        <div>
          <form className="add-user-form">
            Add user
            <label>
              Name
              <input name="name" type="text"></input>
            </label>
            <label>
              ID
              <input name="name" type="text"></input>
            </label>
            <label>
              E-mail
              <input name="name" type="email"></input>
            </label>
            <label>
              Gender
              <input name="name" type="text"></input>
            </label>
            <button>Add user</button>
          </form>
        </div>
        <div className="users-window">
          {users.map((user) => {
            return (
              <>
                <SingleUser
                  name={user.name}
                  id={user.id}
                  email={user.email}
                  gender={user.gender}
                />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
