import { Link, Outlet } from "react-router-dom";
import { SearchForm, Logo } from "../components";
import { NEW } from "../constants";
import "../styles/layout.scss";

function SearchFormHeader() {
  return (
    <>
      <div className={"layout__header__bg"}>
        <div className="layout__header__top-bar">
          <Logo />
          <Link to={NEW} className="layout__header__add-movie-button">
            + Add Movie
          </Link>
        </div>
        <SearchForm />
      </div>
      <Outlet />
    </>
  );
}

export default SearchFormHeader;
