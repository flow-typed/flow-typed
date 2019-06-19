declare module 'connect-route' {
  declare class Request extends http$IncomingMessage {
    handler: Function;
    params: {[param: string]: string};
    route: string;
  }

  declare type Middleware = (req: Request, res: http$ServerResponse, next: (err?: ?Error) => mixed) => mixed;

  declare type Router = {
    get(path: string, middleware: Middleware): void;
    post(path: string, middleware: Middleware): void;
    put(path: string, middleware: Middleware): void;
    head(path: string, middleware: Middleware): void;
    patch(path: string, middleware: Middleware): void;
    delete(path: string, middleware: Middleware): void;
    connect(path: string, middleware: Middleware): void;
    options(path: string, middleware: Middleware): void;
    trace(path: string, middleware: Middleware): void;
    copy(path: string, middleware: Middleware): void;
    lock(path: string, middleware: Middleware): void;
    mkcol(path: string, middleware: Middleware): void;
    move(path: string, middleware: Middleware): void;
    propfind(path: string, middleware: Middleware): void;
    proppatch(path: string, middleware: Middleware): void;
    unlock(path: string, middleware: Middleware): void;
    report(path: string, middleware: Middleware): void;
    mkactivity(path: string, middleware: Middleware): void;
    checkout(path: string, middleware: Middleware): void;
    merge(path: string, middleware: Middleware): void;
  }

  declare type connectRoute = (middleware: (router: Router) => void) => ((req: http$IncomingMessage, res: http$ServerResponse, next: (err?: ?Error) => mixed) => mixed);

  declare module.exports: connectRoute;
}
