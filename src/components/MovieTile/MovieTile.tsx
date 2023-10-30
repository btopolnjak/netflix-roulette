import { Link, useLocation } from "react-router-dom";
import { MovieTileProps } from "./MovieTile.types";
import { getReleaseYearFromDate } from "../../utilities";
import Poster from "../Poster/Poster";
import "./MovieTile.scss";

function MovieTile({ movieInfo }: MovieTileProps) {
  const { id, title, releaseDate, posterPath, genres } = movieInfo;
  const { search } = useLocation();
  const releaseYear = getReleaseYearFromDate(releaseDate);
  const genresList = genres.join(", ");

  return (
    <div className="movie-tile">
      <div className="movie-tile__button-menu">
        <Link to={`/${id}/delete${search}`} className="movie-tile__button">
          Delete
        </Link>
        <Link to={`/${id}/edit${search}`} className="movie-tile__button">
          Edit
        </Link>
      </div>
      <Link to={`/${id}${search}`} className="movie-tile__link">
        <Poster className="movie-tile__image" posterPath={posterPath} />
      </Link>
      <div className="movie-tile__name">{title}</div>
      <div className="movie-tile__year">{releaseYear}</div>
      <div className="movie-tile__genre">{genresList}</div>
    </div>
  );
}

export default MovieTile;
