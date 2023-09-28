import { ComponentType } from "react";
import { MovieInfo } from "./MovieInfo.types";

export type DialogState = {
  Component: ComponentType<any>;
  dialogTitle: string;
  dialogMovieInfo: MovieInfo | undefined;
};
