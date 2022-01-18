import React from "react";
import { useContext } from "react";
//Odbieranie portalu

// Dwie wersje! Jedna z Consumerem, druga z Hookiem useContext
import { ThemeContex } from "./Provider";

export const Button = () => {
  // Implementacja portalu
  const newTheme = useContext(ThemeContex);
  console.log(newTheme);
  return (
    <>
      <button
        style={{
          backgroundColor: newTheme.green.background,
          color: newTheme.green.foreground,
        }}
      >
        Zielony btn
      </button>
      <button
        style={{
          backgroundColor: newTheme.red.background,
          color: newTheme.red.foreground,
        }}
      >
        Czerwony button
      </button>
    </>
  );
};

// const Button = () => {
//   const state = true;
//   return (
//     <>
//       <ThemeContext.Consumer>
//         {(themes) => {
//           return (
//             <>
//               <button
//                 style={{
//                   background: themes.light.background,
//                   color: themes.light.foreground,
//                 }}
//               >
//                 Zmień kolor
//               </button>
//               <button
//                 style={{
//                   background: themes.dark.background,
//                   color: themes.dark.foreground,
//                 }}
//               >
//                 Zmień kolor
//               </button>
//             </>
//           );
//         }}
//       </ThemeContext.Consumer>
//       <Name.Consumer>
//         {(name) => {
//           return <button>{name}</button>;
//         }}
//       </Name.Consumer>
//     </>
//   );
// };
