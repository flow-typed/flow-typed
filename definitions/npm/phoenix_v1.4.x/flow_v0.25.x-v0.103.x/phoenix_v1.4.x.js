declare module 'phoenix' {
  declare export class Push {
    constructor(channel: Channel, event: string, payload: { [key: string]: any }, timeout: number): this;
    send(): void;
    resend(timeout: number): void;
    receive(status: string, callback: (response?: any) => any): this;
  }

  declare export class Channel {
    constructor(topic: string, params?: { [key: string]: any } | (() => { [key: string]: any }), socket: Socket): this;
    join(timeout?: number): Push;
    leave(timeout?: number): Push;
    onClose(callback: (payload: any, ref: any, joinRef: any) => void): void;
    onError(callback: (reason?: any) => void): void;
    onMessage(event: string, payload: any, ref: any): any;
    on(event: string, callback: (response?: any) => void): number;
    off(event: string): void;
    push(event: string, payload: { [key: string]: any }, timeout?: number): Push;
  }

  declare export type BinaryType = "arraybuffer" | "blob";
  declare export type ConnectionState = "connecting" | "open" | "closing" | "closed";

  declare export interface SocketConnectOption {
    binaryType: BinaryType,
    params: { [key: string]: any } | (() => { [key: string]: any }),
    transport: string,
    timeout: number,
    heartbeatIntervalMs: number,
    longpollerTimeout: number,
    encode: (payload: { [key: string]: any }, callback: (encoded: any) => void) => void,
    decode: (payload: string, callback: (decoded: any) => void) => void,
    logger: (kind: string, message: string, data: any) => void,
    reconnectAfterMs: (tries: number) => number,
    rejoinAfterMs: (tries: number) => number
  }

  declare export class Socket {
    constructor(endPoint: string, opts?: $Rest<SocketConnectOption, {}>): this;
    protocol(): string;
    endPointURL(): string;
    connect(params?: any): void;
    disconnect(callback?: () => void, code?: number, reason?: string): void;
    connectionState(): ConnectionState;
    isConnected(): boolean;
    remove(channel: Channel): void;
    channel(topic: string, chanParams?: { [key: string]: any }): Channel;
    push(data: { [key: string]: any }): void;
    log(kind: string, message: string, data: any): void;
    hasLogger(): boolean;
    onOpen(callback: () => void): void;
    onClose(callback: () => void): void;
    onError(callback: () => void): void;
    onMessage(callback: () => void): void;
    makeRef(): string
  }

  declare export class LongPoll {
    constructor(endPoint: string): this;
    normalizeEndpoint(endPoint: string): string;
    endpointURL(): string;
    closeAndRetry(): void;
    ontimeout(): void;
    poll(): void;
    send(body: any): void;
    close(code?: any, reason?: any): void
  }

  declare export class Ajax {
    static states: {
      [state: string]: number
    };
    static request(
      method: string,
      endPoint: string,
      accept: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void): void;
    static xdomainRequest(
      req: any,
      method: string,
      endPoint: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void): void;
    static xhrRequest(
      req: any,
      method: string,
      endPoint: string,
      accept: string,
      body: any,
      timeout?: number,
      ontimeout?: any,
      callback?: (response?: any) => void): void;
    static parseJSON(resp: string): JSON;
    static serialize(obj: any, parentKey: string): string;
    static appendParams(url: string, params: any): string
  }

  declare export class Presence {
    constructor(channel: Channel, opts?: PresenceOpts): this;
    onJoin(callback: PresenceOnJoinCallback): void;
    onLeave(callback: PresenceOnLeaveCallback): void;
    onSync(callback: () => void): void;
    list<T>(chooser?: (key: string, presence: any) => T): T[];
    inPendingSyncState(): boolean;
    static syncState(
      currentState: { [key: string]: any },
      newState: { [key: string]: any },
      onJoin?: PresenceOnJoinCallback,
      onLeave?: PresenceOnLeaveCallback): { [key: string]: any };
    static syncDiff(
      currentState: { [key: string]: any },
      diff: {
        joins: { [key: string]: any },
        leaves: { [key: string]: any }
      },
      onJoin?: PresenceOnJoinCallback,
      onLeave?: PresenceOnLeaveCallback): { [key: string]: any };
    static list<T>(
      presences: { [key: string]: any },
      chooser?: (key: string, presence: any) => T): T[]
  }

  declare export type PresenceOnJoinCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;
  declare export type PresenceOnLeaveCallback = (key?: string, currentPresence?: any, newPresence?: any) => void;

  declare export interface PresenceOpts {
    events?: {
      state: string,
      diff: string
    }
  }
}
