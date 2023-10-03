import { render, cleanup, screen, fireEvent } from "@testing-library/react";
import SearchButton from "./SearchButton";

describe("Search Button component", () => {
  const SearchButtonProps = {
    onSearchClick: jest.fn(),
  };

  afterEach(cleanup);

  it("should render the component", () => {
    render(<SearchButton {...SearchButtonProps} />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("should call 'onSearchClick' on 'click' event", () => {
    render(<SearchButton {...SearchButtonProps} />);

    const { onSearchClick } = SearchButtonProps;
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(onSearchClick).toBeCalled();
  });
});
