// @flow
import Redis from 'ioredis';

new Redis();       // Connect to 127.0.0.1:6379
new Redis(6380);   // 127.0.0.1:6380
new Redis(6379, '192.168.1.1');        // 192.168.1.1:6379
new Redis('/tmp/redis.sock');
const redisClient = new Redis({
  port: 6379,          // Redis port
  host: '127.0.0.1',   // Redis host
  family: 4,           // 4 (IPv4) or 6 (IPv6)
  password: 'auth',
  db: 0
});

new Redis({
  // $ExpectError
  port: '6379',        // Redis port (should be number)
  host: '127.0.0.1',   // Redis host
});

const promise: Promise<string> = redisClient.get('foo');

// $ExpectError number. This type is incompatible with string
const promise: Promise<string> = redisClient.get(1234);

const cluster = new Redis.Cluster([
  {
    port: 6379,
    host: '127.0.0.1'
  }
],
{
  enableOfflineQueue: true,
  enableReadyCheck: true,
  scaleReads: 'all',
  retryDelayOnFailover: 1000
})

new Redis.Cluster([], {scaleReads: 'slave'});
// $ExpectError
new Redis.Cluster([], {scaleReads: 'slaves'});
