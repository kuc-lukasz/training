import "../styles/Todo.css";
import { useRef, useState } from "react";

export const updateTodoInDb = (todo, id) => {
  return fetch(`http://localhost:3001/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(todo),
  });
};

export const Todo = ({ todo, setTodo }) => {
  const todoContent = useRef();
  const [isTodoEnabled, setTodoEnabled] = useState(todo.isCompleted);

  const setTodoState = id => {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    setTodoEnabled(!isTodoEnabled);

    updateTodoInDb(updatedTodo, id).then(res => {
      if (res.ok) {
        setTodo(updatedTodo);
      }
    });
  };

  const deleteTask = id => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      fetch(`http://localhost:3001/todos/${id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setTodo({});
        }
      });
    }
  };

  const todoEditHandler = (e, id) => {
    if (e.key === "Enter" && e.target.value) {
      const updatedTodo = {
        content: e.target.value,
        isCompleted: todo.isCompleted,
      };
      updateTodoInDb(updatedTodo, id)
        .then(res => {
          if (res.ok) {
            // Aktualizacja stanu todo co spowoduje pobranie todos w useEffect
            setTodo(updatedTodo);
          }
          toggleTodoState();
        })
        .catch(err => {
          console.error("Cannot update todo database", err);
        });
    }
  };

  const toggleTodoState = () => {
    todoContent.current.disabled = !todoContent.current.disabled;
    todoContent.current.focus();
  };

  return (
    <li className="Todo" onDoubleClick={toggleTodoState}>
      <input
        className="Todo-check"
        type="checkbox"
        checked={todo.isCompleted}
        onChange={() => {
          setTodoState(todo.id);
        }}
      />
      <input
        className="Todo-title"
        defaultValue={todo.content}
        disabled
        onClick={toggleTodoState}
        ref={todoContent}
        onKeyDown={e => todoEditHandler(e, todo.id)}
      />
      <button className="Todo-delete-btn" aria-label="Delete todo" onClick={() => deleteTask(todo.id)} />
    </li>
  );
};
