// @flow
import { describe, test } from 'flow-typed-test';
import type {
  LoadReturn,
} from 'js-yaml';

const yaml = require('js-yaml');

describe('js-yaml', () => {
  test('load', () => {
    const doc = yaml.load('some string');
    // $FlowExpectedError[incompatible-use]
    // $FlowExpectedError[prop-missing] needs to be refined
    doc.toLowerCase();
    if (typeof doc === 'string') {
      doc.toLowerCase();
    }
    if (doc && typeof doc === 'object') {
      doc.a.b();
    }

    declare var schema: yaml.Schema;

    yaml.load('test', {
      filename: 'test',
      onWarning: () => {},
      schema: schema,
      json: true,
      listener: () => {},
    });

    yaml.load('test', {
      // $FlowExpectedError[incompatible-call]
      filename: 1,
    });
    yaml.load('test', {
      // $FlowExpectedError[incompatible-call]
      onWarning: () => true,
    });
    yaml.load('test', {
      // $FlowExpectedError[incompatible-call]
      schema: 123,
    });
    yaml.load('test', {
      // $FlowExpectedError[incompatible-call]
      json: 123,
    });
    yaml.load('test', {
      // $FlowExpectedError[incompatible-call]
      listener: 123,
    });
    // $FlowExpectedError[prop-missing]
    yaml.load('test', {
      foo: 'bar',
    });
  });

  test('loadAll', () => {
    yaml.loadAll('test data', (doc: LoadReturn) => {
      // $FlowExpectedError[incompatible-use]
      // $FlowExpectedError[prop-missing] needs to be refined
      doc.toLowerCase();
      if (typeof doc === 'string') {
        doc.toLowerCase();
      }
      if (doc && typeof doc === 'object') {
        doc.a.b();
      }
    });

    var schema: yaml.Schema;

    yaml.loadAll('test', null, {
      filename: 'test',
      onWarning: () => {},
      schema: schema,
      json: true,
      listener: () => {},
    });

    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      filename: 1,
    });
    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      onWarning: () => true,
    });
    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      schema: 123,
    });
    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      json: 123,
    });
    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      listener: 123,
    });
    // $FlowExpectedError[incompatible-call]
    yaml.loadAll('test', null, {
      foo: 'bar',
    });
  });
});
