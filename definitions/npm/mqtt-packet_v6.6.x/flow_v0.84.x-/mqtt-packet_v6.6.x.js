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

  declare export type IConnectPacket = {|
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
      payload: Buffer,
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

  declare export type IPublishPacket = {|
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

  declare export type IConnackPacket = {|
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

  declare export type ISubscription = {|
    topic: string,
    qos: QoS,
    nl?: boolean,
    rap?: boolean,
    rh?: number,
  |};

  declare export type ISubscribePacket = {|
    ...CommonPacketFields,
    cmd: 'subscribe',
    subscriptions: ISubscription[],
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type ISubackPacket = {|
    ...CommonPacketFields,
    cmd: 'suback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
    granted: number[] | { ... }[],
  |};

  declare export type IUnsubscribePacket = {|
    ...CommonPacketFields,
    cmd: 'unsubscribe',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
    unsubscriptions: string[],
  |};

  declare export type IUnsubackPacket = {|
    ...CommonPacketFields,
    cmd: 'unsuback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type IPubackPacket = {|
    ...CommonPacketFields,
    cmd: 'puback',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type IPubcompPacket = {|
    ...CommonPacketFields,
    cmd: 'pubcomp',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type IPubrelPacket = {|
    ...CommonPacketFields,
    cmd: 'pubrel',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type IPubrecPacket = {|
    ...CommonPacketFields,
    cmd: 'pubrec',
    properties?: {|
      reasonString?: string,
      userProperties?: { ... },
    |},
  |};

  declare export type IPingreqPacket = {|
    ...CommonPacketFields,
    cmd: 'pingreq',
  |};

  declare export type IPingrespPacket = {|
    ...CommonPacketFields,
    cmd: 'pingresp',
  |};

  declare export type IDisconnectPacket = {|
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
    | IConnectPacket
    | IPublishPacket
    | IConnackPacket
    | ISubscribePacket
    | ISubackPacket
    | IUnsubscribePacket
    | IUnsubackPacket
    | IPubackPacket
    | IPubcompPacket
    | IPubrelPacket
    | IPingreqPacket
    | IPingrespPacket
    | IDisconnectPacket
    | IPubrecPacket;

  declare export type ParserOptions = {
    protocolVersion?: ProtocolVersion,
    ...
  };

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
