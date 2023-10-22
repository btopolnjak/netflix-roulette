import { LoaderFunctionArgs } from "react-router-dom";
import { getMovieById } from "../utilities";

export default async function MovieDetailsLoader({ params }: LoaderFunctionArgs) {
  const movie = await getMovieById(params.movieId);
  return movie;
}
