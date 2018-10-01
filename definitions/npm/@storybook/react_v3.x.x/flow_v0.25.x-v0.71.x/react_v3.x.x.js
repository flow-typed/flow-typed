type NodeModule = typeof module;

declare module '@storybook/react' {
  declare type Context = { kind: string, story: string };
  declare type Renderable = React$Element<*>;
  declare type RenderCallback = (
    context: Context
  ) => Renderable | Array<Renderable>;
  declare type RenderFunction = () => Renderable | Array<Renderable>;

  declare type StoryDecorator = (
    story: RenderFunction,
    context: Context
  ) => Renderable | null;

  declare interface Story {
    +kind: string;
    add(storyName: string, callback: RenderCallback): Story;
    addDecorator(decorator: StoryDecorator): Story;
  }

  declare interface StoryObject {
    name: string;
    render: RenderFunction;
  }

  declare interface StoryBucket {
    kind: string;
    filename: string;
    stories: Array<StoryObject>;
  }

  declare function addDecorator(decorator: StoryDecorator): void;
  declare function configure(fn: () => void, module: NodeModule): void;
  declare function setAddon(addon: Object): void;
  declare function storiesOf(name: string, module: NodeModule): Story;
  declare function forceReRender(): void;

  declare function getStorybook(): Array<StoryBucket>;
}
