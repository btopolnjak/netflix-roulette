import { MouseEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { HOME } from "../../constants";
import { DialogLoader } from "../../types";
import { deleteMovie } from "../../utilities";
import "./DeleteMovie.scss";

function DeleteMovie() {
  const { movieInfo } = useLoaderData() as DialogLoader;
  const navigate = useNavigate();

  console.log(movieInfo);
  const onMovieDelete = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    deleteMovie(movieInfo.id);
    navigate(HOME);
  };

  return (
    <div className="delete-movie">
      <p className="delete-movie__text">
        Are you sure you want to delete <b>{movieInfo.title}</b> movie?
      </p>
      <button className="delete-movie__confirm-button" onClick={onMovieDelete}>
        Confirm
      </button>
    </div>
  );
}

export default DeleteMovie;
