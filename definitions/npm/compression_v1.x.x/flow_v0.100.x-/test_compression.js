import { describe, it } from 'flow-typed-test';
import compression from 'compression';

describe('compression', () => {
  it('runs with no options', () => {
    compression();
  });

  it('runs with options', () => {
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
  });

  it('errors with extraneous options', () => {
    // $FlowExpectedError
    compression({ babababa: '1' });
  });
});
