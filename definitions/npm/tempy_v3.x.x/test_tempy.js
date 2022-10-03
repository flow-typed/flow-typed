// @flow

import { describe, it } from 'flow-typed-test';
import {
  temporaryFileTask,
  temporaryDirectory,
  temporaryDirectoryTask,
  temporaryWrite,
  temporaryWriteTask,
  temporaryWriteSync,
  rootTemporaryDirectory,
} from 'tempy';

describe('temporaryFileTask', () => {
  it('accepts arguments', () => {
    temporaryFileTask((temporaryPath) => {});
    temporaryFileTask((temporaryPath) => {}, {});
    temporaryFileTask((temporaryPath) => {}, { extension: 'ext' });
    temporaryFileTask((temporaryPath) => {}, { name: 'file' });
  });

  it('requires a callback', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryFileTask();
  });
});

describe('temporaryDirectory', () => {
  it('accepts arguments', () => {
    temporaryDirectory();
    temporaryDirectory({ prefix: 'prefix' });
  });

  it('requires valid options', () => {
    // $FlowExpectedError[prop-missing]
    temporaryDirectory({ invalid: true });
  });
});

describe('temporaryDirectoryTask', () => {
  it('accepts arguments', () => {
    temporaryDirectoryTask((temporaryPath) => {});
    temporaryDirectoryTask((temporaryPath) => {}, {});
    temporaryDirectoryTask((temporaryPath) => {}, { prefix: 'prefix' });
  });

  it('requires a callback', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryDirectoryTask();
  });
});

describe('temporaryWrite', () => {
  it('accepts arguments', () => {
    temporaryWrite('content');
    temporaryWrite('content', {});
    temporaryWrite('content', { extension: 'ext' });
    temporaryWrite('content', { name: 'file' });
  });

  it('requires file contents', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryWrite();
  });

  it('requires valid options', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryWrite('content', { extension: 'ext', name: 'file' });
    // $FlowExpectedError[incompatible-call]
    temporaryWrite('content', { invalid: true });
  });
});

describe('temporaryWriteTask', () => {
  it('accepts arguments', () => {
    temporaryWriteTask('content', (temporaryPath) => {});
    temporaryWriteTask('content', (temporaryPath) => {}, {});
    temporaryWriteTask('content', (temporaryPath) => {}, { extension: 'ext' });
    temporaryWriteTask('content', (temporaryPath) => {}, { name: 'file' });
  });

  it('requires a callback', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryWriteTask('content');
  });

  it('requires file contents', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryWriteTask();
  });
});

describe('temporaryWriteSync', () => {
  it('accepts arguments', () => {
    temporaryWriteSync('content');
    temporaryWriteSync('content', {});
    temporaryWriteSync('content', { extension: 'ext' });
    temporaryWriteSync('content', { name: 'file' });
  });

  it('requires file contents', () => {
    // $FlowExpectedError[incompatible-call]
    temporaryWriteSync();
  });
});

describe('temporaryWriteSync', () => {
  it('is a string', () => {
    (rootTemporaryDirectory: string);
  });
});
