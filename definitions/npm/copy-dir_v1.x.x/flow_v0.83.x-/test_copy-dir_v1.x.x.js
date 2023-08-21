// @flow
import { describe, test } from 'flow-typed-test';
import copydir from 'copy-dir';

describe('copy-dir', () => {
  describe('async', () => {
    test('basic', () => {
      (copydir('from', 'to'): void);
      // $FlowExpectedError[incompatible-call]
      copydir();
      // $FlowExpectedError[incompatible-call]
      copydir('from');
      // $FlowExpectedError[incompatible-cast]
      (copydir('from', 'to'): string)
    });

    test('takes options', () => {
      copydir('from', 'to', {});
      copydir('from', 'to', {
        utimes: true,
        mode: true,
        cover: true,
        filter: true,
      });
      copydir('from', 'to', {
        utimes: {
          atime: 1,
          mtime: 1,
        },
      });
      copydir('from', 'to', {
        mode: 1,
      });
      copydir('from', 'to', {
        filter: () => true,
      });

      copydir('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        utimes: '',
      });
      copydir('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        mode: '',
      });
      copydir('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        cover: '',
      });
      copydir('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        filter: '',
      });
    });

    test('callback', () => {
      copydir('from', 'to', undefined, (err: Error) => {
        return undefined;
      });
    });
  });

  describe('sync', () => {
    test('basic', () => {
      (copydir.sync('from', 'to'): void);
      // $FlowExpectedError[incompatible-call]
      copydir.sync();
      // $FlowExpectedError[incompatible-call]
      copydir.sync('from');
      // $FlowExpectedError[incompatible-cast]
      (copydir.sync('from', 'to'): string)
    });

    test('takes options', () => {
      copydir.sync('from', 'to', {});
      copydir.sync('from', 'to', {
        utimes: true,
        mode: true,
        cover: true,
        filter: true,
      });
      copydir.sync('from', 'to', {
        utimes: {
          atime: 1,
          mtime: 1,
        },
      });
      copydir.sync('from', 'to', {
        mode: 1,
      });
      copydir.sync('from', 'to', {
        filter: () => true,
      });

      copydir.sync('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        utimes: '',
      });
      copydir.sync('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        mode: '',
      });
      copydir.sync('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        cover: '',
      });
      copydir.sync('from', 'to', {
        // $FlowExpectedError[incompatible-call]
        filter: '',
      });
    });
  });
});
