import "./App.css";
import { useState } from "react";

const DEFAULT_COUNT = 0;

const NewComponent = () => {
  const [count, setCount] = useState(DEFAULT_COUNT);

  return (
    <div>
      <h1>Jestem nowym komponentem</h1>
      <h5> {count} </h5>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Dodaj{" "}
      </button>
    </div>
  );
};

function App() {
  const [count, setCount] = useState(DEFAULT_COUNT);

  const name = "Łukaszzzz";

  const getAge = () => {
    return 30;
  };

  //listener onClick
  //handleClick
  const handleAdd = () => {
    setCount(count + 1);
  };

  const handleSubtract = () => {
    setCount(count - 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="App">
      {" "}
      {name}
      <h2>Mam dokładnie: {getAge()} lat </h2>
      <a
        className="App-link"
        href="https://github.com/kuc-lukasz?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github Link
      </a>
      <p>Witaj {name}</p>
      <div>Obecna ilość kliknięć to: {count}</div>
      <div>
        <button onClick={handleSubtract}>Odejmij 1</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleAdd}>Dodaj 1</button>
      </div>
      <NewComponent />
    </div>
  );
}

export default App;
