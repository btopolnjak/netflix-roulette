import { useLoaderData, Link } from "react-router-dom";
import { SearchButton, MovieDetails, Logo } from "../components";
import { HOME } from "../constants";
import { MovieInfo } from "../types";
import "../styles/layout.scss";

function MovieDetailsHeader() {
  const movieInfo = useLoaderData() as MovieInfo;
  return (
    <div className={"layout__header"}>
      <div className="layout__header__top-bar">
        <Logo />
        <Link to={HOME}>
          <SearchButton />
        </Link>
      </div>
      <MovieDetails movieInfo={movieInfo} />
    </div>
  );
}

export default MovieDetailsHeader;
