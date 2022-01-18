// Tworzenie teleportu
import { createContext } from "react";

export const ThemeContex = createContext();

export const ThemeProvider = ({ children }) => {
  const themes = {
    green: {
      foreground: "#000000",
      background: "#bfc68c",
    },
    red: {
      foreground: "#ffffff",
      background: "#f44336",
    },
  };

  return (
    <>
      <ThemeContex.Provider value={themes}>
        <div>{children}</div>
      </ThemeContex.Provider>
    </>
  );
};
