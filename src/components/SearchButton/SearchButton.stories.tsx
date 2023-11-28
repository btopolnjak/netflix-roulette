import { StoryFn } from "@storybook/react";
import SearchButton from "./SearchButton";
import "./SearchButton.scss";

export default {
  title: "React GMP",
  component: SearchButton,
};

const Template: StoryFn<typeof SearchButton> = () => <SearchButton />;

export const SearchButtonComponent = Template.bind({});
