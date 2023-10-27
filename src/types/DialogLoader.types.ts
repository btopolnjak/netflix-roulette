import { FunctionComponent } from "react";
import { MovieInfo } from "./MovieInfo.types";

export type DialogLoader<T> = {
  Component: FunctionComponent<T | {}>;
  dialogTitle: string;
  movieInfo: MovieInfo;
};
