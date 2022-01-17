import { useState } from "react";
import "./App.css";
import { createContext } from "react";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};

const Button = ({ state, setCounter }) => {
  return (
    <button
      onClick={() => {
        setCounter(state + 1);
      }}
    >
      Kliknij: {state}
    </button>
  );
};

const Toolbar = ({ state, setCounter }) => {
  return (
    <div>
      Toolbar
      <div>
        <Button state={state} setCounter={setCounter} />
      </div>
    </div>
  );
};

const Header = ({ state, setCounter }) => {
  // tutaj zawsze przekazywana jest nazwa klucza
  return (
    <div>
      <Toolbar state={state} setCounter={setCounter} />
    </div>
  );
};

function App() {
  const [state, setCounter] = useState(0);

  return (
    <div className="App">
      {/* <button
        onClick={() => {
          setCounter(state + 1);
        }}
      >
        Do zmiany statnu
      </button> */}
      {/* przekazywany zawsze jest klucz = wartość  */}
      <Header state={state} setCounter={setCounter} />
    </div>
  );
}

export default App;
