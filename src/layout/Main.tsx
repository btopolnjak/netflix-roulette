import {
  GenreSelect,
  GenreSelectProps,
  MovieTile,
  MovieTileProps,
  SortControl,
  SortControlProps,
} from "../components";
import { MovieInfo } from "../types";
import "../styles/layout.scss";

type MainProps = GenreSelectProps &
  Omit<MovieTileProps, "movieInfo"> &
  SortControlProps & {
    movieList: MovieInfo[];
  };

function Main({
  onGenreSelect,
  onSortChange,
  defaultSelectedGenre,
  movieList,
  currentSort,
}: MainProps) {
  return (
    <div className="layout__main">
      <div className="layout__main__menu">
        <GenreSelect defaultSelectedGenre={defaultSelectedGenre} onGenreSelect={onGenreSelect} />
        <SortControl currentSort={currentSort} onSortChange={onSortChange} />
      </div>
      <div className="layout__main__results">
        <strong>{movieList.length}</strong>
        <span>&nbsp;movies found</span>
      </div>
      <div className="layout__main__tiles">
        {movieList.map((movie) => (
          <MovieTile key={movie.id} movieInfo={movie} />
        ))}
      </div>
    </div>
  );
}

export default Main;
