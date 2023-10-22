import { MovieInfo } from "../../types";

export type MovieTileProps = {
  movieInfo: MovieInfo;
  onDialogOpen: (name: string, id: number | null) => void;
};
