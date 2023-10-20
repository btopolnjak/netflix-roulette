export default function mapMovieDataToApp(movies: any) {
  return movies.map((movie: any) => {
    delete Object.assign(movie, { voteAverage: movie.vote_average })["vote_average"];
    delete Object.assign(movie, { voteCount: movie.vote_count })["vote_count"];
    delete Object.assign(movie, { releaseDate: movie.release_date })["release_date"];
    delete Object.assign(movie, { posterPath: movie.poster_path })["poster_path"];
    return movie;
  });
}
