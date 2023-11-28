import App from "../App";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Dialog } from "../components";
import { MovieDetailsHeader, SearchFormHeader } from "../layout";
import { MovieDetailsLoader, AddMovieLoader, EditMovieLoader, DeleteMovieLoader } from "../loaders";
import { HOME, NEW, EDIT, DELETE, MOVIE_ID } from "../constants";

export const router = createBrowserRouter([
  {
    path: HOME,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME,
        element: <SearchFormHeader />,
        children: [
          {
            path: NEW,
            element: <Dialog />,
            loader: AddMovieLoader,
          },
        ],
      },
      {
        path: MOVIE_ID,
        element: <MovieDetailsHeader />,
        loader: MovieDetailsLoader,
        children: [
          {
            path: EDIT,
            element: <Dialog />,
            loader: EditMovieLoader,
          },
          {
            path: DELETE,
            element: <Dialog />,
            loader: DeleteMovieLoader,
          },
        ],
      },
    ],
  },
]);
