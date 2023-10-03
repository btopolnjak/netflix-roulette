import { StoryFn } from "@storybook/react";
import SearchButton from "./SearchButton";
import "./SearchButton.scss";

export default {
  title: "React GMP",
  component: SearchButton,
};

const Template: StoryFn<typeof SearchButton> = (args) => <SearchButton {...args} />;

export const SearchButtonComponent = Template.bind({});

SearchButtonComponent.args = {
  onSearchClick: () => {},
};
