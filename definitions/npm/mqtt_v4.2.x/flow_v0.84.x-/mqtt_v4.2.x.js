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
}

declare module 'mqtt/lib/store' {
  import type { Packet } from 'mqtt-packet';
  import type { Readable } from 'stream';

  declare export type StoreOptions = {|
    /**
     * true, clear _inflights at close
     */
    clean?: boolean,
  |};

  /**
   * In-memory implementation of the message store
   * This can actually be saved into files.
   *
   */
  declare export class Store {
    /**
     * Store constructor
     *
     * @param {{ ... }} [options] - store options
     */
    constructor(options: StoreOptions): void;

    /**
     * Adds a packet to the store, a packet is
     * anything that has a messageId property.
     *
     */
    put(packet: Packet, cb?: () => mixed): this;

    /**
     * Creates a stream with all the packets in the store
     *
     */
    createStream(): Readable;

    /**
     * deletes a packet from the store.
     */
    del(packet: Packet, cb: (error: ?Error, packet?: Packet) => mixed): this;

    /**
     * get a packet from the store.
     */
    get(packet: Packet, cb: (error: ?Error, packet?: Packet) => mixed): this;

    /**
     * Close the store
     */
    close(cb?: () => mixed): void;
  }
}

declare module 'mqtt/lib/client' {
  import typeof { Store } from 'mqtt/lib/store';
  import type {
    QoS,
    ConnackPacket,
    DisconnectPacket,
    Packet,
  } from 'mqtt-packet';

