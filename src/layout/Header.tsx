import {
  SearchForm,
  SearchFormProps,
  SearchButton,
  SearchButtonProps,
  MovieDetails,
  MovieDetailsProps,
  Logo,
} from "../components";

import "../styles/layout.scss";

type HeaderProps = SearchFormProps & SearchButtonProps & MovieDetailsProps;

function Header({
  onSearchClick,
  onSearch,
  initialSearchValue,
  movieInfo,
  controller,
}: HeaderProps) {
  return (
    <div className={movieInfo ? "layout__header" : "layout__header__bg"}>
      <div className="layout__header__top-bar">
        <Logo />
        {movieInfo ? <SearchButton onSearchClick={onSearchClick} /> : null}
      </div>

      {movieInfo ? (
        <MovieDetails movieInfo={movieInfo} />
      ) : (
        <SearchForm
          onSearch={onSearch}
          initialSearchValue={initialSearchValue}
          controller={controller}
        />
      )}
    </div>
  );
}

export default Header;
