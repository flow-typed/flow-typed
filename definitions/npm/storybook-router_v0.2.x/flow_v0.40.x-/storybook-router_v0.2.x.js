import type { LocationShape, GetUserConfirmation } from 'react-router';

type Renderable = React$Element<*>;
type RenderFunction = () => Renderable;
type StoryDecorator = (story: RenderFunction) => Renderable;

declare module 'storybook-router' {
  declare type Links = {
    [key: string]: (kind: string, story: string) => Function,
  };

  declare type RouterProps = {
    // v3
    initialEntry?: Array<string>,
    autoRoute?: boolean,
    // v4
    initialEntries?: Array<LocationShape | string>,
    initialIndex?: number,
    getUserConfirmation?: GetUserConfirmation,
    keyLength?: number,
    children?: React$Element<*>,
  };

  declare module.exports: {
    (links?: Links, routerProps?: RouterProps): StoryDecorator,
  };
}
