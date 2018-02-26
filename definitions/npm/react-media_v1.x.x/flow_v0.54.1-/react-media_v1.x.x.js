declare module 'react-media' {
  declare type ReactMediaQueryObject = {
    [prop: string]: string | number | boolean
  };

  declare module.exports: React$ComponentType<{
    defaultMatches?: boolean,
    query?: string | ReactMediaQueryObject | Array<ReactMediaQueryObject>,
    render?: () => React$Node,
    children?: React$Node | (matches: boolean) => React$Node,
    targetWindow?: {
      matchMedia(query: string): void
    }
  }>;
}
