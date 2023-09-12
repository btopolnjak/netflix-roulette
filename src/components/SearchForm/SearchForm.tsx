import { useState, FormEvent } from "react";
import { SearchFormProps } from "./SearchForm.types";
import "./SearchForm.scss";

function SearchForm({ initialSearchValue, onSearch }: SearchFormProps) {
  const [inputField, setInputField] = useState(initialSearchValue);

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
