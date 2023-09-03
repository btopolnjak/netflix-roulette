import React from "react";
import { GenreSelect } from "../components";
import "../styles/layout.scss";

function Main(props) {
  return (
    <div className="layout__main">
      <GenreSelect {...props} />
    </div>
  );
}

export default Main;
