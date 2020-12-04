import EventEmitter from 'events';

declare class TypedEventEmitter<Events> extends EventEmitter {
  addListener<Event: $Keys<Events>>(
    event: Event,
    listener: $ElementType<Events, Event>
  ): this;
  emit: <Event: $Keys<Events>>(
    event: Event,
    ...$Call<<A>(...args: A) => A, $ElementType<Events, Event>>
  ) => boolean;
  eventNames(): Array<$Keys<Events>>;
  listeners(event: $Keys<Events>): Array<Function>;
  listenerCount(event: $Keys<Events>): number;
  on<Event: $Keys<Events>>(
    event: Event,
    listener: $ElementType<Events, Event>
  ): this;
  once<Event: $Keys<Events>>(
    event: Event,
    listener: $ElementType<Events, Event>
  ): this;
  prependListener<Event: $Keys<Events>>(
    event: Event,
    listener: $ElementType<Events, Event>
  ): this;
  prependOnceListener<Event: $Keys<Events>>(
    event: Event,
    listener: $ElementType<Events, Event>
  ): this;
  removeAllListeners(event?: $Keys<Events>): this;
  removeListener(event: $Keys<Events>, listener: Function): this;
  setMaxListeners(n: number): this;
  getMaxListeners(): number;
}

declare module 'mqtt-packet' {
  declare export type QoS = 0 | 1 | 2;

  declare export type ProtocolVersion = 3 | 4 | 5;

  declare export type PacketCmd =
    | 'connack'
    | 'connect'
    | 'disconnect'
    | 'pingreq'
    | 'pingresp'
    | 'puback'
    | 'pubcomp'
    | 'publish'
    | 'pubrel'
    | 'pubrec'
    | 'suback'
    | 'subscribe'
    | 'unsuback'
    | 'unsubscribe';

  declare type CommonPacketFields = {|
    messageId?: number,
    length?: number,
  |};

  declare export type IPacket = {
    ...CommonPacketFields,
    cmd: PacketCmd,
    ...
  };

  declare export type ConnectPacket = {|
    ...CommonPacketFields,
    cmd: 'connect',
    clientId: string,
    protocolVersion?: ProtocolVersion,
    protocolId?: 'MQTT' | 'MQIsdp',
    clean?: boolean,
    keepalive?: number,
    username?: string,
    password?: Buffer,
    will?: {|
      topic: string,
      payload: string | Buffer,
      qos?: QoS,
      retain?: boolean,
      properties?: {|
        willDelayInterval?: number,
        payloadFormatIndicator?: number,
        messageExpiryInterval?: number,
        contentType?: string,
        responseTopic?: string,
        correlationData?: Buffer,
        userProperties?: { ... },
      |},
    |},
    properties?: {|
      sessionExpiryInterval?: number,
      receiveMaximum?: number,
      maximumPacketSize?: number,
      topicAliasMaximum?: number,
      requestResponseInformation?: boolean,
      requestProblemInformation?: boolean,
      userProperties?: { ... },
      authenticationMethod?: string,
      authenticationData?: Buffer,
    |},
  |};

  declare export type PublishPacket = {|
    ...CommonPacketFields,
    cmd: 'publish',
    qos: QoS,
    dup: boolean,
    retain: boolean,
    topic: string,
    payload: string | Buffer,
    properties?: {|
      payloadFormatIndicator?: boolean,
      messageExpiryInterval?: number,
      topicAlias?: number,
      responseTopic?: string,
      correlationData?: Buffer,
      userProperties?: { ... },
      subscriptionIdentifier?: number,
      contentType?: string,
    |},
  |};

  declare export type ConnackPacket = {|
    ...CommonPacketFields,
    cmd: 'connack',
    returnCode: number,
    sessionPresent: boolean,
    properties?: {|
      sessionExpiryInterval?: number,
      receiveMaximum?: number,
      maximumQoS?: number,
      retainAvailable?: boolean,
      maximumPacketSize?: number,
      assignedClientIdentifier?: string,
      topicAliasMaximum?: number,
      reasonString?: string,
      userProperties?: { ... },
      wildcardSubscriptionAvailable?: boolean,
      subscriptionIdentifiersAvailable?: boolean,
      sharedSubscriptionAvailable?: boolean,
      serverKeepAlive?: number,
      responseInformation?: string,
      serverReference?: string,
      authenticationMethod?: string,
      authenticationData?: Buffer,
    |},
  |};

  declare export type Subscription = {|
    topic: string,
    qos: QoS,
    nl?: boolean,
    rap?: boolean,
    rh?: number,
  |};

  declare export type SubscribePacket = {|
    ...CommonPacketFields,
    cmd: 'subscribe',
    subscriptions: Subscription[],
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type SubackPacket = {|
    ...CommonPacketFields,
    cmd: 'suback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
    granted: number[] | { ... }[],
  |};

  declare export type UnsubscribePacket = {|
    ...CommonPacketFields,
    cmd: 'unsubscribe',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
    unsubscriptions: string[],
  |};

  declare export type UnsubackPacket = {|
    ...CommonPacketFields,
    cmd: 'unsuback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type PubackPacket = {|
    ...CommonPacketFields,
    cmd: 'puback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type PubcompPacket = {|
    ...CommonPacketFields,
    cmd: 'pubcomp',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type PubrelPacket = {|
    ...CommonPacketFields,
    cmd: 'pubrel',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type PubrecPacket = {|
    ...CommonPacketFields,
    cmd: 'pubrec',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type PingreqPacket = {|
    ...CommonPacketFields,
    cmd: 'pingreq',
  |};

  declare export type PingrespPacket = {|
    ...CommonPacketFields,
    cmd: 'pingresp',
  |};

  declare export type DisconnectPacket = {|
    ...CommonPacketFields,
    cmd: 'disconnect',
    properties?: {|
      sessionExpiryInterval?: number,
      reasonString?: string,
      userProperties?: { ... },
      serverReference?: string,
    |},
  |};

  declare export type Packet =
    | ConnectPacket
    | PublishPacket
    | ConnackPacket
    | SubscribePacket
    | SubackPacket
    | UnsubscribePacket
    | UnsubackPacket
    | PubackPacket
    | PubcompPacket
    | PubrelPacket
    | PingreqPacket
    | PingrespPacket
    | DisconnectPacket
    | PubrecPacket;

  declare export type ParserOptions = {
    protocolVersion?: ProtocolVersion,
    ...
  };

  declare type ParserEvents = {|
    packet: (packet: Packet) => mixed,
    error: (error: Error) => mixed,
  |};

  declare export class Parser extends EventEmitter {
    on(event: 'packet', callback: (packet: Packet) => void): this;
    once(event: 'packet', callback: (packet: Packet) => void): this;
    on(event: 'error', callback: (error: any) => void): this;
    once(event: 'error', callback: (error: any) => void): this;

    parse(buffer: Buffer): number;
  }

  declare export function parser(opts?: ParserOptions): Parser;

  declare export type GenerateOptions = {
    protocolVersion?: ProtocolVersion,
    properties?: {
      maximumPacketSize?: number,
      ...
    },
    ...
  };

  declare export function generate(packet: Packet, opts?: { ... }): Buffer;

  declare export var writeToStream: {|
    (object: Packet, stream: WritableStream, opts?: { ... }): void,
    cacheNumbers: boolean,
  |};
}
