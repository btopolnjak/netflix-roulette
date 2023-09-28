import ReactDOM from "react-dom";
import { MouseEvent } from "react";
import { DialogProps } from "./Dialog.types";
import "./Dialog.scss";

function Dialog({ children, onDialogClose }: DialogProps) {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onDialogClose();
  };
  return ReactDOM.createPortal(
    <div className="dialog">
      <div className="dialog__wrapper">
        <button className="dialog__close-button" onClick={handleClick}>
          <svg height="100" viewBox="0 0 100 100" width="100">
            <path
              d="M13.41,12l6.3-6.29a1,1,0,1,0-1.42-1.42L12,10.59,5.71,4.29A1,1,0,0,0,4.29,5.71L10.59,12l-6.3,6.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l6.29,6.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export default Dialog;
