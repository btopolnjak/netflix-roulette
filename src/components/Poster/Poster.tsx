import { SyntheticEvent } from "react";
import { PosterProps } from "./Poster.types";

import fallbackImage from "../../assets/movie-poster-placeholder.svg";

function Poster({ posterPath, className }: PosterProps) {
  const handleError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  return <img className={className} alt="movie poster" src={posterPath} onError={handleError} />;
}

export default Poster;
