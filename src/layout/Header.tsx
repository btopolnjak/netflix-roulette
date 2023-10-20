import {
  SearchForm,
  SearchFormProps,
  SearchButton,
  SearchButtonProps,
  MovieDetails,
  Logo,
} from "../components";

import { MovieInfo } from "../types";

import "../styles/layout.scss";

type HeaderProps = SearchFormProps & SearchButtonProps & { movieInfo: MovieInfo | null };

function Header({ onSearchClick, onSearch, initialSearchValue, movieInfo }: HeaderProps) {
  return (
    <div className={movieInfo ? "layout__header" : "layout__header__bg"}>
      <div className="layout__header__top-bar">
        <Logo />
        {movieInfo ? <SearchButton onSearchClick={onSearchClick} /> : null}
      </div>

      {movieInfo ? (
        <MovieDetails movieInfo={movieInfo} />
      ) : (
        <SearchForm onSearch={onSearch} initialSearchValue={initialSearchValue} />
      )}
    </div>
  );
}

export default Header;
