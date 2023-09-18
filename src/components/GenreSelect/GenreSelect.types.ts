export type GenreSelectProps = {
  defaultSelectedGenre: string;
  movieGenres: string[];
  onGenreSelect: (argument: string) => void;
};
