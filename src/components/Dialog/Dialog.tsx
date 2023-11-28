import ReactDOM from "react-dom";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ONE_SCREEN_BACK } from "../../constants";
import { DialogLoader } from "../../types";
import "./Dialog.scss";

function Dialog() {
  const navigate = useNavigate();
  const { Component, dialogTitle, movieInfo } = useLoaderData() as DialogLoader;

  return ReactDOM.createPortal(
    <div className="dialog">
      <div className="dialog__wrapper">
        <div className="dialog__title">{dialogTitle}</div>
        <button className="dialog__close-button" onClick={() => navigate(ONE_SCREEN_BACK)}>
          <svg height="100" viewBox="0 0 100 100" width="100">
            <path
              d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </button>
        <Component movieInfo={movieInfo} />
      </div>
    </div>,
    document.body
  );
}

export default Dialog;
