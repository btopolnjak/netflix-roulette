import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import GenreSelect from "./GenreSelect";
import { MOVIE_GENRES } from "../../constants/genres";

let renderedGenres: HTMLInputElement[];
const GenreSelectProps = {
  defaultSelectedGenre: MOVIE_GENRES[0],
  movieGenres: MOVIE_GENRES,
  onSelect: jest.fn(),
};

afterEach(cleanup);

it("should render all genres passed in props", () => {
  render(<GenreSelect {...GenreSelectProps} />);

  const { movieGenres } = GenreSelectProps;
  renderedGenres = screen.getAllByRole("radio");

  expect(renderedGenres.length).toBe(movieGenres.length);
});

it("should highlight a selected genre passed in props", () => {
  render(<GenreSelect {...GenreSelectProps} />);

  const { defaultSelectedGenre } = GenreSelectProps;
  const highlightedGenre = screen.getAllByRole("radio", {
    name: defaultSelectedGenre,
  });

  expect(highlightedGenre).toBeTruthy();
});

it("should call 'onChange' and pass correct genre in arguments after a click event on a genre button", () => {
  render(<GenreSelect {...GenreSelectProps} />);

  const { onSelect } = GenreSelectProps;
  renderedGenres = screen.getAllByRole("radio");

  fireEvent.click(renderedGenres[2]);

  expect(onSelect).toBeCalledWith(renderedGenres[2].value);
});
