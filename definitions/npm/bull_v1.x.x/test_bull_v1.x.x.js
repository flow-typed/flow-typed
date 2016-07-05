import Queue from 'bull';

new Queue(
  'my_queue',
  9999,
  'localhost',
);
Queue(
  'my_queue',
  9999,
  'localhost',
);
new Queue(
  'my_queue',
  4444,
  'localhost',
  { redisOption: true },
).process((job) => {
  return Promise.resolve();
});
Queue(
  'my_queue',
  4444,
  'localhost',
  { redisOption: true },
).process((job, done) => {
  done();
});

// $ExpectError
Queue();
Queue(1);
Queue('my_queue', 9999, 'localhost')
  .process((job, done) => {
    Promise.resolve();
  });
