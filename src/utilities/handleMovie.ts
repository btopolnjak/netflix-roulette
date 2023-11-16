import { BASE_URL } from "../constants";
import mapMovieDataToApi from "./mapMovieDataToApi";

type MovieInfo = {
  id?: number;
  title: string;
  releaseDate: string;
  posterPath: string;
  overview: string;
  genres: string[];
  runtime: number;
};

export async function handleMovie(movie: MovieInfo) {
  const isNewMovie = movie.id ? "PUT" : "POST";
  const updatedMovieData = mapMovieDataToApi(movie);
  try {
    await fetch(BASE_URL, {
      method: isNewMovie,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedMovieData),
    });
  } catch (err) {
    console.log(err);
  }
}

export async function deleteMovie(id: number) {
  await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
}
