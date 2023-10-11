import { ChangeEvent } from "react";
import { SortControlProps } from "./SortControl.types";
import { SORT_OPTIONS } from "../../constants";
import "./SortControl.scss";

function SortControl({ currentSort, onSortChange }: SortControlProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    onSortChange(e.target.value);
  };

  return (
    <div className="sort-control__menu">
      <div className="sort-control__title">Sort by</div>
      <select
        className="sort-control__select"
        name="sort"
        onChange={handleChange}
        defaultValue={currentSort.label}
      >
        {SORT_OPTIONS.map((option) => {
          return (
            <option key={option.query} value={option.query}>
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default SortControl;
