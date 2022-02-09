// Zadanie 4
// Przenieście tu kod z zadania 3. Wydzielnie z niego komponent DescriptionField, który będzie
// przyjmował właściwości "name" oraz "value" i wyświetlając je jako np "Genre: Comedy". Zastosujcie go
// w waszej liście.

// rozwiązanie w task 3

import React from "react";
import "../task_3/styleTask3.css";
import { getFilmsList } from "../../filmsData";
import DescriptionField from "./DescriptionField";

const Image = ({ imgSrc }) => {
  return <img alt="poster" src={imgSrc}></img>;
};

const Task4 = () => {
  const filmsData = getFilmsList();

  // Tu wstawcie swój kod

  const films = filmsData.map((e) => (
    <div className="film">
      <h4>
        {e.Title} ({e.Year})
      </h4>
      <Image imgSrc={e.Poster} />
      <DescriptionField label="Genre" value={e.Genre} />
      <DescriptionField label="Awards" value={e.Awards} />
      <DescriptionField label="Director" value={e.Director} />
    </div>
  ));

  return <>{films}</>;
};

export default Task4;
