import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Poster from "./Poster";

const PosterProps = {
  id: 0,
  posterPath: "poster url",
  className: "poster classname",
  onPosterClick: jest.fn(),
};

afterEach(cleanup);

it("should render the component", () => {
  render(<Poster {...PosterProps} />);

  const poster = screen.getByRole("img");

  expect(poster).toBeInTheDocument();
});

it("should call 'onPosterClick' on 'click' event", () => {
  render(<Poster {...PosterProps} />);

  const { onPosterClick } = PosterProps;
  const poster = screen.getByRole("img");

  fireEvent.click(poster);

  expect(onPosterClick).toBeCalled();
});
