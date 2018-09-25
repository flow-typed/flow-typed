declare module "storybook-host" {
  declare type Context = { kind: string, story: string };
  declare type Renderable = React$Element<*>;
  declare type RenderFunction = () => Renderable | Array<Renderable>;

  declare type StoryDecorator = (
    story: RenderFunction,
    context: Context
  ) => Renderable | null;

  declare type AlignEdge =
    | "left"
    | "center"
    | "right"
    | "top"
    | "middle"
    | "bottom"
    | "left top"
    | "left middle"
    | "left bottom"
    | "center top"
    | "center middle"
    | "center bottom"
    | "right top"
    | "right middle"
    | "right bottom"
    | "top left"
    | "middle left"
    | "bottom left"
    | "top center"
    | "middle center"
    | "bottom center"
    | "top right"
    | "middle right"
    | "bottom right";

  declare type Props = {|
    mobXDevTools?: boolean,
    title?: string,
    hr?: boolean,
    align?: AlignEdge,
    height?: number | string,
    width?: number | string,
    background?: boolean | number | string,
    backdrop?: boolean | number | string,
    cropMarks?: boolean,
    border?: boolean | number | string,
    padding?: number | string,
    styles?: any,
    flex?: boolean
  |};

  declare export function host(props: Props): StoryDecorator;
}
