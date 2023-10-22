import { useState, useEffect, FormEvent } from "react";
import { SearchFormProps } from "./SearchForm.types";
import "./SearchForm.scss";

function SearchForm({ initialSearchValue, onSearch, controller }: SearchFormProps) {
  const [inputField, setInputField] = useState(initialSearchValue);

  // This doesn't work somehow. If I place controller.abort() inside of handleSearch
  // then I can see it works when Search button is clicked.
  useEffect(() => () => controller.abort(), []);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputField) return;
    onSearch(inputField);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="What do you want to watch?"
        value={inputField}
        autoComplete="off"
        onChange={(e) => setInputField(e.target.value)}
        className="search-form__input"
      />
      <input type="submit" value="search" className="search-form__button" />
    </form>
  );
}

export default SearchForm;
