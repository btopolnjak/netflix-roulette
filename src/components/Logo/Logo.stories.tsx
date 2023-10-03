import { StoryFn } from "@storybook/react";
import Logo from "./Logo";
import "./Logo.scss";

export default {
  title: "React GMP",
  component: Logo,
};

const Template: StoryFn<typeof Logo> = () => <Logo />;

export const LogoComponent = Template.bind({});
