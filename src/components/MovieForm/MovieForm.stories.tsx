import { StoryFn } from "@storybook/react";
import MovieForm from "./MovieForm";
import "./MovieForm.scss";

export default {
  title: "React GMP",
  component: MovieForm,
};

const Template: StoryFn<typeof MovieForm> = (args) => <MovieForm {...args} />;

export const exampleForm = Template.bind({});
