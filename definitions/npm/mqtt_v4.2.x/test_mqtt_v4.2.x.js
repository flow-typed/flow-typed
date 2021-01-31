import { describe, it } from 'flow-typed-test';
import {
  Store,
  Client,
  connect,
  type QoS,
  type Packet,
  type ConnectPacket,
  type ConnackPacket,
  type SubscribePacket,
  type SubscriptionGrant,
} from 'mqtt';

describe('mqtt', () => {
  it('test all types', () => {
    const store = new Store({ clean: false });
    // $FlowFixMe[incompatible-call]
    store.put({});
    store.put({
      cmd: 'subscribe',
      subscriptions: [{ topic: 'foo/bar', qos: 1 }],
    });
    store.createStream().on('data', (chunk: Buffer | string) => {});

    const client: Client = connect(
      'mqtt://localhost:1883',
      {
        username: 'user',
        password: 'pass',
        servers: [
          {
            host: 'somehost',
            port: 1883,
            protocol: 'mqtt',
          },
        ],
        resubscribe: false,
        will: {
          topic: 'badDisconnect',
          payload: '',
          qos: 1,
          retain: false,
        },
        properties: {
          sessionExpiryInterval: 60000,
          userProperties: { foo: 'bar' },
        },
      }
    );

    const packet: ConnectPacket = {
      cmd: 'connect',
      clientId: 'foo',
      protocolVersion: 5,
      protocolId: 'MQTT',
      username: 'user',
      will: {
        topic: 'some/topic',
        payload: Buffer.alloc(5),
        qos: 1,
        retain: true,
        properties: {
          willDelayInterval: 0,
          payloadFormatIndicator: 0,
          messageExpiryInterval: 1000,
          contentType: 'foo',
          responseTopic: 'response/topic',
          correlationData: Buffer.alloc(5),
          userProperties: {},
        },
      },
    };

    const packet2: ConnectPacket = {
      // $FlowFixMe[incompatible-type]
      cmd: 'connecttttt',
      clientId: 'foo',
      protocolVersion: 5,
      protocolId: 'MQTT',
      username: 'user',
    };

    // $FlowFixMe[incompatible-call]
    client.on('error', (packet: number) => {});
    client.on('error', (error: Error) => {});
    client.on('connect', (packet: ConnackPacket) => {});
    // $FlowFixMe[incompatible-call]
    // $FlowFixMe[prop-missing]
    client.on('connect', (packet: ConnectPacket) => {});
    // $FlowFixMe[prop-missing]
    client.on('blah', () => {});
    client.once('message', (message: string | Buffer) => {});
    client.once('message', (message: string | Buffer) => {});

    client.publish('foo/bar', 'baz');
    client.publish('foo/bar', Buffer.alloc(0));
    client.publish('foo/bar', 'baz', { qos: 1 });
    client.publish(
      'foo/bar',
      'baz',
      { qos: 1 },
      (error?: Error, packet?: Packet) => {}
    );
    client.publish('foo/bar', 'baz', (error?: Error, packet?: Packet) => {});

    // $FlowFixMe[incompatible-call]
    client.publish(2, 'baz');
    // $FlowFixMe[incompatible-call]
    client.publish('foo/bar', 2);
    // $FlowFixMe[incompatible-call]
    client.publish('foo/bar', 'baz', 'qux');
    // $FlowFixMe[incompatible-call]
    client.publish('foo/bar', 'baz', (packet?: Packet) => {});
    // $FlowFixMe[incompatible-call]
    client.publish('foo/bar', 'baz', { blah: 1 });
    // $FlowFixMe[incompatible-call]
    client.publish('foo/bar', 'baz', { qos: 1 }, (packet?: Packet) => {});

    client.subscribe('topic');
    client.subscribe(
      'topic',
      { qos: 1 },
      (error: ?Error, granted?: SubscriptionGrant[]) => {}
    );
    client.subscribe(
      { topic: 0, topic2: { qos: 1 } },
      (error: ?Error, granted?: SubscriptionGrant[]) => {}
    );

    // $FlowFixMe[incompatible-call]
    client.subscribe(2);
    // $FlowFixMe[incompatible-call]
    client.subscribe({ topic: 1000 });
    // $FlowFixMe[incompatible-call]
    client.subscribe({ topic: {} });
    // $FlowFixMe[incompatible-call]
    client.subscribe('topic', {});
    // $FlowFixMe[incompatible-call]
    client.subscribe(
      'topic',
      { qos: 1 },
      (granted?: SubscriptionGrant[]) => {}
    );

    client.unsubscribe('topic');
    client.unsubscribe(['topic']);
    client.unsubscribe(['topic'], { properties: { reasonString: 'blah' } });
    client.unsubscribe(
      ['topic'],
      { properties: { reasonString: 'blah' } },
      (error?: Error, packet?: Packet) => {}
    );
    client.unsubscribe('topic', (error?: Error, packet?: Packet) => {});

    // $FlowFixMe[incompatible-call]
    client.unsubscribe(1);
    // $FlowFixMe[incompatible-call]
    client.unsubscribe({ topic: 1 });
    // $FlowFixMe[incompatible-call]
    client.unsubscribe('topic', { foo: 'bar' });
    // $FlowFixMe[incompatible-call]
    client.unsubscribe('topic', (packet?: Packet) => {});
    // $FlowFixMe[incompatible-call]
    client.unsubscribe('topic', 'blah');

    client.end();
    client.end(true);
    client.end(true, { properties: { sessionExpiryInterval: 60000 } });
    client.end(
      true,
      { properties: { sessionExpiryInterval: 60000 } },
      () => {}
    );
    client.end(true, () => {});
    client.end({ properties: { sessionExpiryInterval: 60000 } });
    client.end({ properties: { sessionExpiryInterval: 60000 } }, () => {});
    client.end(() => {});

    // $FlowFixMe[incompatible-call]
    client.end('force');
    // $FlowFixMe[incompatible-call]
    client.end({ foo: 'bar' });
    // $FlowFixMe[incompatible-call]
    client.end(true, { foo: 'bar' });

    client.removeOutgoingMessage(client.getLastMessageId());

    client.handleMessage(packet, (error?: Error, packet?: Packet) => {});
  });
});
