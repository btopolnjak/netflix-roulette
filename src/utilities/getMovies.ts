import { BASE_URL, APP_CONSTANTS } from "../constants";

type FetchParams = {
  movie: string;
  genre: string;
  sort: string;
};

export default async function getMovies({ movie, genre, sort }: FetchParams) {
  const includeFilterDependingOnGenre = (genre: string) => {
    return genre === "All" ? undefined : { filter: genre };
  };
  const includeSearchDependingOnTitle = (movie: string) => {
    const { INITIAL_SEARCH_VALUE } = APP_CONSTANTS;
    return movie === INITIAL_SEARCH_VALUE ? undefined : { search: movie };
  };

  const searchParams = new URLSearchParams({
    sortBy: sort,
    sortOrder: "asc",
    searchBy: "title",
    ...includeSearchDependingOnTitle(movie),
    ...includeFilterDependingOnGenre(genre),
  });

  const response = await fetch(BASE_URL + searchParams);
  const fetchData = await response.json();

  console.log(BASE_URL + searchParams);

  const movies = fetchData.data.map((movie: any) => {
    delete Object.assign(movie, { voteAverage: movie.vote_average })["vote_average"];
    delete Object.assign(movie, { voteCount: movie.vote_count })["vote_count"];
    delete Object.assign(movie, { releaseDate: movie.release_date })["release_date"];
    delete Object.assign(movie, { posterPath: movie.poster_path })["poster_path"];
    return movie;
  });

  return movies;
}
