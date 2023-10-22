import { StoryFn } from "@storybook/react";
import ErrorPage from "./ErrorPage";
import "./ErrorPage.scss";

export default {
  title: "React GMP",
  component: ErrorPage,
};

const Template: StoryFn<typeof ErrorPage> = () => <ErrorPage />;

export const exampleErrorPage = Template.bind({});
