import { useEffect, useState } from "react";

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
    <div>
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <>
            <ul>
              <li key={user.id}>
                <span>Id: {user.id}, </span>
                <span>Name: {user.name}</span>
                <span>Name: {user.email}</span>
                <span>Name: {user.gender}</span>
                <span>Name: {user.status}</span>
              </li>
            </ul>
          </>
        );
      })}
    </div>
  );
};
