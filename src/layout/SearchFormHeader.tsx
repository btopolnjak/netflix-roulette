import { MouseEvent } from "react";
import { useOutletContext } from "react-router-dom";
import { SearchForm, Logo } from "../components";
import "../styles/layout.scss";

function SearchFormHeader() {
  const { onDialogOpen } = useOutletContext() as any;
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onDialogOpen("addMovie", null);
  };
  return (
    <div className={"layout__header__bg"}>
      <div className="layout__header__top-bar">
        <Logo />
        <button className="layout__header__add-movie-button" onClick={handleClick}>
          + Add Movie
        </button>
      </div>
      <SearchForm />
    </div>
  );
}

export default SearchFormHeader;
