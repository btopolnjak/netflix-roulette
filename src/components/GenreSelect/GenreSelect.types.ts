export type GenreSelectProps = {
  defaultSelectedGenre: string;
  movieGenres: string[];
  onSelect: (argument: string) => void;
};
