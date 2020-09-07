// @flow
import { it, describe } from 'flow-typed-test';
const Archiver = require('archiver');

describe('Archiver()', () => {
  it('should pass when use properly', () => {
    Archiver('tar');
    Archiver('tar').abort().abort();
  });

  it("should raises an error when don't pass a first argument", () => {
    // $FlowExpectedError (must pass in a format)
    Archiver();
  });

  it('should raises an error when a first argument not a valid value of an enum', () => {
    // $FlowExpectedError (format should be a string)
    Archiver(10);

    // $FlowExpectedError (format should be 'zip' or 'tar')
    Archiver('tap');
  });

  describe('Archiver Options', () => {
    it('should pass when use properly', () => {
      const options = {
        statConcurrency: 1,
        allowHalfOpen: true,
        readableObjectMode: true,
        writeableObjectMode: true,
        decodeStrings: true,
        encoding: 'test',
        highWaterMark: 1,
        objectmode: true,
        comment: 'test',
        forceLocalTime: true,
        forceZip64: true,
        store: true,
        zlib: {},
        gzip: true,
        gzipOptions: {},
      };

      Archiver('zip', options);
      Archiver('zip', {});
      Archiver('zip', { gzip: true });
      Archiver('zip', { statConcurrency: 1 });
    });

    it("should raises an error when a second argument isn't object", () => {
      // $FlowExpectedError
      Archiver('zip', '{}');
    });

    it('should raises an error when options object has a missing prop', () => {
      // $FlowExpectedError (must pass in valid options)
      Archiver('zip', { gzp: true });
    });

    it('should raises an error when pass an invalid value of options', () => {
      // $FlowExpectedError (values of options should use correct type)
      Archiver('zip', { statConcurrency: '1' });
    });
  });
});

describe('Archiver.create()', () => {
  it('should pass when use properly', () => {
    Archiver.create('zip');
    Archiver.create('zip', {});
  });

  it("should raises an error when don't pass a required argument", () => {
    // $FlowExpectedError (must pass in a format)
    Archiver.create();
  });
});

describe('Archiver.create()', () => {
  it('should pass when use properly', () => {
    Archiver.registerFormat('zip', () => {});
  });

  it("should raises an error when don't pass a first required argument", () => {
    // $FlowExpectedError (must pass in a format and module)
    Archiver.registerFormat();
  });

  it("should raises an error when don't pass a second required argument", () => {
    // $FlowExpectedError (must pass in a module)
    Archiver.registerFormat('zip');
  });
});
