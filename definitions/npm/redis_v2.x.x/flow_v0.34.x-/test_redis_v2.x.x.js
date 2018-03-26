// @flow

const redis = require("redis");

const client: redis.RedisClient = redis.createClient();
const options = {
  host: 'localhost',
  port: 6379,
  string_numbers: false,
  detect_buffers: true,
  socket_keepalive: true,
  enable_offline_queue: true,
}
redis.createClient(6379)
redis.createClient(6379, options)
redis.createClient(6379, '127.0.0.1')
redis.createClient(6379, '127.0.0.1', options)
redis.createClient('redis://localhost:6739')
redis.createClient('redis://localhost:6739', options)
redis.createClient(options)

client.get('some-key', (error, value) => {
  if (error !== null) {
    console.error(error)
    return;
  }
  console.log(value);
});

client.set('some-key', 'Some value');
client.set('some-key', 'Some value', (error: ?Error, res: 'OK') => {});
// $ExpectError
client.set('some-key');
// $ExpectError
client.set('some-key', { foo: 'bar' });

client.setex('some-key', 12345, 'value');
client.setex('some-key', 12345, 'value', (error: ?Error, res: 'OK') => {});
// $ExpectError
client.setx('somekey', 'value');

client.ttl('key', (error: ?Error, ttl: number) => {});
// $ExpectError
client.ttl('key', (error: ?Error, ttl: string) => {});

client.del(['key1', 'key2', 'key3']);
client.del(['key1', 'key2', 'key3'], (error: ?Error, numRemoved: number) => {});
// $ExpectError
client.del(['key1', 'key2', 'key3'], (error: ?Error, numRemoved: string) => {});

client.hmset("some-key", { key1: "value1" }, err =>
  console.log("hmset error:", err)
);
client.rpush("some-list", "some-value", err =>
  console.log("rpush error:", err)
);

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

client.lrange("key", 0, 5, (error, entries: Array<string>) => {
  if (error !== null) {
    console.error(error);
    return;
  }
  if (entries) console.log(entries.join(','));
});

client.llen('key', (error, length: number) => {
  if (error !== null) {
    console.error(error);
    return;
  }
  if (length) console.log(length);
});

// $ExpectError
client.mget(["key1", "key2"], (error, entries: ?Array<string>) => {})
client.mget(["key1", "key2"], (error, entries: Array<?string>) => {
  if (error === null) {
    console.log('Error!');
    return;
  }
  if (entries) console.log(entries.join(','));
});

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

client.flushall();
client.flushall((error: ?Error, res: 'OK') => {});

client.hgetall("key", (error: ?Error, result: {[key: string]: string}) => {})
// $ExpectError
client.hgetall("key", "bad extra argument in past type defs", (error: ?Error, result: {[key: string]: string}) => {})

client.hdel('topic', 'key', (error: ?Error, numRemoved: number) => {});
// $ExpectError
client.hdel('topic', 'key', (error: ?Error, numRemoved: string) => {});
// $ExpectError
client.hdel('topic', 'key', (error: ?Error, res: string) => {});

client.rpoplpush('source-key', 'destination-key', (error: ?Error, result: string) => {});
// $ExpectError
client.rpoplpush('source-key', 'destination-key', (error: ?Error, result: number) => {});

// $ExpectError
client.hgetall("key", "bad extra argument in past type defs", (error: ?Error, result: ?{[key: string]: string}) => {})


client.lrem('my-key', 5, 'value', (error: ?Error, count: number) => {});
// $ExpectError
client.lrem('my-key', 5, (error: ?Error, count: number) => {});
// $ExpectError
client.lrem('my-key', 5, 'value', (error: ?Error, result: string) => {});

client.publish('topic', 'value', (error: ?Error, numReceivers: number) => {});
// $ExpectError
client.publish('topic', 'value', (error: ?Error, numReceivers: string) => {});
