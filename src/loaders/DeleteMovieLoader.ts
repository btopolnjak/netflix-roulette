import { LoaderFunctionArgs } from "react-router-dom";
import { DeleteMovie } from "../components";
import { getMovieById } from "../utilities";

export default async function DeleteMovieLoader({ params }: LoaderFunctionArgs) {
  const movie = await getMovieById(params.movieId);
  return {
    Component: DeleteMovie,
    dialogTitle: "Delete movie",
    movieInfo: movie,
  };
}
