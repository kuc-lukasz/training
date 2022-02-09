// Zadanie 5
// 1. Stwórzcie komponent FilmsLibrary.
// 2. Użyjcie kodu z polecenia 4 i zróbcie z niego komponent FilmsList przyjmujący
// props z listą filmów i wyświetlający ją.
// 3. Odfiltrujcie listę filmów z bazy na dwie listy: filmów nakręconych przed i po roku 2000.
// 4. Użyjcie stworzonego komponentu FilmsList aby wyświetlić te listy jedna pod drugą.

import React from "react";
import "../task_3/styleTask3.css";
import FilmsLibrary from "./FilmsLibrary";
import { getFilmsList } from "../../filmsData";

const Task5 = () => {
  const filmsData = getFilmsList();
  const FilmsAfter2000 = filmsData.filter((film) => film.Year >= 2000);
  const FilmsBefore2000 = filmsData.filter((film) => film.Year < 2000);

  return (
    <>
      <h4>Filmy przed 2000</h4>
      <FilmsLibrary dataSrc={FilmsBefore2000} />

      <h4>Filmy po 2000</h4>
      <FilmsLibrary dataSrc={FilmsAfter2000} />
    </>
  );
};

export default Task5;
