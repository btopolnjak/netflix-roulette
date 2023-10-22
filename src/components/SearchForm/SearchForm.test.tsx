import { render, cleanup, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

describe("Search Form component", () => {
  let inputField: HTMLInputElement;
  let initialSearchValue = "Example movie";

  jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useOutletContext: () => ({
      onDialogOpen: jest.fn(),
      onSearch: jest.fn(),
      currentSearch: "Example movie",
    }),
  }));

  afterEach(cleanup);

  it("should render the component input with the value equal to initial value passed in props", () => {
    render(<SearchForm />);
    inputField = screen.getByDisplayValue(initialSearchValue);
    expect(inputField).toBeInTheDocument();
  });
});
