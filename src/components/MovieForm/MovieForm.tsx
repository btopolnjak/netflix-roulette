import { FormEvent } from "react";
import { MovieFormProps } from "./MovieForm.types";
import { getCurrentDate } from "../../utilities";
import "./MovieForm.scss";

function MovieForm({ dialogMovieInfo }: MovieFormProps) {
  const { title, releaseDate, posterPath, voteAverage, genres, runtime, overview } =
    dialogMovieInfo ?? {};

  const currentDate = getCurrentDate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="movie-form">
      <form className="movie-form__grid" id="movie-form" onSubmit={handleSubmit}>
        <div>
          <label className="movie-form__label" htmlFor="title">
            Title
          </label>
          <input
            className="movie-form__input"
            defaultValue={title}
            type="text"
            name="title"
            id="title"
            placeholder="Movie title"
            required
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="releaseDate">
            Release date
          </label>
          <input
            className="movie-form__input"
            defaultValue={releaseDate}
            type="date"
            name="releaseDate"
            id="releaseDate"
            max={currentDate}
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="movieUrl">
            Movie url
          </label>
          <input
            className="movie-form__input"
            defaultValue={posterPath}
            type="url"
            name="movieUrl"
            id="movieUrl"
            placeholder="https://"
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="rating">
            Rating
          </label>
          <input
            className="movie-form__input"
            defaultValue={voteAverage}
            type="number"
            name="rating"
            id="rating"
            min="1"
            max="10"
            step=".1"
            placeholder="7.8"
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="genre">
            Genre
          </label>
          <input
            className="movie-form__input"
            defaultValue={genres}
            type="text"
            name="genre"
            id="genre"
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="runtime">
            Runtime
          </label>
          <input
            className="movie-form__input"
            defaultValue={runtime}
            type="number"
            name="runtime"
            id="runtime"
            min="1"
            placeholder="minutes"
            required
          />
        </div>

        <div className="movie-form__overview">
          <label className="movie-form__label" htmlFor="overview">
            Overview
          </label>
          <textarea
            className="movie-form__overview-input"
            defaultValue={overview}
            name="overview"
            id="overview"
            placeholder="Movie description"
          />
        </div>

        <div className="movie-form__buttons">
          <input className="movie-form__reset-button" id="reset" type="reset" value="Reset" />

          <input className="movie-form__confirm-button" id="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
