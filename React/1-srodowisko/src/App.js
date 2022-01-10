import logo from "./logo.svg";
import "./App.css";

const name = "Łukaszzzz";

const getAge = () => {
  return 30;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
