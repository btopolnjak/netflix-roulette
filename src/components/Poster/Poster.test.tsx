import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import Poster from "./Poster";

describe("Poster component", () => {
  const PosterProps = {
    id: 0,
    posterPath: "poster url",
    className: "poster classname",
  };

  afterEach(cleanup);

  it("should render the component", () => {
    render(<Poster {...PosterProps} />);

    const poster = screen.getByRole("img");

    expect(poster).toBeInTheDocument();
  });
});
