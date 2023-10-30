import { Link } from "react-router-dom";
import { HOME } from "../../constants";

import "./ErrorPage.scss";

export default function ErrorPage() {
  return (
    <div className="error-page">
      <h1 className="error-page__title">Oops!</h1>
      <p className="error-page__text">
        Something went wrong.
        <br />
        The address you are trying to access
        <br />
        is not found or removed.
      </p>
      <Link to={HOME}>
        <button className="error-page__button">Go home</button>
      </Link>
    </div>
  );
}
