import { GenreSelect, GenreSelectProps } from "../components";
import "../styles/layout.scss";

function Main(props: GenreSelectProps) {
  return (
    <div className="layout__main">
      <GenreSelect {...props} />
    </div>
  );
}

export default Main;
