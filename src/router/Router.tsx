import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import { ErrorPage } from "../components";
import { MovieDetailsHeader, SearchFormHeader } from "../layout";
import { MovieDetailsLoader } from "../loaders";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <SearchFormHeader />,
      },
      {
        path: ":movieId",
        element: <MovieDetailsHeader />,
        loader: MovieDetailsLoader,
      },
    ],
  },
]);
