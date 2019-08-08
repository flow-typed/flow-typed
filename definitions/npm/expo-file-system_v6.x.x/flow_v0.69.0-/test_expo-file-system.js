// @flow
import { it, describe } from 'flow-typed-test';

import {
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
  getFreeDiskStorageAsync,
  getTotalDiskCapacityAsync,
  DownloadResumable,
} from 'expo-file-system';

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

      // $ExpectError: check any
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
    getInfoAsync('fileUri', { size: true });
    getInfoAsync('fileUri', { md5: true, size: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    getInfoAsync();
    // $ExpectError: first argument must be a string
    getInfoAsync(69);
    // $ExpectError: second argument must be an object
    getInfoAsync('', 69);

    // $ExpectError: 'abc' is missing in options
    getInfoAsync('', { abc: 'test' });

    getInfoAsync('', {
      // $ExpectError
      md5: 'need number',
    });
  });
});

describe('readAsStringAsync', () => {
  it('should passes when used properly', () => {
    readAsStringAsync('fileUri').then(fileInfo => {
      (fileInfo: string);

      // $ExpectError: check any
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
    // $ExpectError: first argument is required
    readAsStringAsync();
    // $ExpectError: first argument must be a string
    readAsStringAsync(69);
    // $ExpectError: second argument must be an object
    readAsStringAsync('', 69);

    // $ExpectError: 'abc' is missing in options
    readAsStringAsync('', { abc: 'test' });

    readAsStringAsync('', {
      // $ExpectError: invalid value
      encoding: 'кукусики',
    });
  });
});

describe('writeAsStringAsync', () => {
  it('should passes when used properly', () => {
    writeAsStringAsync('fileUri', 'content').then(fileInfo => {
      (fileInfo: void);

      // $ExpectError: check any
      (fileInfo: number);
    });

    writeAsStringAsync('fileUri', 'content', { encoding: 'base64' });
    writeAsStringAsync('fileUri', 'content', {
      encoding: 'utf8',
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    writeAsStringAsync();
    // $ExpectError: first argument must be a string
    writeAsStringAsync(69);
    // $ExpectError: second argument must be a string
    writeAsStringAsync('', 69);
    // $ExpectError: third argument must be an object
    writeAsStringAsync('', '', 69);
    // $ExpectError: 'abc' is missing in options
    writeAsStringAsync('', '', { abc: 'test' });
    writeAsStringAsync('', '', {
      // $ExpectError: invalid value
      encoding: 'кукусики',
    });
  });
});

describe('deleteAsync', () => {
  it('should passes when used properly', () => {
    deleteAsync('fileUri').then(fileInfo => {
      (fileInfo: void);

      // $ExpectError: check any
      (fileInfo: number);
    });

    deleteAsync('fileUri', { idempotent: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    deleteAsync();
    // $ExpectError: first argument must be a string
    deleteAsync(69);
    // $ExpectError: second argument must be an object
    deleteAsync('', 69);
    // $ExpectError: 'abc' is missing in options
    deleteAsync('', { abc: 'test' });
    deleteAsync('', {
      // $ExpectError
      idempotent: 'need boolean',
    });
  });
});

describe('moveAsync', () => {
  it('should passes when used properly', () => {
    moveAsync({ from: '', to: '' }).then(fileInfo => {
      (fileInfo: void);

      // $ExpectError: check any
      (fileInfo: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    moveAsync();
    // $ExpectError: first argument must be an object
    moveAsync(69);
    // $ExpectError: need 'to' prop
    moveAsync({ from: '' });
    // $ExpectError: need 'from' prop
    moveAsync({ to: '' });
    moveAsync({
      // $ExpectError: need string
      from: 69,
      // $ExpectError: need string
      to: 69,
    });
  });
});

describe('copyAsync', () => {
  it('should passes when used properly', () => {
    copyAsync({ from: '', to: '' }).then(fileInfo => {
      (fileInfo: void);

      // $ExpectError: check any
      (fileInfo: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    copyAsync();
    // $ExpectError: first argument must be an object
    copyAsync(69);
    // $ExpectError: need 'to' prop
    copyAsync({ from: '' });
    // $ExpectError: need 'from' prop
    copyAsync({ to: '' });
    copyAsync({
      // $ExpectError: need string
      from: 69,
      // $ExpectError: need string
      to: 69,
    });
  });
});

describe('makeDirectoryAsync', () => {
  it('should passes when used properly', () => {
    makeDirectoryAsync('fileUri').then(fileInfo => {
      (fileInfo: void);

      // $ExpectError: check any
      (fileInfo: number);
    });

    makeDirectoryAsync('fileUri', { intermediates: true });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    makeDirectoryAsync();
    // $ExpectError: first argument must be a string
    makeDirectoryAsync(69);
    // $ExpectError: second argument must be an object
    makeDirectoryAsync('', 69);
    // $ExpectError: 'abc' is missing in options
    makeDirectoryAsync('', { abc: 'test' });
    makeDirectoryAsync('', {
      // $ExpectError
      intermediates: 'need boolean',
    });
  });
});

describe('readDirectoryAsync', () => {
  it('should passes when used properly', () => {
    readDirectoryAsync('fileUri').then(files => {
      (files: Array<string>);

      // $ExpectError: check any
      (files: number);
    });
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    readDirectoryAsync();
    // $ExpectError: first argument must be a string
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

      // $ExpectError: check any
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
    // $ExpectError: first argument is required
    downloadAsync();
    // $ExpectError: first argument must be a string
    downloadAsync(69);
    // $ExpectError: second argument must be a string
    downloadAsync('', 69);
    // $ExpectError: third argument must be an object
    downloadAsync('', '', 69);
    // $ExpectError: 'abc' is missing in options
    downloadAsync('', '', { abc: 'test' });
    downloadAsync('', '', {
      // $ExpectError: invalid value
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
    // $ExpectError: check any
    (controller: number);
  });

  it('should raises an error when pass invalid arguments', () => {
    // $ExpectError: first argument is required
    createDownloadResumable();
    // $ExpectError: first argument must be a string
    createDownloadResumable(69);
    // $ExpectError: second argument must be a string
    createDownloadResumable('', 69);
    // $ExpectError: third argument must be an object
    createDownloadResumable('', '', 69);
    // $ExpectError: 'abc' is missing in options
    createDownloadResumable('', '', { abc: 'test' });
    createDownloadResumable('', '', {
      // $ExpectError: invalid value
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

        // $ExpectError: check any
        (result: number);
      });
    });

    it('should work when call .pauseAsync()', () => {
      controller.pauseAsync().then(result => {
        (result.url: string);

        // $ExpectError: check any
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

        // $ExpectError: check any
        (result: number);
      });
    });

    it('should work when call .savable()', () => {
      const result = controller.savable();

      (result.url: string);

      // $ExpectError: check any
      (result: number);
    });
  });
});

describe('getFreeDiskStorageAsync and getTotalDiskCapacityAsync', () => {
  it('should work properly', () => {
    getFreeDiskStorageAsync().then(n => {
      (n: number);
      // $ExpectError: check any
      (n: boolean);
    });

    getTotalDiskCapacityAsync().then(n => {
      (n: number);
      // $ExpectError: check any
      (n: boolean);
    });
  });
});
