import { Link } from "react-router-dom";
import { MovieTileProps } from "./MovieTile.types";
import { getReleaseYearFromDate } from "../../utilities";
import Poster from "../Poster/Poster";
import "./MovieTile.scss";

function MovieTile({ movieInfo, onDialogOpen }: MovieTileProps) {
  const { id, title, releaseDate, posterPath, genres } = movieInfo;
  const releaseYear = getReleaseYearFromDate(releaseDate);
  const genresList = genres.join(", ");

  const handleEditClick = () => {
    onDialogOpen("editMovie", id);
  };
  const handleDeleteClick = () => {
    onDialogOpen("deleteMovie", id);
  };

  return (
    <div className="movie-tile">
      <div className="movie-tile__button-menu">
        <button className="movie-tile__button" onClick={handleDeleteClick}>
          Delete
        </button>
        <button className="movie-tile__button" onClick={handleEditClick}>
          Edit
        </button>
      </div>
      <Link to={`/${id}`} className="movie-tile__link">
        <Poster className="movie-tile__image" posterPath={posterPath} />
      </Link>
      <div className="movie-tile__name">{title}</div>
      <div className="movie-tile__year">{releaseYear}</div>
      <div className="movie-tile__genre">{genresList}</div>
    </div>
  );
}

export default MovieTile;
