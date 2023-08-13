// @flow
import { describe, it } from 'flow-typed-test';

import events from 'events';
import fs from 'fs';
import os from 'os';
import path from 'path';
import util from 'util';
import url from 'url';

import nodeEvents from 'node:events';
import fsPromises from 'fs/promises';
import importProcess from 'process';
import nodeProcess from 'node:process';
import nodeFs from 'node:fs';
import nodeFsPromises from 'node:fs/promises';
import nodeOs from 'node:os';
import nodePath from 'node:path';
import nodeUtil from 'node:util';
import nodeUrl from 'node:url';

describe('node', () => {
  describe('node:events', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeEvents.EventEmitter: typeof events.EventEmitter);
    });
  });

  describe('fs/promises', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (fsPromises.writeFile: typeof fs.promises.writeFile);
    });
  });

  /**
   * Tested differently as process exports a class
   */
  describe('process', () => {
    it('should retrieve the corresponding Flow core types', () => {
      const returnValue = process.cwd();
      (importProcess.cwd(): typeof returnValue);
      // $FlowExpectedError[incompatible-cast] does not match return type of process function
      (importProcess.cwd(): number);
      // $FlowExpectedError[extra-arg] does not match  type of process function
      (importProcess.cwd(''));
    });
  });

  /**
   * Tested differently as process exports a class
   */
  describe('node:process', () => {
    it('should retrieve the corresponding Flow core types', () => {
      const returnValue = process.cwd();
      (nodeProcess.cwd(): typeof returnValue);
      // $FlowExpectedError[incompatible-cast] does not match return type of process function
      (nodeProcess.cwd(): number);
      // $FlowExpectedError[extra-arg] does not match  type of process function
      (nodeProcess.cwd(''));
    });
  });

  describe('node:fs', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeFs.writeFile: typeof fs.writeFile);
    });
  });

  describe('node:os', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeOs.cpus: typeof os.cpus);
    });
  });

  describe('node:fs/promises', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeFsPromises.writeFile: typeof fs.promises.writeFile);
    });
  });

  describe('node:path', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodePath.resolve: typeof path.resolve);
    });
  });

  describe('node:util', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeUtil.inspect: typeof util.inspect);
    });
  });

  describe('node:url', () => {
    it('should retrieve the corresponding Flow core types', () => {
      (nodeUrl.pathToFileURL: typeof url.pathToFileURL);
    });
  });
});
