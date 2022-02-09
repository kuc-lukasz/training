// Zadanie 3
// Skopiujcie tu i rozbudujcie komponent z zadania drugiego dodając do niego proste
// stylowanie oraz dodajcie do każdego filmu jego plakat (img z wartością z .Poster jako src).
// Poniżej umieszczam komponent z przykładem jak można dodać stylowanie.

import React from "react";
import "./styleTask3.css";
import { getFilmsList } from "../../filmsData";

const Image = (props) => {
  return <img alt="poster" src={props.src}></img>;
};

const Task3 = () => {
  const filmsData = getFilmsList();

  // Tu wstawcie swój kod

  const films = filmsData.map((e) => (
    <div className="film">
      <h4>
        {e.Title} ({e.Year})
      </h4>
      <Image src={e.Poster} />
      <p>{e.Genre}</p>
      <p>{e.Awards}</p>
      <p>{e.Director}</p>
    </div>
  ));

  return <>{films}</>;
};

export default Task3;