  declare export type ClientOptions = {|
    /**
     * optional private keys in PEM format
     */
    key?: string | string[] | Buffer | Buffer[] | { ... }[],
    /**
     * optional cert chains in PEM format
     */
    cert?: string | string[] | Buffer | Buffer[],
    /**
     * Optionally override the trusted CA certificates in PEM format
     */
    ca?: string | string[] | Buffer | Buffer[],
    rejectUnauthorized?: boolean,
    port?: number, // port is made into a number subsequently
    host?: string, // host does NOT include port
    hostname?: string,
    path?: string,
    protocol?: 'wss' | 'ws' | 'mqtt' | 'mqtts' | 'tcp' | 'ssl' | 'wx' | 'wxs',

    wsOptions?: { ... },
    /**
     *  10 seconds, set to 0 to disable
     */
    keepalive?: number,
    /**
     * 'mqttjs_' + Math.random().toString(16).substr(2, 8)
     */
    clientId?: string,
    /**
     * 'MQTT'
     */
    protocolId?: string,
    /**
     * 4
     */
    protocolVersion?: number,
    /**
     * true, set to false to receive QoS 1 and 2 messages while offline
     */
    clean?: boolean,
    /**
     * 1000 milliseconds, interval between two reconnections
     */
    reconnectPeriod?: number,
    /**
     * 30 * 1000 milliseconds, time to wait before a CONNACK is received
     */
    connectTimeout?: number,
    /**
     * the username required by your broker, if any
     */
    username?: string,
    /**
     * the password required by your broker, if any
     */
    password?: string,
    /**
     * a Store for the incoming packets
     */
    incomingStore?: Store,
    /**
     * a Store for the outgoing packets
     */
    outgoingStore?: Store,
    queueQoSZero?: boolean,
    reschedulePings?: boolean,
    servers?: $ReadOnlyArray<{|
      host: string,
      port: number,
      protocol?: 'wss' | 'ws' | 'mqtt' | 'mqtts' | 'tcp' | 'ssl' | 'wx' | 'wxs',
    |}>,
    /**
     * true, set to false to disable re-subscribe functionality
     */
    resubscribe?: boolean,
    /**
     * a message that will sent by the broker automatically when the client disconnect badly.
     */
    will?: {|
      /**
       * the topic to publish
       */
      topic: string,
      /**
       * the message to publish
       */
      payload: Buffer | string,
      /**
       * the QoS
       */
      qos: QoS,
      /**
       * the retain flag
       */
      retain: boolean,
      /*
       *  properies object of will
       * */
      properties?: {|
        willDelayInterval?: number,
        payloadFormatIndicator?: boolean,
        messageExpiryInterval?: number,
        contentType?: string,
        responseTopic?: string,
        correlationData?: Buffer,
        userProperties?: { ... },
      |},
    |},
    transformWsUrl?: (
      url: string,
      options: ClientOptions,
      client: MqttClient
    ) => string,
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

  declare export type ClientPublishOptions = {|
    /**
     * the QoS
     */
    qos?: QoS,
    /**
     * the retain flag
     */
    retain?: boolean,
    /**
     * whether or not mark a message as duplicate
     */
    dup?: boolean,
    /*
     *  MQTT 5.0 properties object
     */
    properties?: {|
      payloadFormatIndicator?: number,
      messageExpiryInterval?: number,
      topicAlias?: string,
      responseTopic?: string,
      correlationData?: Buffer,
      userProperties?: { ... },
      subscriptionIdentifier?: number,
      contentType?: string,
    |},
    /**
     * callback called when message is put into `outgoingStore`
     */
    cbStorePut?: () => mixed,
  |};

  declare export type ClientSubscribeOptions = {|
    /**
     * the QoS
     */
    qos: QoS,
    /*
     * no local flag
     * */
    nl?: boolean,
    /*
     * Retain As Published flag
     * */
    rap?: boolean,
    /*
     * Retain Handling option
     * */
    rh?: number,
  |};
  declare export type ClientReconnectOptions = {|
    /**
     * a Store for the incoming packets
     */
    incomingStore?: Store,
    /**
     * a Store for the outgoing packets
     */
    outgoingStore?: Store,
  |};

  declare export type SubscriptionGrant = {|
    /**
     *  is a subscribed to topic
     */
    topic: string,
    /**
     *  is the granted qos level on it, may return 128 on error
     */
    qos: QoS | number,
    /*
     * no local flag
     * */
    nl?: boolean,
    /*
     * Retain As Published flag
     * */
    rap?: boolean,
    /*
     * Retain Handling option
     * */
    rh?: number,
  |};
  declare export type SubscriptionRequest = {|
    /**
     *  is a subscribed to topic
     */
    topic: string,
    /**
     *  is the granted qos level on it
     */
    qos: QoS,
    /*
     * no local flag
     * */
    nl?: boolean,
    /*
     * Retain As Published flag
     * */
    rap?: boolean,
    /*
     * Retain Handling option
     * */
    rh?: number,
  |};
  declare export type SubscriptionMap = {
    /**
     * object which has topic names as object keys and as value the options, like {'test1': {qos: 0}, 'test2': {qos: 2}}.
     */
    [topic: string]:
      | QoS
      | {|
          qos: QoS,
          nl?: boolean,
          rap?: boolean,
          rh?: number,
        |},
    ...,
  };

  declare export interface MqttStream extends EventEmitter {
    pipe(to: any): any;
    destroy(): any;
    end(): any;
  }

  declare export type OnConnectCallback = (packet: ConnackPacket) => mixed;
  declare export type OnReconnectCallback = () => mixed;
  declare export type OnOfflineCallback = () => mixed;
  declare export type OnDisconnectCallback = (
    packet: DisconnectPacket
  ) => mixed;
  declare export type ClientSubscribeCallback = (
    err: ?Error,
    granted?: SubscriptionGrant[]
  ) => mixed;
  declare export type OnMessageCallback = (
    topic: string,
    payload: Buffer | string,
    packet: Packet
  ) => mixed;
  declare export type OnPacketCallback = (packet: Packet) => mixed;
  declare export type OnErrorCallback = (error: Error) => mixed;
  declare export type PacketCallback = (
    error?: Error,
    packet?: Packet
  ) => mixed;
  declare export type CloseCallback = () => mixed;

  declare type MqttClientEvents = {|
    connect: OnConnectCallback,
    reconnect: OnReconnectCallback,
    offline: OnOfflineCallback,
    disconnect: OnDisconnectCallback,
    message: OnMessageCallback,
    close: CloseCallback,
    packetsend: OnPacketCallback,
    packetreceive: OnPacketCallback,
    error: OnErrorCallback,
  |};
  declare export class MqttClient extends TypedEventEmitter<MqttClientEvents> {
    +connected: boolean;
    +disconnecting: boolean;
    +disconnected: boolean;
    +reconnecting: boolean;
    +incomingStore: Store;
    +outgoingStore: Store;
    +options: ClientOptions;
    +queueQoSZero: boolean;

    /**
     * MqttClient constructor
     *
     * @param {Stream} stream - stream
     * @param {Object} [options] - connection options
     * (see Connection#connect)
     */
    constructor(
      streamBuilder: (client: MqttClient) => MqttStream,
      options: ClientOptions
    ): void;

    /**
     * publish - publish <message> to <topic>
     *
     * @param {String} topic - topic to publish to
     * @param {(String|Buffer)} message - message to publish
     *
     * @param {Object}    [opts] - publish options, includes:
     *   @param {Number}  [opts.qos] - qos level to publish on
     *   @param {Boolean} [opts.retain] - whether or not to retain the message
     *   @param {Function}[opts.cbStorePut] - function(){}
     *       called when message is put into `outgoingStore`
     *
     * @param {Function} [callback] - function(err){}
     *    called when publish succeeds or fails
     *
     * @returns {Client} this - for chaining
     * @api public
     *
     * @example client.publish('topic', 'message')
     * @example
     *     client.publish('topic', 'message', {qos: 1, retain: true})
     * @example client.publish('topic', 'message', console.log)
     */
    publish(
      topic: string,
      message: string | Buffer,
      opts: ClientPublishOptions,
      callback?: PacketCallback
    ): this;
    publish(
      topic: string,
      message: string | Buffer,
      callback?: PacketCallback
    ): this;

    /**
     * subscribe - subscribe to <topic>
     *
     * @param {String, Array, Object} topic - topic(s) to subscribe to, supports objects in the form {'topic': qos}
     * @param {Object} [opts] - optional subscription options, includes:
     * @param  {Number} [opts.qos] - subscribe qos level
     * @param {Function} [callback] - function(err, granted){} where:
     *    {Error} err - subscription error (none at the moment!)
     *    {Array} granted - array of {topic: 't', qos: 0}
     * @returns {MqttClient} this - for chaining
     * @api public
     * @example client.subscribe('topic')
     * @example client.subscribe('topic', {qos: 1})
     * @example client.subscribe({'topic': 0, 'topic2': 1}, console.log)
     * @example client.subscribe('topic', console.log)
     */
    subscribe(
      topic: string | string[] | SubscriptionMap,
      opts: ClientSubscribeOptions,
      callback?: ClientSubscribeCallback
    ): this;
    subscribe(
      topic: string | string[] | SubscriptionMap,
      callback?: ClientSubscribeCallback
    ): this;

    /**
     * unsubscribe - unsubscribe from topic(s)
     *
     * @param {String, Array} topic - topics to unsubscribe from
     * @param {Object} opts - opts of unsubscribe
     * @param {Function} [callback] - callback fired on unsuback
     * @returns {MqttClient} this - for chaining
     * @api public
     * @example client.unsubscribe('topic')
     * @example client.unsubscribe('topic', console.log)
     * @example client.unsubscribe('topic', opts, console.log)
     */
    unsubscribe(
      topic: string | string[],
      opts: {| properties?: $PropertyType<UnsubscribePacket, 'properties'> |},
      callback?: PacketCallback
    ): this;
    unsubscribe(topic: string | string[], callback?: PacketCallback): this;

    /**
     * end - close connection
     *
     * @returns {MqttClient} this - for chaining
     * @param {Boolean} force - do not wait for all in-flight messages to be acked
     * @param {Object} opts - added to the disconnect packet
     * @param {Function} cb - called when the client has been closed
     *
     * @api public
     */
    end(
      force?: boolean,
      opts?: {| properties?: $PropertyType<DisconnectPacket, 'properties'> |},
      cb?: CloseCallback
    ): this;
    end(
      opts?: {| properties?: $PropertyType<DisconnectPacket, 'properties'> |},
      cb?: CloseCallback
    ): this;
    end(force?: boolean, cb?: CloseCallback): this;
    end(cb?: CloseCallback): this;

    /**
     * removeOutgoingMessage - remove a message in outgoing store
     * the outgoing callback will be called withe Error('Message removed') if the message is removed
     *
     * @param {Number} mid - messageId to remove message
     * @returns {MqttClient} this - for chaining
     * @api public
     *
     * @example client.removeOutgoingMessage(client.getLastMessageId());
     */
    removeOutgoingMessage(mid: number): this;

    /**
     * reconnect - connect again using the same options as connect()
     *
     * @param {Object} [opts] - optional reconnect options, includes:
     *    {Store} incomingStore - a store for the incoming packets
     *    {Store} outgoingStore - a store for the outgoing packets
     *    if opts is not given, current stores are used
     *
     * @returns {MqttClient} this - for chaining
     *
     * @api public
     */
    reconnect(opts?: ClientReconnectOptions): this;

    /**
     * Handle messages with backpressure support, one at a time.
     * Override at will.
     *
     * @param packet packet the packet
     * @param callback callback call when finished
     * @api public
     */
    handleMessage: (packet: Packet, callback: PacketCallback) => void;

    /**
     * getLastMessageId
     */
    getLastMessageId(): number;
  }
}

declare module 'mqtt/lib/connect' {
  import type { ClientOptions, MqttClient } from 'mqtt/lib/client';
  /**
   * connect - connect to an MQTT broker.
   *
   * @param {String} [brokerUrl] - url of the broker, optional
   * @param {Object} opts - see MqttClient#constructor
   */
  declare export function connect(
    brokerUrl?: any,
    opts?: ClientOptions
  ): MqttClient;
}

declare module 'mqtt' {
  declare export * from 'mqtt/lib/client'
  declare export * from 'mqtt/lib/connect'
  declare export * from 'mqtt/lib/store'
  declare export { MqttClient as Client } from 'mqtt/lib/client';
  declare export {
    QoS,
    PacketCmd,
    IPacket,
    ConnectPacket,
    PublishPacket,
    ConnackPacket,
    Subscription,
    SubscribePacket,
    SubackPacket,
    UnsubscribePacket,
    UnsubackPacket,
    PubackPacket,
    PubcompPacket,
    PubrelPacket,
    PubrecPacket,
    PingreqPacket,
    PingrespPacket,
    DisconnectPacket,
    Packet,
  } from 'mqtt-packet';
}
