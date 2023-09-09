import { Counter, CounterProps, SearchForm, SearchFormProps } from "../components";
import "../styles/layout.scss";

type HeaderProps = CounterProps & SearchFormProps;

function Header(props: HeaderProps) {
  return (
    <div className="layout__header">
      <Counter {...props} />
      <SearchForm {...props} />
    </div>
  );
}

export default Header;
