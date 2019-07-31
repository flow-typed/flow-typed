// Phoenix Channels JavaScript client
// https://hexdocs.pm/phoenix/js/

declare module 'phoenix' {
  declare class Push {
    constructor(
      channel: Channel,
      event: string,
      payload: ?Object,
      timeout: number
    ): Push;
    receive(status: string, callback: Function): Push;
    resend(timeout: number): void;
    send(): void;
  }

  declare class Channel {
    topic: string;

    constructor(
      topic: string,
      params: ?(Object | Function),
      socket: Socket
    ): Channel;
    join(timeout?: number): Push;
    leave(timeout?: number): Push;
    onClose(callback: Function): void;
    onError(callback: Function): void;
    onMessage(event: string, payload: Object, ref: number): Object;
    off(event: string, ref: number): void;
    on(event: string, callback: Function): number;
    push(event: string, payload: Object, timeout?: number): Push;
  }

  declare type SocketConfig = {
    decode?: Function,
    encode?: Function,
    heartbeatIntervalMs?: number,
    logger?: Function,
    longpollerTimeout?: number,
    reconnectAfterMs?: Function,
    timeout?: number,
    transport?: string,
    ...
  };

  declare class Socket {
    constructor(endPoint: string, options?: SocketConfig): Socket;
    channel(topic: string, chanParams?: Object): Channel;
    connect(): void;
    connectionState(): string;
    disconnect(callback: Function, code: number, reason: string): void;
    endPointURL(): string;
    hasLogger(): boolean;
    isConnected(): boolean;
    log(kind: string, msg: string, data: Object): void;
    makeRef(): string;
    onClose(callback: Function): void;
    onError(callback: Function): void;
    onMessage(callback: Function): void;
    onOpen(callback: Function): void;
    protocol(): string;
    push(data: Object): void;
    remove(channel: Channel): void;
  }

  declare type PresenceOpts = { events?: Object, ... };

  declare class Presence {
    static list(presences: Array<Presence>, chooser: Function): Array<Presence>;
    static syncDiff(
      currentState: Object,
      joinsLeaves: {
        joins: Array<Presence>,
        leaves: Array<Presence>,
        ...
      },
      onJoin?: Function,
      onLeave?: Function
    ): Object;
    static syncState(
      currentState: Object,
      newState: Object,
      onJoin?: Function,
      onLeave?: Function
    ): Object;

    constructor(channel: Channel, opts?: PresenceOpts): Presence;
    list(chooser?: Function): Array<Presence>;
    onJoin(callback: Function): void;
    onLeave(callback: Function): void;
    onSync(callback: Function): void;
  }

  declare class LongPoll {
    constructor(endPoint: string): LongPoll;
    endpointURL(): string;
    poll(): void;
    send(body: string): void;
  }

  declare type Phoenix = {
    Channel: typeof Channel,
    LongPoll: typeof LongPoll,
    Presence: typeof Presence,
    Socket: typeof Socket,
    ...
  };

  declare module.exports: Phoenix;
}
