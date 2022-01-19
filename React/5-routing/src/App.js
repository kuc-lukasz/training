import { WindowsFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getMovies } from "./api/getMovies";
import { AppMenu } from "./components/AppMenu";
import { AppLayout } from "./components/layout/AppLayout";
import { AboutContent } from "./components/pages/about/AboutContent";
import { AboutHeader } from "./components/pages/about/AboutHeader";
import { DetailsContent } from "./components/pages/details/DetailsContent";
import { DetailsHeader } from "./components/pages/details/DetailsHeader";
import { MoviesContent } from "./components/pages/movies/MoviesContent";
import { MoviesHeader } from "./components/pages/movies/MoviesHeader";
import { PeopleContent } from "./components/pages/people/PeopleContent";
import { PeopleHeader } from "./components/pages/people/PeopleHeader";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory,
} from "react-router-dom";

const movies = getMovies();

//Za robienie procesów, czyli tworzenie ścieżej jest odpowiedzialny initialParams

const App = () => {
  // Chce pewne elementy ze śc ieżki dostać i wskazuje który element tej ścieżki konkretnie chce. Jest to pobieranie części tego adresu

  const params = useRouteMatch("/:pageName/:movieId?/:c")?.params;

  // ma to hooka który zwraca

  const history = useHistory();
  // teraz pageName jest brany z góry
  const currentPage = params.pageName;
  const selectedMovieId = params.movieID

  //dynamiczne ustawianie strony
  const setCurrentPage = (pageName) => {
    history.push("/" + pageName);
  };

  const setSelectedMovieId = 

  const [movieSearchText, setMovieSearchText] = useState("");
  const [moviesGenre, setMoviesGenre] = useState(undefined);

  const selectedMovie =
    selectedMovieId && movies.find((movie) => movie.Id === selectedMovieId);

  // wykonaj pewną funkcję, zawsze kiedy zmienią się wartości pewnych zmiennych, czyli w tym wypadku:
  // Jeżeli zmieni sie currentpage i selectedMovieId to wykonam jakąś robotę. Jeśli się nic nie zmieni, to nic nie robię
  useEffect(() => {
    window.history.pushState(
      "",
      "",
      currentPage === "movies" && selectedMovieId
        ? `/${currentPage}/${selectedMovieId}`
        : `/${currentPage}`
    );
  });

  return (
    <>
      <AppLayout
        sidebar={
          //jeśli zaznaczy sie jakis element menu, dokonaj na sztywno jakis adres
          <AppMenu selectedItem={currentPage} onItemSelect={setCurrentPage} />
        }
        header={
          <>
            <Route patch="/movies">
              <MoviesHeader
                searchText={movieSearchText}
                onSearch={setMovieSearchText}
                genre={moviesGenre}
                onGenreChange={setMoviesGenre}
              />
            </Route>
            <Route patch="/about">
              <AboutHeader />
            </Route>
            <Route patch="/people"></Route>
          </>
        }
      >
        <Route path="/movies">
          <MoviesContent
            searchText={movieSearchText}
            genre={moviesGenre}
            onMovieSelect={setSelectedMovieId}
            movies={movies}
          />
        </Route>
        <Route path="/people">
          <PeopleContent />
        </Route>

        <Route path="/about">
          <AboutContent />
        </Route>
      </AppLayout>
    </>
  );
};

export default App;
