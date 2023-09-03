import { useState } from "react";
import "./GenreSelect.scss";

function GenreSelect({ defaultSelectedGenre, movieGenres, onSelect }) {
  const [selectedGenre, setSelectedGenre] = useState(defaultSelectedGenre);

  const handleChange = (e) => {
    setSelectedGenre(e.target.value);
    onSelect(e.target.value);
  };

  return (
    <div className="genre-select">
      <div className="genre-select__menu">
        {movieGenres.map((name) => {
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
