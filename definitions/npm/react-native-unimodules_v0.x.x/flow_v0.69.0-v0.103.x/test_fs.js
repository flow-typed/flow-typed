// @flow
import { it, describe } from 'flow-typed-test';

import { FileSystem } from 'react-native-unimodules';

const {
  documentDirectory,
  cacheDirectory,
  bundledAssets,
  bundleDirectory,
  getInfoAsync,
  readAsStringAsync,
  writeAsStringAsync,
  deleteAsync,
  moveAsync,
  copyAsync,
  makeDirectoryAsync,
  readDirectoryAsync,
  downloadAsync,
  createDownloadResumable,
  DownloadResumable,
} = FileSystem;

describe('consts', () => {
  it('should export const values', () => {
    (documentDirectory: string);
    (cacheDirectory: string);
    (bundledAssets: string | void);
    (bundleDirectory: string);
  });
});

describe('getInfoAsync', () => {
  it('should passes when used properly', () => {
    getInfoAsync('fileUri').then(fileInfo => {
      (fileInfo.exists: boolean);

      // $FlowExpectedError: check any
      (fileInfo.exists: number);

      if (fileInfo.exists) {
        (fileInfo.uri: string);
        (fileInfo.size: number);
        (fileInfo.isDirectory: boolean);
        (fileInfo.modificationTime: number);
        (fileInfo.md5: ?string);
      }

      if (!fileInfo.exists) {
        (fileInfo.uri: string);
        (fileInfo.size: void);
        (fileInfo.isDirectory: false);
        (fileInfo.modificationTime: void);
        (fileInfo.md5: void);
      }
    });

    getInfoAsync('fileUri', { md5: true });
    getInfoAsync('fileUri', { cache: true });
    getInfoAsync('fileUri', { md5: true, cache: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    getInfoAsync();
    // $FlowExpectedError: first argument must be a string
    getInfoAsync(69);
    // $FlowExpectedError: second argument must be an object
    getInfoAsync('', 69);

    // $FlowExpectedError: 'abc' is missing in options
    getInfoAsync('', { abc: 'test' });

    getInfoAsync('', {
      // $FlowExpectedError
      md5: 'need number',
    });
  });
});

describe('readAsStringAsync', () => {
  it('should passes when used properly', () => {
    readAsStringAsync('fileUri').then(fileInfo => {
      (fileInfo: string);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });

    readAsStringAsync('fileUri', { encoding: 'base64' });
    readAsStringAsync('fileUri', { position: 1 });
    readAsStringAsync('fileUri', { length: 1 });
    readAsStringAsync('fileUri', {
      encoding: 'utf8',
      position: 1,
      length: 1,
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    readAsStringAsync();
    // $FlowExpectedError: first argument must be a string
    readAsStringAsync(69);
    // $FlowExpectedError: second argument must be an object
    readAsStringAsync('', 69);

    // $FlowExpectedError: 'abc' is missing in options
    readAsStringAsync('', { abc: 'test' });

    readAsStringAsync('', {
      // $FlowExpectedError: invalid value
      encoding: 'кукусики',
    });
  });
});

describe('writeAsStringAsync', () => {
  it('should passes when used properly', () => {
    writeAsStringAsync('fileUri', 'content').then(fileInfo => {
      (fileInfo: void);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });

    writeAsStringAsync('fileUri', 'content', { encoding: 'base64' });
    writeAsStringAsync('fileUri', 'content', {
      encoding: 'utf8',
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    writeAsStringAsync();
    // $FlowExpectedError: first argument must be a string
    writeAsStringAsync(69);
    // $FlowExpectedError: second argument must be a string
    writeAsStringAsync('', 69);
    // $FlowExpectedError: third argument must be an object
    writeAsStringAsync('', '', 69);
    // $FlowExpectedError: 'abc' is missing in options
    writeAsStringAsync('', '', { abc: 'test' });
    writeAsStringAsync('', '', {
      // $FlowExpectedError: invalid value
      encoding: 'кукусики',
    });
  });
});

describe('deleteAsync', () => {
  it('should passes when used properly', () => {
    deleteAsync('fileUri').then(fileInfo => {
      (fileInfo: void);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });

    deleteAsync('fileUri', { idempotent: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    deleteAsync();
    // $FlowExpectedError: first argument must be a string
    deleteAsync(69);
    // $FlowExpectedError: second argument must be an object
    deleteAsync('', 69);
    // $FlowExpectedError: 'abc' is missing in options
    deleteAsync('', { abc: 'test' });
    deleteAsync('', {
      // $FlowExpectedError
      idempotent: 'need boolean',
    });
  });
});

describe('moveAsync', () => {
  it('should passes when used properly', () => {
    moveAsync({ from: '', to: '' }).then(fileInfo => {
      (fileInfo: void);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    moveAsync();
    // $FlowExpectedError: first argument must be an object
    moveAsync(69);
    // $FlowExpectedError: need 'to' prop
    moveAsync({ from: '' });
    // $FlowExpectedError: need 'from' prop
    moveAsync({ to: '' });
    moveAsync({
      // $FlowExpectedError: need string
      from: 69,
      // $FlowExpectedError: need string
      to: 69,
    });
  });
});

describe('copyAsync', () => {
  it('should passes when used properly', () => {
    copyAsync({ from: '', to: '' }).then(fileInfo => {
      (fileInfo: void);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    copyAsync();
    // $FlowExpectedError: first argument must be an object
    copyAsync(69);
    // $FlowExpectedError: need 'to' prop
    copyAsync({ from: '' });
    // $FlowExpectedError: need 'from' prop
    copyAsync({ to: '' });
    copyAsync({
      // $FlowExpectedError: need string
      from: 69,
      // $FlowExpectedError: need string
      to: 69,
    });
  });
});

describe('makeDirectoryAsync', () => {
  it('should passes when used properly', () => {
    makeDirectoryAsync('fileUri').then(fileInfo => {
      (fileInfo: void);

      // $FlowExpectedError: check any
      (fileInfo: number);
    });

    makeDirectoryAsync('fileUri', { intermediates: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    makeDirectoryAsync();
    // $FlowExpectedError: first argument must be a string
    makeDirectoryAsync(69);
    // $FlowExpectedError: second argument must be an object
    makeDirectoryAsync('', 69);
    // $FlowExpectedError: 'abc' is missing in options
    makeDirectoryAsync('', { abc: 'test' });
    makeDirectoryAsync('', {
      // $FlowExpectedError
      intermediates: 'need boolean',
    });
  });
});

describe('readDirectoryAsync', () => {
  it('should passes when used properly', () => {
    readDirectoryAsync('fileUri').then(files => {
      (files: Array<string>);

      // $FlowExpectedError: check any
      (files: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    readDirectoryAsync();
    // $FlowExpectedError: first argument must be a string
    readDirectoryAsync(69);
  });
});

describe('downloadAsync', () => {
  it('should passes when used properly', () => {
    downloadAsync('url', 'fileUri').then(result => {
      (result.uri: string);
      (result.status: number);
      (result.headers: { [string]: string });
      (result.md5: ?string);

      // $FlowExpectedError: check any
      (result.uri: number);
    });

    downloadAsync('url', 'fileUri', { md5: false });
    downloadAsync('url', 'fileUri', { cache: false });
    downloadAsync('url', 'fileUri', { headers: { 'header-name': 'abc' } });
    downloadAsync('url', 'fileUri', {
      md5: false,
      cache: false,
      headers: { 'X-Auth': 'abc' },
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    downloadAsync();
    // $FlowExpectedError: first argument must be a string
    downloadAsync(69);
    // $FlowExpectedError: second argument must be a string
    downloadAsync('', 69);
    // $FlowExpectedError: third argument must be an object
    downloadAsync('', '', 69);
    // $FlowExpectedError: 'abc' is missing in options
    downloadAsync('', '', { abc: 'test' });
    downloadAsync('', '', {
      // $FlowExpectedError: invalid value
      md5: 'need boolean',
    });
  });
});

describe('createDownloadResumable', () => {
  it('should passes when used properly', () => {
    createDownloadResumable('url', 'fileUri', { md5: false });
    createDownloadResumable('url', 'fileUri', { cache: false });
    createDownloadResumable('url', 'fileUri', {
      headers: { 'header-name': 'abc' },
    });
    createDownloadResumable('url', 'fileUri', {
      md5: false,
      cache: false,
      headers: { 'X-Auth': 'abc' },
    });

    const controller = createDownloadResumable('url', 'fileUri');

    (controller: DownloadResumable);
    // $FlowExpectedError: check any
    (controller: number);
  });

  it('should raises an error when pass invalid arguments', () => {
    // $FlowExpectedError: first argument is required
    createDownloadResumable();
    // $FlowExpectedError: first argument must be a string
    createDownloadResumable(69);
    // $FlowExpectedError: second argument must be a string
    createDownloadResumable('', 69);
    // $FlowExpectedError: third argument must be an object
    createDownloadResumable('', '', 69);
    // $FlowExpectedError: 'abc' is missing in options
    createDownloadResumable('', '', { abc: 'test' });
    createDownloadResumable('', '', {
      // $FlowExpectedError: invalid value
      md5: 'need boolean',
    });
  });

  describe('DownloadResumable', () => {
    const controller = createDownloadResumable('url', 'fileUri');

    it('should work when call .downloadAsync()', () => {
      controller.downloadAsync().then(result => {
        if (result) {
          (result.uri: string);
          (result.status: number);
          (result.headers: { [string]: string });
          (result.md5: ?string);
        } else {
          (result: void);
        }

        // $FlowExpectedError: check any
        (result: number);
      });
    });

    it('should work when call .pauseAsync()', () => {
      controller.pauseAsync().then(result => {
        (result.url: string);

        // $FlowExpectedError: check any
        (result: number);
      });
    });

    it('should work when call .resumeAsync()', () => {
      controller.resumeAsync().then(result => {
        if (result) {
          (result.uri: string);
          (result.status: number);
          (result.headers: { [string]: string });
          (result.md5: ?string);
        } else {
          (result: void);
        }

        // $FlowExpectedError: check any
        (result: number);
      });
    });

    it('should work when call .savable()', () => {
      const result = controller.savable();

      (result.url: string);

      // $FlowExpectedError: check any
      (result: number);
    });
  });
});
