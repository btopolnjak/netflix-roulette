import { StoryFn } from "@storybook/react";
import Poster from "./Poster";

export default {
  title: "React GMP",
  component: Poster,
};

const Template: StoryFn<typeof Poster> = (args) => <Poster {...args} />;

export const PosterComponent = Template.bind({});

PosterComponent.args = {
  posterPath: "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  className: "movie-tile__image",
};
