import { useEffect, useState } from "react";
import "../styles/users.css";
import { SingleUser } from "./singleUser";
import { PluralPhoto } from "./UserPhotos";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setName(e.target.name.value);
    // setId(e.target.id.value);
    // setEmail(e.target.email.value);
    // setGender(e.target.gender.value);

    console.log(name, id, email, gender);

    return fetch("https://gorest.co.in/public/v1/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: {
        name: { name },
        gender: { gender },
        email: { email },
        id: { id },
      },
    });
  };

  return (
    <>
      <PluralPhoto />
      <div className="users-window">
        <div>
          <form onSubmit={handleSubmit} className="add-user-form">
            Add user
            <label>
              Name
              <input
                name="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></input>
            </label>
            <label>
              ID
              <input
                name="id"
                type="text"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                }}
              ></input>
            </label>
            <label>
              E-mail
              <input
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></input>
            </label>
            <label>
              Gender
              <input
                name="gender"
                type="text"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              ></input>
            </label>
            <button type="submit">Add user</button>
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
