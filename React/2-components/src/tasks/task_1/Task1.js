// Zadanie 1
// Dokończcie ten komponent tak aby wyświetlał podstawowe informacje o dowolnym
// filmie z bazy (filmsData.js), w zmiennej "film" jest już wybrany pierwszy z listy. Wasz komponent powinien
// zawierać element <h2> z tytułem filmu i <span> z rokiem nagrania oraz kilka <p> zawierających np "Genre", "Director" czy "Actors".

import React from "react";
import { getFilmsList } from "../../filmsData";

const Task1 = () => {
  const filmsData = getFilmsList();
  const film = filmsData[0];

  // Tu wstawcie swój kod

  return (
    <div>
      <h2> {film.Title} </h2>
      <span> {film.Year} </span>
      <p> {film.Awards} </p>
      <p> {film.Genre} </p>
      <p> {film.Director} </p>
    </div>
    <div>
      <h4>
        {filmsData.map((element) => (
          <p>{element.Title}</p>
        ))}
      </h4>
      
    </div>
  );
};

export default Task1;
