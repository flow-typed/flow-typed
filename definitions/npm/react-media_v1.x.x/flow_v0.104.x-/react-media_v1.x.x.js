declare module 'react-media' {
  declare type ReactMediaQueryObject = { [prop: string]: string | number | boolean, ... };

  declare type Props = {
    defaultMatches?: boolean,
    query?: string | ReactMediaQueryObject | Array<ReactMediaQueryObject>,
    queries?: { [key: string]: string | ReactMediaQueryObject, ... },
    render?: () => React$Node,
    children?:
      | React$Node
      | (matches: boolean & {
        [key: string]: boolean,
        ...
      }) => React$Node,
    onChange?: (matches: boolean & {
      [key: string]: boolean,
      ...
    }) => void,
    targetWindow?: { matchMedia(query: string): void, ... },
    ...
  };

  declare module.exports: React$ComponentType<Props>;
}
