import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { MOVIE_GENRES } from "../../constants/genres";
import GenreSelect from "./GenreSelect";

describe("Genre Select component", () => {
  let renderedGenres: HTMLInputElement[];
  const GenreSelectProps = {
    defaultSelectedGenre: MOVIE_GENRES[0],
    onGenreSelect: jest.fn(),
  };

  afterEach(cleanup);

  it("should render all genres passed in props", () => {
    render(
      <BrowserRouter>
        <GenreSelect {...GenreSelectProps} />
      </BrowserRouter>
    );

    renderedGenres = screen.getAllByRole("radio");

    expect(renderedGenres.length).toBe(MOVIE_GENRES.length);
  });

  it("should highlight a selected genre passed in props", () => {
    render(
      <BrowserRouter>
        <GenreSelect {...GenreSelectProps} />
      </BrowserRouter>
    );

    const { defaultSelectedGenre } = GenreSelectProps;
    const highlightedGenre = screen.getAllByRole("radio", {
      name: defaultSelectedGenre,
    });

    expect(highlightedGenre).toBeTruthy();
  });

  it("should call 'onChange' and pass correct genre in arguments after a click event on a genre button", () => {
    render(
      <BrowserRouter>
        <GenreSelect {...GenreSelectProps} />
      </BrowserRouter>
    );

    const { onGenreSelect } = GenreSelectProps;
    renderedGenres = screen.getAllByRole("radio");

    fireEvent.click(renderedGenres[2]);

    expect(onGenreSelect).toBeCalledWith(renderedGenres[2].value);
  });
});
