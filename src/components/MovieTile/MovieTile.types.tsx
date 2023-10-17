import { MovieInfo } from "../../types";

export type MovieTileProps = {
  movieInfo: MovieInfo;
  onPosterClick: (id: number) => void;
  onDialogOpen: (name: string, id: number | null) => void;
};
