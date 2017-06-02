// @flow

declare type expressSession$Options = {
  store:               expressSession$Store,
  genid?:              <T>(value: T) => string,
  cookie?:             expressSession$Cookie,
  name?:               string,
  proxy?:              boolean,
  resave?:             boolean,
  rolling?:            boolean,
  saveUninitialized?:  boolean,
  secret?:             string,
  unset?:              'keep' | 'destroy'
}

declare type expressSession$Cookie$Options = {
  domain?:   string,
  expires?:  Object,
  httpOnly?: boolean,
  maxAge?:   number,
  path?:     string,
  sameSite?: boolean | string,
  secure?:   boolean
}

declare type expressSession$ID = string;

declare class expressSession$Request extends express$Request {
  session: expressSession$Session;
}

declare class expressSession$Store mixins events$EventEmitter {
  all(callback: (error: Error, sessions: Array<expressSession$Session>) => void): void;
  destory(sid: expressSession$ID, callback: (error: Error) => void): void;
  clear(callback: (error: Error) => void): void;
  length(callback: (error: Error, length: number) => void): void;
  get(sid: expressSession$ID, callback: (error: Error, session: ?expressSession$Session) => void): void;
  get(sid: expressSession$ID, session: expressSession$Session, callback: (error: Error) => void): void;
  touch(sid: expressSession$ID, session: expressSession$Session, callback: (error: Error) => void): void;
}

declare class expressSession$Cookie {
  static maxAge: number;
  expires: boolean;
  constructor(options: expressSession$Cookie$Options): void;
}

declare class expressSession$Session {
  req: express$Request;
  id: string;
  sessionID: string;
  cookie: expressSession$Cookie;

  static regenerate(callback: Function): void;
  static destroy(callback: Function): void;
  static reload(callback: Function): void;
  static save(callback: Function): void;
  static touch(): void;
  static id: string;
  static cookie: expressSession$Cookie;

  constructor(request: express$Request, data: Object): void;
}

declare module 'express-session' {
  declare module.exports: {
    (options: expressSession$Options):  express$Middleware,
    Store:                              Class<expressSession$Store>,
    Cookie:                             Class<expressSession$Cookie>,
    Session:                            Class<expressSession$Session>,
    MemoryStore:                        Class<expressSession$Store>
  };
}
