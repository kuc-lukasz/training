import { useEffect, useState } from "react";

export const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log();
        setUsers(data.data);
      });
  }, []);

  return (
    <div>
      {/* {users.map((user) => {
        console.log(user.data);
        return (
          <>
            <ul>
              <li>{user.data.name}</li>
            </ul>
          </>
        );
      })} */}
      <h2>Users</h2>
      {users.map((user) => {
        return (
          <>
            <ul>
              <li>{user.name}</li>
            </ul>
          </>
        );

        console.log(user);
      })}
    </div>
  );
};
