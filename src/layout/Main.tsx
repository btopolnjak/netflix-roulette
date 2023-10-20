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
    onDialogOpen: (name: string, id: number | null) => void;
  };

function Main({
  onGenreSelect,
  onPosterClick,
  onSortChange,
  onDialogOpen,
  defaultSelectedGenre,
  movieGenres,
  movieList,
  currentSort,
}: MainProps) {
  return (
    <div className="layout__main">
      <div className="layout__main__menu">
        <GenreSelect
          defaultSelectedGenre={defaultSelectedGenre}
          onGenreSelect={onGenreSelect}
          movieGenres={movieGenres}
        />
        <SortControl currentSort={currentSort} onSortChange={onSortChange} />
      </div>
      <div className="layout__main__results">
        <strong>{movieList.length}</strong>
        <span>&nbsp;movies found</span>
      </div>
      <div className="layout__main__tiles">
        {movieList.map((movie) => {
          return (
            <MovieTile
              key={movie.id}
              movieInfo={movie}
              onPosterClick={onPosterClick}
              onDialogOpen={onDialogOpen}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Main;
