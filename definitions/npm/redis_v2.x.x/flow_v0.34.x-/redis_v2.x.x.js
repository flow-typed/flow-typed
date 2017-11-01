/* This module definition is by no means complete. A lot of methods of the
Client class are missing */
declare module "redis" {
  declare class Client extends events$EventEmitter {
    hmset: (key: string, map: any, callback: (?Error) => void) => void;

    rpush: (key: string, value: string, callback: (?Error) => void) => void;
  }

  declare module.exports: {
    Client: typeof Client,

    createClient: (settings: any) => Client
  };
}
