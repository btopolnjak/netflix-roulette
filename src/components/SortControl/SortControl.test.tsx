import { render, cleanup, screen } from "@testing-library/react";
import SortControl from "./SortControl";
import { SORT_OPTIONS } from "../../constants";
import userEvent from "@testing-library/user-event";

describe("Sort Control component", () => {
  const SortControlProps = {
    onSortChange: jest.fn(),
    currentSort: SORT_OPTIONS[0],
  };

  afterEach(cleanup);

  it("should render the component with the default values", () => {
    render(<SortControl {...SortControlProps} />);

    const label = screen.getByText(/Sort by/);
    const defaultOption = screen.getByRole("option", { name: "Title" });

    expect(label).toBeInTheDocument();
    expect(defaultOption).toBeInTheDocument();
  });

  it("should call 'onSortChange' with 'Title' option", () => {
    render(<SortControl {...SortControlProps} />);

    const { onSortChange } = SortControlProps;
    const defaultOption = screen.getByRole("combobox");
    const titleOption = screen.getByRole("option", { name: "Release date" });

    userEvent.selectOptions(defaultOption, titleOption);

    expect(onSortChange).toBeCalledWith("Release date");
  });
});
