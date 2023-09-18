import { useState, ChangeEvent } from "react";
import { GenreSelectProps } from "./GenreSelect.types";
import "./GenreSelect.scss";

function GenreSelect({ defaultSelectedGenre, movieGenres, onGenreSelect }: GenreSelectProps) {
  const [selectedGenre, setSelectedGenre] = useState(defaultSelectedGenre);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedGenre(e.target.value);
    onGenreSelect(e.target.value);
  };

  return (
    <div className="genre-select">
      <div className="genre-select__menu">
        {movieGenres.map((name: any) => {
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