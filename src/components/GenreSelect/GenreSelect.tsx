import { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { MOVIE_GENRES } from "../../constants";
import { GenreSelectProps } from "./GenreSelect.types";
import "./GenreSelect.scss";

function GenreSelect({ defaultSelectedGenre, onGenreSelect }: GenreSelectProps) {
  const [searchParams] = useSearchParams();
  const selectedGenre = searchParams.get("filter") || defaultSelectedGenre;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onGenreSelect(e.target.value);
  };

  return (
    <div className="genre-select">
      <div className="genre-select__menu">
        {MOVIE_GENRES.map((name: any) => {
          return (
            <label key={name}>
              <input
                type="radio"
                value={name}
                name="genre"
                className="genre-select__button"
                checked={!!(selectedGenre === name)}
                onChange={handleChange}
              />
              <div className="genre-select__text">{name}</div>
            </label>
          );
        })}
      </div>
    </div>
  );
}

export default GenreSelect;
