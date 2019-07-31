// @flow
import { describe, it } from 'flow-typed-test';
const redis = require("redis");

const options = {
  host: 'localhost',
  port: 6379,
  string_numbers: false,
  detect_buffers: true,
  socket_keepalive: true,
  enable_offline_queue: true,
}

describe('client', () => {
  const client: redis.RedisClient = redis.createClient();
  describe('createClient', () => {
    redis.createClient(6379)
    redis.createClient(6379, options)
    redis.createClient(6379, '127.0.0.1')
    redis.createClient(6379, '127.0.0.1', options)
    redis.createClient('redis://localhost:6739')
    redis.createClient('redis://localhost:6739', options)
    redis.createClient(options)
  })
  describe('get', () => {
    client.get('some-key', (error, value) => {
      if (error !== null) {
        console.error(error)
        return;
      }
      console.log(value);
    });
  })
  describe('set', () => {

    client.set('some-key', 'Some value');
    client.set('some-key', 'Some value', (error: ?Error, res: 'OK') => {});
    // $ExpectError
    client.set('some-key');
    // $ExpectError
    client.set('some-key', { foo: 'bar' });

    // With condition

    client.set('some-key', 'some value', 'NX')

    client.set('some-key', 'some value', 'XX')

    // With expire

    client.set('some-key', 'some value', 'EX', 1)

    client.set('some-key', 'some value', 'PX', 1000)

    // With condition before expire

    client.set('some-key', 'some value', 'NX', 'EX', 1)

    client.set('some-key', 'some value', 'NX', 'PX', 1000)

    client.set('some-key', 'some value', 'XX', 'EX', 1)

    client.set('some-key', 'some value', 'XX', 'PX', 1000)

    // With condition after expire

    client.set('some-key', 'some value', 'EX', 1, 'NX')

    client.set('some-key', 'some value', 'PX', 1000, 'NX')

    client.set('some-key', 'some value', 'EX', 1, 'XX')

    client.set('some-key', 'some value', 'PX', 1000, 'XX')


    // With condition and callback

    client.set('some-key', 'some value', 'NX', (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'XX', (err: ?Error, res: ?'OK') => {})

    // With expire and callback

    client.set('some-key', 'some value', 'EX', 1, (err: ?Error, res: 'OK') => {})

    client.set('some-key', 'some value', 'PX', 1000, (err: ?Error, res: 'OK') => {})

    // With condition before expire and callback

    client.set('some-key', 'some value', 'NX', 'EX', 1, (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'NX', 'PX', 1000, (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'XX', 'EX', 1, (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'XX', 'PX', 1000, (err: ?Error, res: ?'OK') => {})

    // With condition after expire and callback

    client.set('some-key', 'some value', 'EX', 1, 'NX', (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'PX', 1000, 'NX', (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'EX', 1, 'XX', (err: ?Error, res: ?'OK') => {})

    client.set('some-key', 'some value', 'PX', 1000, 'XX', (err: ?Error, res: ?'OK') => {})



    // $ExpectError
    client.set('some-key', 'some value', 'NX', 'EX', 1, 'NX')

    // $ExpectError
    client.set('some-key', 'some value', 'NX', 'PX', 1000, 'NX')

    // $ExpectError
    client.set('some-key', 'some value', 'EX')

    // $ExpectError
    client.set('some-key', 'some value', 'PX')

  })
  describe('setex', () => {
    client.setex('some-key', 12345, 'value');
    client.setex('some-key', 12345, 'value', (error: ?Error, res: 'OK') => {});
    // $ExpectError
    client.setx('somekey', 'value');
  })
  describe('ttl', () => {
    client.ttl('key', (error: ?Error, ttl: number) => {});
    // $ExpectError
    client.ttl('key', (error: ?Error, ttl: string) => {});
  })
  describe('del', () => {
    client.del(['key1', 'key2', 'key3']);
    client.del(['key1', 'key2', 'key3'], (error: ?Error, numRemoved: number) => {});
    // $ExpectError
    client.del(['key1', 'key2', 'key3'], (error: ?Error, numRemoved: string) => {});

    client.del('key1')
    client.del('key1', 'key2')
    client.del('key1', 'key2', 'key3')

    client.del('key1', (error: ?Error, numRemoved: number) => {})
    client.del('key1', 'key2', (error: ?Error, numRemoved: number) => {})
    client.del('key1', 'key2', 'key3', (error: ?Error, numRemoved: number) => {})
  })
  describe('hmset', () => {
    client.hmset("some-key", { key1: "value1" }, err =>
      console.log("hmset error:", err)
    );
  })
  describe('rpush', () => {
    client.rpush("some-list", "some-value", err =>
      console.log("rpush error:", err)
    );
  })
  describe('lpush', () => {
    client.lpush("key", "value", (err, newLength: number) => {
      if (err) {
        console.log(`lpush error: ${err.message}`);
      }
      if (newLength) console.log(`New length: ${newLength}`);
    });
    client.lpush("key", "value");
    // $ExpectError
    client.lpush("key");
    // $ExpectError
    client.lpush("key", { foo: 'bar' });
  })
  describe('lrange', () => {
    client.lrange("key", 0, 5, (error, entries: Array<string>) => {
      if (error !== null) {
        console.error(error);
        return;
      }
      if (entries) console.log(entries.join(','));
    });
  })
  describe('llen', () => {
    client.llen('key', (error, length: number) => {
      if (error !== null) {
        console.error(error);
        return;
      }
      if (length) console.log(length);
    });
  })
  describe('mget', () => {
    // $ExpectError
    client.mget(["key1", "key2"], (error, entries: ?Array<string>) => {})
    client.mget(["key1", "key2"], (error, entries: Array<?string>) => {
      if (error === null) {
        console.log('Error!');
        return;
      }
      if (entries) console.log(entries.join(','));
    });
  })
  describe('mset', () => {
    client.mset(["key1", "value1", "key2", "value"], (error: ?Error, res: 'OK') => {});
    client.mset(["key1", "value1", "key2", "value"]);
    // $ExpectError
    client.mset([
      {
        key: 'key1',
        value: 'value1'
      }
    ], (error) => {
      if (error !== null) console.error(error);
    });
  })
  describe('flushall', () => {
    client.flushall();
    client.flushall((error: ?Error, res: 'OK') => {});
  })
  describe('hgetall', () => {
    client.hgetall("key", (error: ?Error, result: {[key: string]: string}) => {})
    // $ExpectError
    client.hgetall("key", "bad extra argument in past type defs", (error: ?Error, result: {[key: string]: string}) => {})
    // $ExpectError
    client.hgetall("key", "bad extra argument in past type defs", (error: ?Error, result: ?{[key: string]: string}) => {})
  })
  describe('hdel', () => {
    client.hdel('topic', 'key', (error: ?Error, numRemoved: number) => {});
    // $ExpectError
    client.hdel('topic', 'key', (error: ?Error, numRemoved: string) => {});
    // $ExpectError
    client.hdel('topic', 'key', (error: ?Error, res: string) => {});
  })
  describe('rpoplpush', () => {
    client.rpoplpush('source-key', 'destination-key', (error: ?Error, result: string) => {});
    // $ExpectError
    client.rpoplpush('source-key', 'destination-key', (error: ?Error, result: number) => {});
  })
  describe('lrem', () => {
    client.lrem('my-key', 5, 'value', (error: ?Error, count: number) => {});
    // $ExpectError
    client.lrem('my-key', 5, (error: ?Error, count: number) => {});
    // $ExpectError
    client.lrem('my-key', 5, 'value', (error: ?Error, result: string) => {});
  })
  describe('publish', () => {
    client.publish('topic', 'value', (error: ?Error, numReceivers: number) => {});
    // $ExpectError
    client.publish('topic', 'value', (error: ?Error, numReceivers: string) => {});
  })
})
