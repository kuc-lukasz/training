// Tworzenie teleportu
import { createContext, useState } from "react";

export const ThemeContex = createContext();

// export const ThemeProvider = ({ children }) => {
//   const themes = {
//     green: {
//       foreground: "#000000",
//       background: "#bfc68c",
//     },
//     red: {
//       foreground: "#ffffff",
//       background: "#f44336",
//     },
//   };

//   return (
//     <>
//       <ThemeContex.Provider value={themes}>
//         <div>{children}</div>
//       </ThemeContex.Provider>
//     </>
//   );
// };

export const ThemeProvider = ({ children }) => {
  const [colors, setColor] = useState(true);

  const theme = {
    light: {
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      foreground: "#ffffff",
      background: "#222222",
    },
  };

  return (
    <div>
      <button
        onClick={() => {
          setColor(!colors);
        }}
      >
        Color Changer
      </button>
      <ThemeContex.Provider value={{ theme, colors, setColor }}>
        {children}
      </ThemeContex.Provider>
    </div>
  );
};
