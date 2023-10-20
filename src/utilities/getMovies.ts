import { BASE_URL, APP_CONSTANTS } from "../constants";
import { FetchParams } from "../types";
import mapMovieDataToApp from "./mapMovieDataToApp";

export default async function getMovies({ currentSearch, currentGenre, currentSort }: FetchParams) {
  const { INITIAL_SEARCH_VALUE } = APP_CONSTANTS;
  const search = currentSearch !== INITIAL_SEARCH_VALUE ? currentSearch : null;
  const genre = currentGenre !== "All" ? currentGenre : null;

  const searchParams = new URLSearchParams({
    sortBy: currentSort.query,
    sortOrder: "asc",
    searchBy: "title",
    ...(search && { search }),
    ...(genre && { genre }),
  });

  const response = await fetch(BASE_URL + searchParams);
  const fetchData = await response.json();

  return mapMovieDataToApp(fetchData.data);
}
