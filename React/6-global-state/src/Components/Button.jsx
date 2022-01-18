import React from "react";
import { useContext } from "react";
import { ThemeContex } from "./Provider";

// export const Button = () => {
//   // Implementacja portalu
//   const newTheme = useContext(ThemeContex);
//   console.log(newTheme);
//   return (
//     <>
//       <button
//         style={{
//           backgroundColor: newTheme.green.background,
//           color: newTheme.green.foreground,
//         }}
//       >Zielony btn
//       </button>

//       <button
//         style={{
//           backgroundColor: newTheme.red.background,
//           color: newTheme.red.foreground,
//         }}
//       >Czerwony button
//       </button>
//     </>
//   );
// };

export const Button = () => {
  // Implementacja portalu

  return (
    <>
      <ThemeContex.Consumer>
        {(themes) => {
          return (
            <>
              <button
                style={{
                  backgroundColor: themes.green.background,
                  color: themes.green.foreground,
                }}
              >
                Zielony btn
              </button>

              <button
                style={{
                  backgroundColor: themes.red.background,
                  color: themes.red.foreground,
                }}
              >
                Czerwony button
              </button>
            </>
          );
        }}
      </ThemeContex.Consumer>
    </>
  );
};
