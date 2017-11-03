import type { Element } from "react";

type LocationShape = {
  pathname?: string,
  search?: string,
  hash?: string,
  state?: any
};

type GetUserConfirmation = (
  message: string,
  callback: (confirmed: boolean) => void
) => void;

type Renderable = Element<*>;
type RenderFunction = () => Renderable;
type StoryDecorator = (story: RenderFunction) => Renderable;

declare module "storybook-router" {
  declare type Links = {
    [key: string]: (kind: string, story: string) => Function
  };

  declare type RouterProps = {
    initialEntry?: Array<string>,
    autoRoute?: boolean,
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: Element<*>
  };

  declare module.exports: {
    (links?: Links, routerProps?: RouterProps): StoryDecorator
  };
}
