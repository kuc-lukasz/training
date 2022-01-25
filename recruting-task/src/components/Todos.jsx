import { useEffect, useState } from "react";
import { ToDoPhoto } from "./UserPhotos";
import "../styles/Todo.css";

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
      <div className="todo">
        <ToDoPhoto />
        <ul className="todo-tasks">
          {toDo.map((task) => {
            return <li>{task.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
};
