import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { getMovies } from "./utilities";
import { Main, Footer } from "./layout";
import { MOVIE_GENRES, SORT_OPTIONS, APP_CONSTANTS } from "./constants";
import { MovieInfo } from "./types";
import "./styles/index.scss";

function App() {
  const { INITIAL_SEARCH_VALUE, DEFAULT_GENRE, DEFAULT_SORT_OPTION } = APP_CONSTANTS;
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sortBy") || SORT_OPTIONS[DEFAULT_SORT_OPTION].query;
  const currentGenre = searchParams.get("filter") || MOVIE_GENRES[DEFAULT_GENRE];
  const currentSearch = searchParams.get("search") || INITIAL_SEARCH_VALUE;

  const [movieList, setMovieList] = useState<MovieInfo[] | []>([]);

  useEffect(() => {
    getMovies({ currentSearch, currentGenre, currentSort }).then(setMovieList).catch(console.log);
  }, [currentSearch, currentGenre, currentSort]);

  const onSearch = (movie: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("search", movie);
      return searchParams;
    });
  };

  const onGenreSelect = (genre: string) => {
    setSearchParams((searchParams) => {
      searchParams.set("filter", genre);
      return searchParams;
    });
  };

  const onSortChange = (sort: string) => {
    const updatedSort = SORT_OPTIONS.find((option) => option.query === sort);
    updatedSort &&
      setSearchParams((searchParams) => {
        searchParams.set("sortBy", sort);
        return searchParams;
      });
  };

  return (
    <>
      <div className="layout">
        <Outlet context={{ onSearch, currentSearch }} />
        <Main
          onGenreSelect={onGenreSelect}
          onSortChange={onSortChange}
          defaultSelectedGenre={MOVIE_GENRES[DEFAULT_GENRE]}
          movieList={movieList}
          currentSort={currentSort}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
