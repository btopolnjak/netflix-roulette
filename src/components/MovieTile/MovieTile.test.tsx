import { render, cleanup, screen } from "@testing-library/react";
import MovieTile from "./MovieTile";
import userEvent from "@testing-library/user-event";

const MovieTileProps = {
  movieInfo: {
    id: 284054,
    title: "Black Panther",
    tagline: "Long live the king",
    voteAverage: 7.3,
    voteCount: 3788,
    releaseDate: "2018-02-13",
    posterPath: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    overview:
      "King T'Challa returns home from America to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without.  Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantel to join with girlfriend Nakia, the queen-mother, his princess-kid sister,  members of the Dora Milaje (the Wakandan \"special forces\"), and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    budget: 200000000,
    revenue: 1245257672,
    genres: ["Action", "Adventure", "Fantasy", "Science Fiction"],
    runtime: 134,
  },
  onPosterClick: jest.fn(),
};

afterEach(cleanup);

it("should render the component with the default values", () => {
  render(<MovieTile {...MovieTileProps} />);

  const poster = screen.getByRole("img");
  const title = screen.getByText("Black Panther");
  const releaseYear = screen.getByText(/2018/);
  const genres = screen.getByText("Action, Adventure, Fantasy, Science Fiction");

  expect(poster).toHaveAttribute(
    "src",
    "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
  );
  expect(title).toBeInTheDocument();
  expect(releaseYear).toBeInTheDocument();
  expect(genres).toBeInTheDocument();
});

it("should call 'onClick' with movie id", () => {
  render(<MovieTile {...MovieTileProps} />);

  const { movieInfo, onPosterClick } = MovieTileProps;
  const { id } = movieInfo;
  const moviePoster = screen.getByRole("img");

  userEvent.click(moviePoster);

  expect(onPosterClick).toBeCalledWith(id);
});
