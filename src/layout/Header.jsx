import React from "react";
import { Counter, SearchForm } from "../components/";
import "../styles/layout.scss";

function Header(props) {
  return (
    <div className="layout__header">
      <Counter {...props} />
      <SearchForm {...props} />
    </div>
  );
}

export default Header;
