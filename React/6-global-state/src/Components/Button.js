import { ThemeContext } from "../App";
import { useContext } from "react";
import React from "react";

// Dwie wersje!

const Button = () => {
  return (
    <>
      <ThemeContext.Consumer>
        {(name) => {
          return <button>Kliknij: {name}</button>;
        }}
      </ThemeContext.Consumer>
    </>
  );
};

export default Button;

// const Button = () => {
//   const name = useContext(ThemeContext);
//   return (
//     <>
//       <button>{name}</button>
//     </>
//   );
// };

// export default Button;
