declare module '@storybook/addon-links' {
  declare type LinkToFunction = (...args: Array<any>) => string;

  declare module.exports: {
    linkTo<T>(
      book: string | LinkToFunction,
      kind?: string | LinkToFunction
    ): (evt: SyntheticEvent<T>) => void,
    hrefTo(kind: string, story: string): Promise<string>,
    ...
  };
}

declare module '@storybook/addon-links/react' {
  declare type Props = {
    kind?: string,
    story?: string,
    ...
  };

  declare class LinkTo extends React$Component<Props> {}
  declare module.exports: typeof LinkTo;
}
