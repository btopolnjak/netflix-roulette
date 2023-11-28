import { StoryFn } from "@storybook/react";
import SortControl from "./SortControl";
import "./SortControl.scss";

export default {
  title: "React GMP",
  component: SortControl,
};

const Template: StoryFn<typeof SortControl> = (args) => <SortControl {...args} />;

export const SortControlComponent = Template.bind({});
