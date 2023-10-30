import { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import { getMovies, getDialogType, getDialogTitle } from "./utilities";
import { Main, Footer } from "./layout";
import { Dialog } from "./components";
import { MOVIE_GENRES, SORT_OPTIONS, APP_CONSTANTS } from "./constants";
import { MovieInfo, DialogState } from "./types";
import "./styles/index.scss";

function App() {
  const { INITIAL_SEARCH_VALUE, DEFAULT_GENRE, DEFAULT_SORT_OPTION } = APP_CONSTANTS;
  const [searchParams, setSearchParams] = useSearchParams();

  const currentSort = searchParams.get("sortBy") || SORT_OPTIONS[DEFAULT_SORT_OPTION].query;
  const currentGenre = searchParams.get("filter") || MOVIE_GENRES[DEFAULT_GENRE];
  const currentSearch = searchParams.get("search") || INITIAL_SEARCH_VALUE;

  const [movieList, setMovieList] = useState<MovieInfo[] | []>([]);
  const [showDialog, setShowDialog] = useState<DialogState | null>(null);

  useEffect(() => {
    getMovies({ currentSearch, currentGenre, currentSort }).then(setMovieList).catch(console.log);
  }, [currentSearch, currentGenre, currentSort]);

  const onDialogOpen = (name: string, id: number | null) => {
    setShowDialog({
      Component: getDialogType(name),
      dialogTitle: getDialogTitle(name),
      dialogMovieInfo: movieList.find((movie) => movie.id === id),
    });
  };

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

  const onSubmit = () => setShowDialog(null);
  const onDialogClose = () => setShowDialog(null);

  return (
    <>
      {showDialog && showDialog.Component && (
        <Dialog dialogTitle={showDialog.dialogTitle} onDialogClose={onDialogClose}>
          <showDialog.Component dialogMovieInfo={showDialog.dialogMovieInfo} onSubmit={onSubmit} />
        </Dialog>
      )}
      <div className="layout">
        <Outlet context={{ onDialogOpen, onSearch, currentSearch }} />
        <Main
          onGenreSelect={onGenreSelect}
          onSortChange={onSortChange}
          onDialogOpen={onDialogOpen}
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
