import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

import { MOVIE_GENRES } from "./constants/genres";
import "./styles/index.scss";

function App() {
  const initialCounterValue = 100;
  const initialSearchValue = "Example movie title";
  const defaultSelectedGenre = MOVIE_GENRES[0];

  const onSearch = (movie) => {
    alert(`You searched for "${movie}"`);
  };

  const onSelect = (genre) => {
    alert(`You have choosen "${genre}" category`);
  };

  return (
    <div className="layout">
      <Header
        onSearch={onSearch}
        initialCounterValue={initialCounterValue}
        initialSearchValue={initialSearchValue}
      />
      <Main
        onSelect={onSelect}
        defaultSelectedGenre={defaultSelectedGenre}
        movieGenres={MOVIE_GENRES}
      />
      <Footer />
    </div>
  );
}

export default App;
