import { Component } from "react";

declare module "react-collapsible" {
  declare type Props = {
    trigger: string
  };

  declare class Collapsible extends Component<Props> {}
  declare module.exports: typeof Collapsible;
}
