import React from "react";
import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: { onSubmit: { action: "onSubmit" } },
};

export const TemplateButton = (args) => <Button {...args} />;
