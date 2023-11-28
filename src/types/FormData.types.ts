export type FormData = {
  title: string;
  releaseDate: string;
  posterPath: string;
  voteAverage: number;
  genres: { value: string; label: string }[];
  runtime: number;
  overview: string;
};
