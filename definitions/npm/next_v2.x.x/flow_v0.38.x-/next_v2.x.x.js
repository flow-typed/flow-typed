/* @flow */

declare module "next" {
  declare type NextApp = {
    prepare(): Promise<void>;
    getRequestHandler(): any;
    render(req: any, res: any, pathname: string, query: any): any;
    renderToHTML(req: any, res: any, pathname: string, query: string): string;
    renderError(err: Error, req: any, res: any, pathname: any, query: any): any;
    renderErrorToHTML(err: Error, req: any, res: any, pathname: string, query: any): string;
  };
  declare module.exports: (...opts: any) => NextApp
}

declare module "next/head" {
  declare module.exports: Class<React$Component<void, any, any>>;
}

declare module "next/link" {
  declare module.exports: Class<React$Component<void, {href: string}, any>>;
}

declare module "next/prefetch" {
  declare export var prefetch: (url: string) => any;
  declare export var reloadIfPrefetched: any;
  declare export default Class<React$Component<void, {href: string, prefetch?: boolean}, any>>;
}

declare module "next/router" {
  declare module.exports: {
    route: string;
    pathname: string;
    query: Object;
    onRouteChangeStart: ?((url: string) => void);
    onRouteChangeComplete: ?((url: string) => void);
    onRouteChangeError: ?((err: Error & {cancelled: boolean}, url: string) => void);
    push(url: string, as: ?string): Promise<boolean>;
    replace(url: string, as: ?string): Promise<boolean>;
  };
}

declare module "next/document" {
  declare export var Head: Class<React$Component<void, any, any>>;
  declare export var Main: Class<React$Component<void, any, any>>;
  declare export var NextScript: Class<React$Component<void, any, any>>;
  declare export default Class<React$Component<void, any, any>> & {
    getInitialProps: (ctx: {pathname: string, query: any, req?: any, res?: any, xhr?: any, err?: any}) => Promise<any>;
    renderPage(cb: Function): void;
  };
}
