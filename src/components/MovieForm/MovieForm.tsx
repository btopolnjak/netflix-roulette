import Select from "react-select";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { handleMovie, getCurrentDate } from "../../utilities";
import { style } from "../../styles/multiselect";
import { MOVIE_GENRES, ONE_SCREEN_BACK } from "../../constants";
import { FormData } from "../../types";
import { MovieFormProps } from "./MovieForm.types";
import "./MovieForm.scss";

function MovieForm({ movieInfo }: MovieFormProps) {
  const { genres } = movieInfo ?? {};
  const defaultGenresMultiselect = MOVIE_GENRES.slice(1).map((e) => ({ value: e, label: e }));
  const selectedGenresMultiselect = genres && genres.map((e) => ({ value: e, label: e }));

  const currentDate = getCurrentDate();
  const navigate = useNavigate();

  const { register, handleSubmit, reset, control } = useForm<FormData>({
    defaultValues: { ...movieInfo, genres: selectedGenresMultiselect },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const movieGenres = data.genres.map((e) => e.value);
    const movieData = { ...movieInfo, ...data, genres: movieGenres };
    handleMovie(movieData);
    navigate(ONE_SCREEN_BACK);
  };

  return (
    <div className="movie-form">
      <form className="movie-form__grid" id="movie-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label className="movie-form__label" htmlFor="title">
            Title
          </label>
          <input
            {...register("title")}
            className="movie-form__input"
            type="text"
            id="title"
            placeholder="Movie title"
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="releaseDate">
            Release date
          </label>
          <input
            {...register("releaseDate")}
            className="movie-form__input"
            type="date"
            id="releaseDate"
            max={currentDate}
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="movieUrl">
            Movie url
          </label>
          <input
            {...register("posterPath")}
            className="movie-form__input"
            type="url"
            id="movieUrl"
            placeholder="https://"
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="voteAverage">
            Rating
          </label>
          <input
            {...register("voteAverage")}
            className="movie-form__input"
            type="number"
            id="voteAverage"
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
          <Controller
            name="genres"
            control={control}
            defaultValue={selectedGenresMultiselect}
            render={({ field }) => (
              <Select
                {...field}
                isMulti
                options={defaultGenresMultiselect}
                styles={style}
                required
              />
            )}
          />
        </div>

        <div>
          <label className="movie-form__label" htmlFor="runtime">
            Runtime
          </label>
          <input
            {...register("runtime", { min: 1 })}
            className="movie-form__input"
            type="number"
            id="runtime"
            placeholder="minutes"
            required
          />
        </div>

        <div className="movie-form__overview">
          <label className="movie-form__label" htmlFor="overview">
            Overview
          </label>
          <textarea
            {...register("overview")}
            className="movie-form__overview-input"
            id="overview"
            placeholder="Movie description"
          />
        </div>

        <div className="movie-form__buttons">
          <input
            className="movie-form__reset-button"
            id="reset"
            type="reset"
            value="Reset"
            onClick={() => reset({ genres: [] })}
          />
          <input className="movie-form__confirm-button" id="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default MovieForm;
