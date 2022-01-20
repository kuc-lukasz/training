import { Todo } from "./Todo";

import styles from "../styles/TodoList.module.css";

export const TodoList = ({ todos, setTodo }) => (
  <ul className={styles.TodoList}>
    {todos.map(todo => (
      <Todo key={todo.id} todo={todo} setTodo={setTodo} />
    ))}
  </ul>
);
