import { render, cleanup, screen } from "@testing-library/react";
import MovieDetails from "./MovieDetails";

const mockedUsedNavigate = jest.fn();
const scrollToMock = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Movie Details component", () => {
  const MovieDetailsProps = {
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
  };

  afterEach(cleanup);

  it("should render the component with the default values", () => {
    jest.spyOn(window, "scrollTo").mockImplementation(scrollToMock);
    render(<MovieDetails {...MovieDetailsProps} />);

    const poster = screen.getByRole("img");
    const title = screen.getByText("Black Panther");
    const releaseYear = screen.getByText(/2018/);
    const genres = screen.getByText("Action, Adventure, Fantasy, Science Fiction");
    const runtime = screen.getByText("2h 14min");
    const vote_average = screen.getByText("7.3");
    const overview = screen.getByText(/King T'Challa returns home/);

    expect(poster).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg"
    );
    expect(title).toBeInTheDocument();
    expect(releaseYear).toBeInTheDocument();
    expect(genres).toBeInTheDocument();
    expect(runtime).toBeInTheDocument();
    expect(vote_average).toBeInTheDocument();
    expect(overview).toBeInTheDocument();
  });
});
