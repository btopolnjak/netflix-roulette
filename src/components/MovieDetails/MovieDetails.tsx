import { MovieDetailsProps } from "./MovieDetails.types";
import { Poster } from "..";
import { getReleaseYearFromDate } from "../../utilities";
import "./MovieDetails.scss";

function MovieDetails({ movieInfo }: MovieDetailsProps) {
  const { title, voteAverage, genres, releaseDate, runtime, posterPath, overview } = movieInfo;

  const releaseYear = getReleaseYearFromDate(releaseDate);
  const genresList = genres.join(", ");
  const rating = voteAverage.toFixed(1);
  const duration = `${Math.floor(runtime / 60)}h ${runtime % 60}min`;

  return (
    <>
      <div className="movie-details">
        <Poster className="movie-details__poster" posterPath={posterPath} />
        <div className="movie-details__title">{title}</div>
        <div className="movie-details__rate">{rating}</div>
        <div className="movie-details__genres">{genresList}</div>
        <div className="movie-details__release-date">
          {releaseYear}
          <span className="movie-details__runtime">{duration}</span>
        </div>
        <div className="movie-details__description">{overview}</div>
      </div>
    </>
  );
}

export default MovieDetails;
