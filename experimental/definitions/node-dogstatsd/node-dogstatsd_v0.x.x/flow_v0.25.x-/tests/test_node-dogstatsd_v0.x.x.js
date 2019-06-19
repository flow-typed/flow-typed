import { StatsD }  from 'node-dogstatsd';

const statsdConn = new StatsD('localhost', 8125);

statsdConn.increment('stat.statName', 1, ['tag:value']);
statsdConn.increment('stat.statName', 1);

// $ExpectError
statsdConn.increment(3, 1, ['tag:value']);

// $ExpectError
statsdConn.increment(3, 1, ['tag:value']);

// $ExpectError
statsdConn.decrement(3, 1, ['tag:value']);

// $ExpectError
statsdConn.decrementBy('stat.statName', 'invalidValue', ['tag:value']);
