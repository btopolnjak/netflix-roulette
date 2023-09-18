import { Poster } from "..";
import { MovieTileProps } from "./MovieTile.types";
import { getReleaseYearFromDate } from "../../utilities";
import "./MovieTile.scss";

function MovieTile({ movieInfo, onPosterClick }: MovieTileProps) {
  const { id, title, releaseDate, posterPath, genres } = movieInfo;
  const releaseYear = getReleaseYearFromDate(releaseDate);
  const genresList = genres.join(", ");

  return (
    <div className="movie-tile">
      <Poster
        className="movie-tile__image"
        posterPath={posterPath}
        onPosterClick={() => onPosterClick(id)}
      />
      <div className="movie-tile__name">{title}</div>
      <div className="movie-tile__year">{releaseYear}</div>
      <div className="movie-tile__genre">{genresList}</div>
    </div>
  );
}

export default MovieTile;
