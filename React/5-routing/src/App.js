import { useState } from "react";
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

const movies = getMovies();

const App = () => {
  const [currentPage, setCurrentPage] = useState("movies");
  const [movieSearchText, setMovieSearchText] = useState("");
  const [moviesGenre, setMoviesGenre] = useState(undefined);
  const [selectedMovieId, setSelectedMovieId] = useState(undefined);

  const selectedMovie =
    selectedMovi eId && movies.find((movie) => movie.Id === selectedMovieId);

  return (
    <AppLayout
      sidebar={
        <AppMenu selectedItem={currentPage} onItemSelect={setCurrentPage} />
      }
      header={
        <>
          {currentPage === "movies" &&
            (selectedMovieId ? (
              <DetailsHeader
                onBack={() => setSelectedMovieId(undefined)}
                movie={selectedMovie}
              />
            ) : (
              <MoviesHeader
                searchText={movieSearchText}
                onSearch={setMovieSearchText}
                genre={moviesGenre}
                onGenreChange={setMoviesGenre}
              />
            ))}
          {currentPage === "people" && <PeopleHeader />}
          {currentPage === "about" && <AboutHeader />}
        </>
      }
    >
      {currentPage === "movies" &&
        (selectedMovieId ? (
          <DetailsContent movie={selectedMovie} />
        ) : (
          <MoviesContent
            searchText={movieSearchText}
            genre={moviesGenre}
            onMovieSelect={setSelectedMovieId}
            movies={movies}
          />
        ))}
      {currentPage === "people" && <PeopleContent />}
      {currentPage === "about" && <AboutContent />}
    </AppLayout>
  );
};

export default App;
