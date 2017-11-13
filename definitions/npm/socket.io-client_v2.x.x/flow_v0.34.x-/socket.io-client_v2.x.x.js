declare module "socket.io-client" {
  declare type Callback = (...args: mixed[]) => void;

  declare type ManagerOptions = $Shape<{
    path: string,
    reconnection: boolean,
    reconnectionAttempts: number,
    reconnectionDelay: number,
    reconnectionDelayMax: number,
    randomizationFactor: number,
    timeout: number,
    parser: any
  }>;

  declare type LookupOptions = $Shape<{ forceNew: boolean }>;

  declare type SocketOptions = $Shape<{ query: string }>;

  declare class Emitter {
    on(event: string, cb: Callback): this;
    addEventListener(event: string, cb: Callback): this;
    once(event: string, cb: Callback): this;
    off(event: string, cb: Callback): this;
    removeListener(event: string, cb: Callback): this;
    removeAllListeners(event: string, cb: Callback): this;
    removeEventListener(event: string, cb: Callback): this;
    emit(event: string, payload: mixed): this;
    listeners(event: string): Callback[];
    hasListeners(event: string): boolean;
  }

  declare export class Manager extends Emitter {
    static (uri?: string, opts?: ManagerOptions): this;
    reconnection(boolean): this;
    reconnectionAttempts(number): this;
    reconnectionDelay(number): this;
    randomizationFactor(number): this;
    reconnectionDelayMax(number): this;
    timeout(number): this;
    open(fn?: (err?: Error) => void, opts?: ManagerOptions): this;
    connect(fn: any, opts: any): this;
    socket(namespace: string, opts?: SocketOptions): Socket;
  }

  declare export class Socket extends Emitter {
    static (io: Manager, nsp: string, opts?: SocketOptions): this;
    open(): this;
    connect(): this;
    send(...args: mixed[]): this;
    emit(event: string, ...args: mixed[]): this; // overrides Emitter#emit
    close(): this;
    disconnect(): this;
    compress(boolean): this;
    io: Manager;
  }

  declare export var protocol: 4;

  declare type Lookup = (uri?: string, opts?: LookupOptions) => Socket;
  declare export var connect: Lookup;
  declare export default Lookup
}
