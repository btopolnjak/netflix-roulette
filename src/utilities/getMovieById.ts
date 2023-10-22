import { BASE_URL } from "../constants";

export default async function getMovies(id: string | undefined) {
  const response = await fetch(BASE_URL + "/" + id);
  const movie = await response.json();
  console.log(movie);
  delete Object.assign(movie, { voteAverage: movie.vote_average })["vote_average"];
  delete Object.assign(movie, { voteCount: movie.vote_count })["vote_count"];
  delete Object.assign(movie, { releaseDate: movie.release_date })["release_date"];
  delete Object.assign(movie, { posterPath: movie.poster_path })["poster_path"];
  return movie;
}
