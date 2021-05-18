import React from "react";
import Player from "./Player";

export default {
  title: "Player",
  component: Player,
  argTypes: { onSubmit: { action: "onSubmit" } },
};

export const Template = (args) => <Player {...args} />;
