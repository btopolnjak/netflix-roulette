import { FC } from "react";
import { MovieInfo } from "./MovieInfo.types";

export type DialogLoader = {
  Component: FC<{ movieInfo: MovieInfo }>;
  dialogTitle: string;
  movieInfo: MovieInfo;
};
