declare module '@storybook/addon-links' {
  declare type LinkToFunction = (...args: Array<any>) => string;

  declare module.exports: {
    linkTo(
      book: string | LinkToFunction,
      kind?: string | LinkToFunction
    ): SyntheticMouseEvent,
    hrefTo(kind: string, story: string): Promise<string>,
  };
}

declare module '@storybook/addon-links/react' {
  declare type Props = {
    kind?: string,
    story?: string,
  };

  declare class LinkTo extends React$Component<void, Props, void> {}
  declare module.exports: typeof LinkTo;
}
