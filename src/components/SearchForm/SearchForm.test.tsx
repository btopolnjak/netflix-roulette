import { render, cleanup, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import SearchForm from "./SearchForm";

describe("Search Form component", () => {
  // let inputField: HTMLInputElement;
  // let submitButton: HTMLButtonElement;
  // let userTyping = " My Movie Title";
  // const controller = new AbortController();
  // const SearchFormProps = {
  //   initialSearchValue: "Example movie title",
  //   onSearch: jest.fn(),
  //   controller,
  // };
  // afterEach(cleanup);
  // it("should render the component input with the value equal to initial value passed in props", () => {
  //   render(<SearchForm {...SearchFormProps} />);
  //   const { initialSearchValue } = SearchFormProps;
  //   inputField = screen.getByDisplayValue(initialSearchValue);
  //   expect(inputField).toBeInTheDocument();
  // });
  // it("should call 'onChange' with proper value after typing to the input and a 'click' event", () => {
  //   render(<SearchForm {...SearchFormProps} />);
  //   const { initialSearchValue, onSearch } = SearchFormProps;
  //   inputField = screen.getByDisplayValue(initialSearchValue);
  //   submitButton = screen.getByRole("button", { name: "search" });
  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     user.type(inputField, `${userTyping}`);
  //     user.click(submitButton);
  //   });
  //   expect(onSearch).toBeCalledWith(initialSearchValue + userTyping);
  // });
  // it("should call 'onChange' with proper value after typing to the input and pressing Enter key", () => {
  //   render(<SearchForm {...SearchFormProps} />);
  //   const { initialSearchValue, onSearch } = SearchFormProps;
  //   inputField = screen.getByDisplayValue(initialSearchValue);
  //   submitButton = screen.getByRole("button", { name: "search" });
  //   // eslint-disable-next-line testing-library/no-unnecessary-act
  //   act(() => {
  //     user.type(inputField, `${userTyping}{Enter}`);
  //   });
  //   expect(onSearch).toBeCalledWith(initialSearchValue + userTyping);
  // });
});
