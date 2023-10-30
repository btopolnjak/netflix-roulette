import { render, cleanup, screen } from "@testing-library/react";
import SearchForm from "./SearchForm";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useOutletContext: () => ({
    onDialogOpen: jest.fn(),
    onSearch: jest.fn(),
    currentSearch: "Example movie",
  }),
}));

describe("Search Form component", () => {
  let inputField: HTMLInputElement;
  let submitButton: HTMLButtonElement;
  let initialSearchValue = "Example movie";

  afterEach(cleanup);

  it("should render the component input", () => {
    render(<SearchForm />);

    inputField = screen.getByDisplayValue(initialSearchValue);
    submitButton = screen.getByRole("button", { name: "search" });

    expect(inputField).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
});
