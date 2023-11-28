// $red: #F65261;
// $light-gray: #808080;
// $black: #232323;
// $gray: #555;
// $white: #FFF

export const style = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    minHeight: "3.85rem",
    backgroundColor: "rgba(85, 85, 85, 0.1)",
    boxShadow: state.isFocused ? null : null,
    border: state.isFocused ? "none" : "none",
    borderRadius: "0.25rem",
    outline: state.isFocused ? "none" : "none",
    "&:hover": {
      borderColor: "none",
    },
  }),
  multiValue: (baseStyles) => ({
    ...baseStyles,
    padding: "0.25rem",
    backgroundColor: "rgba(85, 85, 85, 0.5)",
    color: "#F65261",
  }),
  multiValueLabel: (baseStyles) => ({
    ...baseStyles,
    color: "#FFFFFF",
  }),
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "#F65261" : "#F65261",
    "&:hover": {
      color: "#808080",
    },
  }),
  clearIndicator: (baseStyles, state) => ({
    ...baseStyles,
    color: state.isFocused ? "#F65261" : "#F65261",
    "&:hover": {
      color: "#808080",
    },
  }),
  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#555",
  }),
  menuList: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#232323",
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    backgroundColor: state.isFocused ? "#F65261" : "#232323",
    color: "#FFFFFF",
    ":active": {
      backgroundColor: "#555",
    },
  }),
};
