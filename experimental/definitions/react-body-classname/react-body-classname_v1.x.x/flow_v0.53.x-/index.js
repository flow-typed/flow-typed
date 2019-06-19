import React from "react";
declare module "react-body-classname" {
  declare type Props = {
    children?: React.ChildrenArray<any>,
    className: string
  };
  declare class BodyClassName extends React$Component<Props> {
    static rewind(): string;
  }
  declare module.exports: typeof BodyClassName;
}
