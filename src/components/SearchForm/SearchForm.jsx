import { useState } from "react";
import "./SearchForm.scss";

function SearchForm({ initialSearchValue, onSearch }) {
  const [inputField, setInputField] = useState(initialSearchValue);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputField) return;
    onSearch(inputField);
  };

  return (
    <form className="search-form">
      <input
        type="text"
        name="search"
        placeholder="What do you want to watch?"
        value={inputField}
        autoComplete="off"
        onChange={(e) => setInputField(e.target.value)}
        className="search-form__input"
      />
      <input type="submit" value="search" onClick={handleSearch} className="search-form__button" />
    </form>
  );
}

export default SearchForm;
