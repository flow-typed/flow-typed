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
client.set('some-key', 'Some value', (error) => {
  console.log('Error?', error);
});
// $ExpectError
client.set('some-key');
// $ExpectError
client.set('some-key', { foo: 'bar' });

client.setex('some-key', 12345, 'value');
client.setex('some-key', 12345, 'value', (error) => {
  if (error !== null) console.error(error);
});
// $ExpectError
client.setx('somekey', 'value');

client.del(['key1', 'key2', 'key3']);
client.del(['key1', 'key2', 'key3'], (error) => {
  if (error) console.error(error);
});

client.hmset("some-key", { key1: "value1" }, err =>
  console.log("hmset error:", err)
);
client.rpush("some-list", "some-value", err =>
  console.log("rpush error:", err)
);

client.lpush("key", "value", (err, newLength) => {
  if (err) {
    console.log(`lpush error: ${err.message}`);
  }
  console.log(`New length: ${newLength}`);
});
client.lpush("key", "value");
// $ExpectError
client.lpush("key");
// $ExpectError
client.lpush("key", { foo: 'bar' });

client.lrange("key", 0, 5, (error, entries) => {
  if (error !== null) {
    console.error(error);
    return;
  }
  console.log(entries.join(','));
});

client.llen('key', (error, length) => {
  if (error !== null) {
    console.error(error);
    return;
  }
  console.log(length);
});

client.mget(["key1", "key2"], (error, entries) => {
  if (error === null) {
    console.log('Error!');
    return;
  }
  console.log(entries.join(','));
});

client.mset(["key1", "value1", "key2", "value"], (error) => {
  if (error !== null) console.error(error);
});
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
client.flushall((error) => {
  if (error !== null) console.error(error);
});
