import { useState, useEffect } from "react";
import { useLoaderData, useLocation, useParams, Link, Outlet } from "react-router-dom";
import { SearchButton, MovieDetails, Logo } from "../components";
import { getMovieById } from "../utilities";
import { HOME } from "../constants";
import { MovieInfo } from "../types";
import "../styles/layout.scss";

function MovieDetailsHeader() {
  const movieInfo = useLoaderData() as MovieInfo;
  const { movieId } = useParams();
  const location = useLocation();

  const [movieDetails, setMovieDetails] = useState(movieInfo);

  useEffect(() => {
    getMovieById(movieId).then(setMovieDetails);
  }, [location.pathname]);

  return (
    <>
      <div className={"layout__header"}>
        <div className="layout__header__top-bar">
          <Logo />
          <Link to={HOME}>
            <SearchButton />
          </Link>
        </div>
        <MovieDetails movieInfo={movieDetails} />
      </div>
      <Outlet />
    </>
  );
}

export default MovieDetailsHeader;
