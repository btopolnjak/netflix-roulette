export default function mapMovieDataToApi(movie: any | any[]) {
  delete Object.assign(movie, { vote_average: movie.voteAverage })["voteAverage"];
  delete Object.assign(movie, { vote_count: movie.voteCount })["voteCount"];
  delete Object.assign(movie, { release_date: movie.releaseDate })["releaseDate"];
  delete Object.assign(movie, { poster_path: movie.posterPath })["posterPath"];

  if (typeof movie.vote_average !== "number") movie.vote_average = parseFloat(movie.vote_average);
  if (typeof movie.runtime !== "number") movie.runtime = parseInt(movie.runtime);

  return movie;
}
