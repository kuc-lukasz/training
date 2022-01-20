import '../styles/CreateTodo.css';

export const CreateTodo = ({ setTodo }) => {
  const addTodoToDb = todo => {
    return fetch('http://localhost:3001/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(todo),
    });
  };

  const addTodoHandler = e => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      const todo = {
        content: e.target.value,
        isCompleted: false,
      };
      addTodoToDb(todo)
        .then(res => {
          if (res.ok) {
            setTodo(todo);
            e.target.value = '';
          }
        })
        .catch(err => {
          console.log('Could not add todo', err);
        });
    }
  };

  return (
    <section className="CreateTodo">
      <input
        type="text"
        placeholder="What needs to be done?"
        onKeyDown={addTodoHandler}
      />
    </section>
  );
};
