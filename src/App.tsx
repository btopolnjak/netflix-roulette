import { useEffect, useState, ComponentType } from "react";
import { getMovies, getDialogType } from "./utilities";
import { Header, Main, Footer } from "./layout";
import { Dialog } from "./components";
import { MOVIE_GENRES, SORT_OPTIONS } from "./constants";
import { MovieInfo, MovieList } from "./types";
import "./styles/index.scss";

function App() {
  const initialSearchValue = "Example movie title";
  const defaultSelectedGenre = MOVIE_GENRES[0];

  const [currentSort, setCurrentSort] = useState<string>(SORT_OPTIONS[0]);
  const [movieList, setMovieList] = useState<MovieList | []>([]);
  const [movieInfo, setMovieInfo] = useState<MovieInfo | undefined>(undefined);
  const [dialogMovieInfo, setDialogMovieInfo] = useState<MovieInfo | undefined>(undefined);
  const [ShowDialogComponent, setShowDialogComponent] = useState<ComponentType<any> | null>(null);

  useEffect(() => {
    (async () => {
      const movies = await getMovies("sampleURL");
      setMovieList(movies);
    })();
  }, []);

  const onPosterClick = (id: number) => {
    const selectedMovie = movieList.find((movie) => movie.id === id);
    setMovieInfo(selectedMovie);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onDialogOpen = (name: string, id: number | null) => {
    const movieInfo = movieList.find((movie) => movie.id === id);
    const dialogType = getDialogType(name);
    console.log("dialogType", dialogType);
    setDialogMovieInfo(movieInfo);
    setShowDialogComponent(() => dialogType);
  };

  const onSearch = (movie: string) => alert(`You searched for "${movie}"`);
  const onGenreSelect = (genre: string) => alert(`You have choosen "${genre}" category`);
  const onSortChange = (conditon: string) => setCurrentSort(conditon);
  const onSearchClick = () => setMovieInfo(undefined);
  const onDialogClose = () => setShowDialogComponent(null);

  console.log("ShowDialogComponent", ShowDialogComponent);
  return (
    <>
      {ShowDialogComponent && (
        <Dialog onDialogClose={onDialogClose}>
          <ShowDialogComponent dialogMovieInfo={dialogMovieInfo} />
        </Dialog>
      )}
      <div className="layout">
        <Header
          onSearchClick={onSearchClick}
          onSearch={onSearch}
          initialSearchValue={initialSearchValue}
          movieInfo={movieInfo}
        />
        <Main
          onGenreSelect={onGenreSelect}
          onPosterClick={onPosterClick}
          onSortChange={onSortChange}
          onDialogOpen={onDialogOpen}
          defaultSelectedGenre={defaultSelectedGenre}
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
