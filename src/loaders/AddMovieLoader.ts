import { MovieForm } from "../components";
import { DIALOG_TITLE_MAP } from "../constants";

export default function AddMovieLoader() {
  return {
    Component: MovieForm,
    dialogTitle: DIALOG_TITLE_MAP.addMovie,
  };
}
