// Zadanie 2
// Stwórzcie komponent który korzystając z funkcji map() wylistuje podstawowe informace o wszystkich filmach z bazy.
// Możecie wykożystać kod z zadania pierwszego.

import React from "react";
import { getFilmsList } from "../../filmsData";
import "./style.css";

const Task2 = () => {
  const filmsData = getFilmsList();

  // Tu wstawcie swój kod

  const films = filmsData.map((e) => {
    return (
      <div>
        <h4>
          {e.Title}
          <span> {e.Year}</span>
        </h4>
        <p>{e.Awards}</p>
        <p>{e.Genre}</p>
        <p>{e.Director}</p>
      </div>
    );
  });

  return <>{films}</>;
};

export default Task2;
