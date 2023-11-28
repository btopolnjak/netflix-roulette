import { FormEvent } from "react";
import { useOutletContext } from "react-router-dom";
import "./SearchForm.scss";

function SearchForm() {
  const { onSearch, currentSearch } = useOutletContext() as any;

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputField = e.currentTarget.search.value;
    if (!inputField) return;
    onSearch(inputField);
  };

  return (
    <form className="search-form" onSubmit={handleSearch}>
      <header className="search-form__title">Find your movie</header>
      <input
        type="text"
        name="search"
        placeholder="What do you want to watch?"
        defaultValue={currentSearch}
        autoComplete="off"
        className="search-form__input"
      />
      <input type="submit" value="search" className="search-form__button" />
    </form>
  );
}

export default SearchForm;
