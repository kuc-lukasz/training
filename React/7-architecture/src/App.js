import { useEffect, useState, forwardRef } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { TodoList } from "./components/TodoList";
import Button from "@material-ui/core/Button";

import "./styles/App.css";
import { updateTodoInDb } from "./components/Todo";

const filters = [
  {
    label: "All",
    predicate: () => true,
  },
  {
    label: "Completed",
    predicate: (todo) => todo.isCompleted === true,
  },
  {
    label: "Active",
    predicate: (todo) => todo.isCompleted === false,
  },
];

const MyButton = forwardRef(({ style, ...props }, ref) => {
  return (
    <p ref={ref} {...props} style={style}>
      {props.children}
    </p>
  );
});

const FilterButtons = ({ filters, setActiveFilter }) => {
  return filters.map((filter, index) => {
    return (
      <Button
        key={index}
        onClick={() => setActiveFilter(index)}
        variant="contained"
        color="primary"
        component={MyButton}
      >
        {filter.label}
      </Button>
    );
  });
};

const DataFilter = ({ filters, renderAs, items, updateItem }) => {
  const [activeFilter, setActiveFilter] = useState(0);

  const Component = renderAs;
  const todosToDisplay = items.filter(filters[activeFilter].predicate);

  return (
    <>
      <Component todos={todosToDisplay} setTodo={updateItem} />
      <FilterButtons filters={filters} setActiveFilter={setActiveFilter} />
    </>
  );
};

const removeSingleTodo = (todoId) => {
  return fetch("http://localhost:3001/todos/" + todoId, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
};

const ClearCompletedButton = ({ completedTodos, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const handleClick = () => {
    setProgress(0);
    Promise.all(
      completedTodos.map((todo) => {
        return removeSingleTodo(todo.id).then(() =>
          setProgress((old) => old + 1)
        );
      })
    ).then(onComplete);
  };
  return (
    <button onClick={handleClick}>
      Clear completed ({progress}/{completedTodos.length})
    </button>
  );
};

const BulkCompleteButton = ({ activeTodos, onComplete }) => {
  const [progress, setProgress] = useState(0);
  const handleClick = () => {
    Promise.all(
      activeTodos.map((todo) => {
        return updateTodoInDb({ ...todo, isCompleted: true }, todo.id).then(
          () => setProgress((old) => old + 1)
        );
      })
    ).then(onComplete);
  };
  return (
    <button onClick={handleClick}>
      Mark all active as done ({progress}/{activeTodos.length})
    </button>
  );
};

export const App = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodos(data);
      })
      .catch((err) => {
        console.log("Cannot fetch todos!", err);
      });
  }, [todo]);

  const completedTodos = todos.filter((todo) => todo.isCompleted === true);
  const activeTodos = todos.filter(filters[2].predicate);

  const clearCompletedEnabled = completedTodos.length > 0;
  const bulkCompleteEnabled = activeTodos.length > 0;

  return (
    <main className="App">
      <header className="App-header">
        <h1>Todos</h1>
      </header>

      <CreateTodo setTodo={setTodo} />
      {clearCompletedEnabled && (
        <ClearCompletedButton
          completedTodos={completedTodos}
          onComplete={() => setTodo({})}
        />
      )}
      {bulkCompleteEnabled && (
        <BulkCompleteButton
          activeTodos={activeTodos}
          onComplete={() => setTodo({})}
        />
      )}
      <DataFilter
        items={todos}
        renderAs={TodoList}
        filters={filters}
        updateItem={setTodo}
      />
      <footer className="App-footer">
        <p>{activeTodos.length} tasks left</p>
        <p>Double-click to edit a todo</p>
        <p>Created by Dominik at infoShare Academy</p>
        <p>Part of TodoMVC</p>
      </footer>
    </main>
  );
};
