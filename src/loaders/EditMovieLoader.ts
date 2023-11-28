import { LoaderFunctionArgs } from "react-router-dom";
import { DIALOG_TITLE_MAP } from "../constants";
import { MovieForm } from "../components";
import { getMovieById } from "../utilities";

export default async function EditMovieLoader({ params }: LoaderFunctionArgs) {
  const movie = await getMovieById(params.movieId);
  return {
    Component: MovieForm,
    dialogTitle: DIALOG_TITLE_MAP.editMovie,
    movieInfo: movie,
  };
}
