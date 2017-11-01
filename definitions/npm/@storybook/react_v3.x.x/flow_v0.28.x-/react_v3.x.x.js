type NodeModule = typeof module;

declare module '@storybook/react' {
  declare type Renderable = React$Element<any>;
  declare type RenderFunction = () => Renderable;

  declare type StoryDecorator = (
    story: RenderFunction,
    context: { kind: string, story: string }
  ) => Renderable | null;

  declare interface Story {
    add(storyName: string, callback: RenderFunction): Story,
    addDecorator(decorator: StoryDecorator): Story,
  }

  declare interface StoryObject {
    name: string,
    render: RenderFunction,
  }

  declare interface StoryBucket {
    kind: string,
    stories: Array<StoryObject>,
  }

  declare function addDecorator(decorator: StoryDecorator): void;
  declare function configure(fn: () => void, module: NodeModule): void;
  declare function setAddon(addon: Object): void;
  declare function storiesOf(name: string, module: NodeModule): Story;
  declare function storiesOf<T>(name: string, module: NodeModule): Story & T;

  declare function getStorybook(): Array<StoryBucket>;
}
