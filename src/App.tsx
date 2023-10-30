import { useEffect, useState } from "react";
import { getMovies, getDialogType, getDialogTitle } from "./utilities";
import { Header, Main, Footer } from "./layout";
import { Dialog } from "./components";
import { MOVIE_GENRES, SORT_OPTIONS, APP_CONSTANTS } from "./constants";
import { MovieInfo, DialogState, SortControl } from "./types";
import "./styles/index.scss";

function App() {
  const { INITIAL_SEARCH_VALUE, DEFAULT_GENRE, DEFAULT_SORT_OPTION } = APP_CONSTANTS;

  const [currentSort, setCurrentSort] = useState<SortControl>(SORT_OPTIONS[DEFAULT_SORT_OPTION]);
  const [currentGenre, setCurrentGenre] = useState(MOVIE_GENRES[DEFAULT_GENRE]);
  const [currentSearch, setCurrentSearch] = useState(INITIAL_SEARCH_VALUE);

  const [movieList, setMovieList] = useState<MovieInfo[] | []>([]);
  const [movieInfo, setMovieInfo] = useState<MovieInfo | null>(null);
  const [showDialog, setShowDialog] = useState<DialogState | null>(null);

  const controller = new AbortController();
  const { signal } = controller;

  useEffect(() => {
    getMovies({ currentSearch, currentGenre, currentSort, signal })
      .then(setMovieList)
      .catch(console.log);
  }, [currentSearch, currentGenre, currentSort]);

  const onPosterClick = (id: number) => {
    const selectedMovie = movieList.find((movie) => movie.id === id);
    selectedMovie && setMovieInfo(selectedMovie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDialogOpen = (name: string, id: number | null) => {
    setShowDialog({
      Component: getDialogType(name),
      dialogTitle: getDialogTitle(name),
      dialogMovieInfo: movieList.find((movie) => movie.id === id),
    });
  };

  const onSearch = (movie: string) => {
    setCurrentSearch(movie);
  };

  const onGenreSelect = (genre: string) => {
    setCurrentGenre(genre);
  };

  const onSortChange = (sort: string) => {
    const updatedSort = SORT_OPTIONS.find((option) => option.query === sort);
    updatedSort && setCurrentSort(updatedSort);
  };

  const onSubmit = () => setShowDialog(null);
  const onSearchClick = () => setMovieInfo(null);
  const onDialogClose = () => setShowDialog(null);

  return (
    <>
      {showDialog && showDialog.Component && (
        <Dialog dialogTitle={showDialog.dialogTitle} onDialogClose={onDialogClose}>
          <showDialog.Component dialogMovieInfo={showDialog.dialogMovieInfo} onSubmit={onSubmit} />
        </Dialog>
      )}
      <div className="layout">
        <Header
          onSearchClick={onSearchClick}
          onSearch={onSearch}
          initialSearchValue={INITIAL_SEARCH_VALUE}
          movieInfo={movieInfo}
          controller={controller}
        />
        <Main
          onGenreSelect={onGenreSelect}
          onPosterClick={onPosterClick}
          onSortChange={onSortChange}
          onDialogOpen={onDialogOpen}
          defaultSelectedGenre={MOVIE_GENRES[DEFAULT_GENRE]}
          movieGenres={MOVIE_GENRES}
          movieList={movieList}
          currentSort={currentSort}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
