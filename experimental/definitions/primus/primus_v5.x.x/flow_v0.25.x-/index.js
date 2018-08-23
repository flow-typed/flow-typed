import http from "http";
import net from "net";

type Primus$Options = Primus$SocketOptions & {
  authorization?: Function,
  compression?: boolean,
  credentials?: boolean,
  exposed?: boolean,
  global?: string,
  headers?: boolean,
  maxAge?: string,
  methods?: string,
  origins?: string,
  pathname?: string,
  timeout?: number | false
};

type Primus$CreateOptions = Primus$Options & {
  port?: number,
  root?: string,
  cert?: string,
  key?: string,
  ca?: string,
  pfx?: string,
  passphrase?: string
};

type Primus$SocketOptions = {
  parser?: Object,
  plugin?: Object,
  transformer?: Object
};

declare class Primus$Spark {
  address: string;
  headers: any[];
  id: string;
  query: string;
  request: http.ClientRequest;
  emits(event: string, parser: (next: any, parser: any) => mixed): void;
  end(data?: any, options?: Object): void;
  on(event: string, cb: (data: any) => mixed): void;
  write(data: any): void;

  //primus-room
  join(name: string, fn?: Function): void;
  room(name: string): Primus$Room;
  in(name: string): Primus$Room;
  leave(name: string, fn?: Function): void;
  leaveAll(fn?: Function): void;
  rooms(): Primus$Room[];
  isRoomEmpty(name: string, fn?: Function): boolean;

  //primus-emit
  emit(eventName: string, ...arguments?: any[]): void;
}
declare class Primus$Primus {
  constructor(server: http.Server, options?: Primus$Options): Primus$Primus;
  static createServer(options: Primus$CreateOptions): Primus$Primus;
  static createServer(
    onConnection: (spark: Primus$Spark) => any,
    options?: Primus$CreateOptions
  ): Primus$Primus;
  static createSocket(options: Primus$SocketOptions): Class<net.Socket>;

  clients(): string[];
  spark(id: string): ?Primus$Spark;
  connected: number;
  connections: { [id: string]: Primus$Spark };
  pathname: string;
  server: http.Server;
  timeout: number;
  options: Primus$Options;
  socket: net.Socket;
  authorize(req: http.ClientRequest, done: () => mixed): void;
  before(
    event: string,
    cb: (req: http.ClientRequest, res: http.IncomingMessage, next: any) => mixed
  ): void;
  destroy(): void;
  disable(name: string): void;
  emits(events: string, parser: (next: any, parser: any) => mixed): void;
  enable(name: string): void;
  end(): void;
  forEach(
    cb: (spark: Primus$Spark, id: string, connections: any) => mixed
  ): void;
  library(): void;
  on(event: string, cb: (spark: Primus$Spark) => mixed): void;
  remove(name: string): void;
  transform(event: string, cb: (packet: any) => mixed): void;
  use(name: string, plugin: Object): void;
  write(data: mixed): void;
  save(path: string, cb?: (err: any) => mixed): void;

  // primus-room
  join(sparks: Array<Primus$Spark | string>, name: string, fn?: Function): void;
  leave(
    sparks: Array<Primus$Spark | string>,
    name: string,
    fn?: Function
  ): void;
  room(room: string): Primus$Room;
  in(room: string): Primus$Room;
  rooms(spark?: Primus$Spark | string, fn?: Function): Primus$Room[];
  isRoomEmpty(room: string, fn?: Function): boolean;
}

declare class Primus$Room {
  write(message: string): void;
  except(ids: string | string[]): Primus$Room;
  clients(fn?: Function): string[];
  empty(): void;
  transform(fn: Function): void;
}

declare module "primus" {
  declare module.exports: Class<Primus$Primus>;
}
