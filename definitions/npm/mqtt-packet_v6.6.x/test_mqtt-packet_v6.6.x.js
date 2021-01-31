import { describe, it } from 'flow-typed-test';
import * as mqtt from 'mqtt-packet';

describe('mqtt-packet', () => {
  it('basic parser test', () => {
    const parser = mqtt.parser();

    parser.parse(Buffer.alloc(0));

    parser.on('packet', packet => {
      switch (packet.cmd) {
        case 'connack':
          break;
        case 'connect':
          const { clientId, protocolVersion, will } = packet;
          // $FlowFixMe[prop-missing]
          packet.qos;
          break;
        case 'disconnect':
          break;
        case 'pingreq':
          break;
        case 'pingresp':
          break;
        case 'puback':
          break;
        case 'pubcomp':
          break;
        case 'publish':
          const { qos, dup, retain } = packet;
          // $FlowFixMe[prop-missing]
          packet.clientId;
          break;
        case 'pubrel':
          break;
        case 'pubrec':
          break;
        case 'suback':
          break;
        case 'subscribe':
          break;
        case 'unsuback':
          break;
        case 'unsubscribe':
          break;
      }
    });
  });
  it('basic packet and generate tests', () => {
    const packet1: mqtt.IPacket = {
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
          userProperties: { foo: 'bar' },
        },
      },
    };

    const packet2: mqtt.Packet = {
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

    // $FlowFixMe[incompatible-type]
    const packet3: mqtt.Packet = {
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
          userProperties: [],
        },
      },
    };

    mqtt.generate({
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
          userProperties: { baz: 'qux' },
        },
      },
    });

    // $FlowFixMe[incompatible-call]
    mqtt.generate({
      cmd: 'publish',
      dup: false,
      retain: false,
      topic: 'foo/bar',
      payload: 'blah',
    });
  });
});
