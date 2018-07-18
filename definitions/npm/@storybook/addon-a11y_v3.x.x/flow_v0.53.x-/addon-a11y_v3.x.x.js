declare module '@storybook/addon-a11y' {
  declare type Renderable = React$ElementType;
  declare type RenderFunction = () => Renderable | Array<Renderable>;

  declare type StoryDecorator = (
    story: RenderFunction,
    context: { kind: string, story: string }
  ) => Renderable | null;

  declare type AxeCheck = {
    id: string,
    evaluate: (options: mixed) => void,
    after?: () => void,
    options?: mixed,
    enabled?: boolean,
  };

  declare type AxeOptions = {
    branding?: {
      brand?: string,
      application?: string,
    },
    reporter?: 'v1' | 'v2',
    checks?: Array<AxeCheck>,
    rules?: Array<{
      id: string,
      selector?: string,
      excludeHidden?: boolean,
      enabled?: boolean,
      pageLevel?: boolean,
      any?: Array<AxeCheck>,
      all?: Array<AxeCheck>,
      none?: Array<AxeCheck>,
      tags?: Array<string>,
      matches?: string,
    }>,
    disableOtherRules?: boolean,
  };

  declare module.exports: {
    checkA11y: StoryDecorator,
    configureA11y: (options?: AxeOptions) => void,
  };
}
