import { MovieInfo } from "../../types";

export type MovieFormProps = {
  dialogMovieInfo?: MovieInfo;
  onSubmit: () => void;
};
