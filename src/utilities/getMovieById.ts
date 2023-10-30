import { BASE_URL } from "../constants";
import mapMovieDataToApp from "./mapMovieDataToApp";

export default async function getMovies(id: string | undefined) {
  const response = await fetch(BASE_URL + "/" + id);
  const movie = await response.json();
  return mapMovieDataToApp(movie);
}
