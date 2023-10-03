import { StoryFn } from "@storybook/react";
import SearchForm from "./SearchForm";
import "./SearchForm.scss";

export default {
  title: "React GMP",
  component: SearchForm,
};

const Template: StoryFn<typeof SearchForm> = (args) => <SearchForm {...args} />;

export const SearchFormComponent = Template.bind({});

const initialSearchValue = "Example movie title";
SearchFormComponent.args = { initialSearchValue };
