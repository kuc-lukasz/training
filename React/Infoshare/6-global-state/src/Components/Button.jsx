import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContex } from "./Provider";

export const Button = () => {
  // Implementacja portalu
  // const newTheme = useContext(ThemeContex);

  const { theme, colors, setColor } = useContext(ThemeContex);

  const buttonStyle = {
    background: colors ? theme.light.background : theme.dark.background,
    color: colors ? theme.light.foreground : theme.dark.foreground,
  };

  return (
    <>
      <button
        onClick={() => {
          setColor(!colors);
        }}
        style={buttonStyle}
      >
        {colors ? "Jasny" : "Ciemny"}
      </button>
    </>
  );
};

// export const Button = () => {
//   return (
//     <>
//       <ThemeContex.Consumer>
//         {(themes) => {
//           return (
//             <>
//               <button
//                 style={{
//                   backgroundColor: themes.green.background,
//                   color: themes.green.foreground,
//                 }}
//               >Zielony btn

//               </button>
//               <button
//                 style={{
//                   backgroundColor: themes.red.background,
//                   color: themes.red.foreground,
//                 }}
//               >Czerwony button
//               </button>
//             </>
//           );
//         }}
//       </ThemeContex.Consumer>
//     </>
//   );
// };
