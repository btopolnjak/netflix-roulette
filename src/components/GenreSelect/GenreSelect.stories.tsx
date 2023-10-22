import { StoryFn } from "@storybook/react";
import GenreSelect from "./GenreSelect";
import { MOVIE_GENRES } from "../../constants";
import "./GenreSelect.scss";

export default {
  title: "React GMP",
  component: GenreSelect,
};

const Template: StoryFn<typeof GenreSelect> = (args) => <GenreSelect {...args} />;

const defaultSelectedGenre = "All";
const movieGenres = MOVIE_GENRES;

export const GenreSelectComponent = Template.bind({});
GenreSelectComponent.args = { defaultSelectedGenre };
