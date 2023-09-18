import movies from "../constants/movies.json";

export default async function getMovies(url: string) {
  console.log(`This is a placeholder for real API url: ${url}`);

  return movies.map((movie) => {
    return {
      ...movie,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count,
      releaseDate: movie.release_date,
      posterPath: movie.poster_path,
    };
  });
}
