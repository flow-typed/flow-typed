declare module 'react-media' {
  declare type ReactMediaQueryObject = { [prop: string]: string | number | boolean, ... };

  declare type Props = {
    defaultMatches?: boolean,
    query?: string | ReactMediaQueryObject | Array<ReactMediaQueryObject>,
    render?: () => React$Node,
    children?: React$Node | (matches: boolean) => React$Node,
    targetWindow?: { matchMedia(query: string): void, ... },
    ...
  };

  declare module.exports: React$ComponentType<Props>;
}
