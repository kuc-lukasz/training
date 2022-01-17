import "./App.css";
import { createContext } from "react";
import Header from "./Components/Header";

export const ThemeContext = createContext();

const App = () => {
  const name = "Łukasz";

  return (
    <>
      <ThemeContext.Provider value={name}>
        <div>
          <Header />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
