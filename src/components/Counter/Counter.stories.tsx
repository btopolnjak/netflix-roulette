import { StoryFn } from "@storybook/react";
import Counter from "./Counter";
import "./Counter.scss";

export default {
  title: "React GMP",
  component: Counter,
};

const Template: StoryFn<typeof Counter> = (args) => <Counter {...args} />;

export const CounterComponent = Template.bind({});
CounterComponent.args = { initialCounterValue: 200 };
