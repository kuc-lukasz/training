import { useEffect, useState } from "react";

export const ToDos = () => {
  const [toDo, setToDO] = useState([]);

  useEffect(() => {
    fetch("https://gorest.co.in/public/v1/todos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.data);
        setToDO(data.data);
      });
  }, []);

  return (
    <>
      <div>
        <h2>ToDO</h2>
        {toDo.map((task) => {
          return (
            <>
              <ul>
                <li>{task.title}</li>
              </ul>
            </>
          );
        })}
      </div>
    </>
  );
};
