import compression from 'compression';

compression();

compression({
  chunkSize: 16384,
  filter: (req, res) => true,
  flush: 0,
  finishFlush: 4,
  level: 6,
  memLevel: 8,
  strategy: 0,
  threshold: 1024,
  windowBits: 15,
});

// $ExpectError
compression({ babababa: '1' });
