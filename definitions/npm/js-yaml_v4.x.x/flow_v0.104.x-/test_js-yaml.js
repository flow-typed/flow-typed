// @flow
import { describe, test } from 'flow-typed-test';
import type {
  LoadReturn,
} from 'js-yaml';

const yaml = require('js-yaml');

describe('js-yaml', () => {
  declare var schema: yaml.Schema;

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

  test('dump', () => {
    const dumpResult = yaml.dump({ a: 1, b: 2 });
    dumpResult.toLowerCase();
    // $FlowExpectedError[prop-missing] test that it's definitely a string
    dumpResult.toFixed();

    yaml.dump({ a: 1, b: 2 }, {
      indent: 1,
      noArrayIndent: true,
      skipInvalid: true,
      flowLevel: 1,
      styles: {},
      schema,
      sortKeys: true,
      lineWidth: 1,
      noRefs: true,
      noCompatMode: true,
      condenseFlow: true,
      quotingType: '\'',
      forceQuotes: true,
      replacer: () => {},
    });

    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      indent: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      noArrayIndent: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      skipInvalid: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      flowLevel: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      styles: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      schema: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      lineWidth: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      noRefs: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      noCompatMode: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      condenseFlow: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      quotingType: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      forceQuotes: 'test',
    });
    yaml.dump({ a: 1, b: 2 }, {
      // $FlowExpectedError[incompatible-call]
      replacer: 'test',
    });
    // $FlowExpectedError[prop-missing]
    yaml.dump({ a: 1, b: 2 }, {
      foo: 'bar',
    });
  });
});
