import { render, cleanup, screen } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("Search Button component", () => {
  afterEach(cleanup);

  it("should render the component", () => {
    render(<SearchButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
});
