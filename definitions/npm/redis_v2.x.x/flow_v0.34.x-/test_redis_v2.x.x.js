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

client.set('some-key', 'Some value');
client.set('some-key', 'Some value', (error) => {
  console.log('Error?', error);
});
// $ExpectError
client.set('some-key');
// $ExpectError
client.set('some-key', { foo: 'bar' });

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
// $EXpectError
client.lpush("key");
// $EXpectError
client.lpush("key", { foo: 'bar' });
