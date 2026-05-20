// @flow
import { describe, test } from 'flow-typed-test';

const Koa = require('koa');
const koaBody = require('koa-body');

describe('koa-body', () => {
  test('usage with koa', () => {
    const app = new Koa();

    app.use(koaBody());
  });

  test('options', () => {
    koaBody({});
    koaBody({
      patchNode: true,
      patchKoa: true,
      jsonLimit: 'test',
      formLimit: 1,
      textLimit: 1,
      encoding: 'test',
      multipart: true,
      urlencoded: true,
      text: true,
      json: true,
      jsonStrict: true,
      includeUnparsed: true,
      onError: (err, ctx) => {
        err.message.toLowerCase();
        ctx.body = '';
      },
      strict: true,
      parsedMethods: ['', ''],
    });

    // $FlowExpectedError[incompatible-call]
    koaBody({ patchNode: '' });
    // $FlowExpectedError[incompatible-call]
    koaBody({ patchKoa: '' });
    // $FlowExpectedError[incompatible-call]
    koaBody({ jsonLimit: true });
    // $FlowExpectedError[incompatible-call]
    koaBody({ formLimit: true });
    // $FlowExpectedError[incompatible-call]
    koaBody({ textLimit: true });
    // $FlowExpectedError[incompatible-call]
    koaBody({ encoding: true });
    // $FlowExpectedError[incompatible-call]
    koaBody({ multipart: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ urlencoded: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ text: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ json: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ jsonStrict: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ includeUnparsed: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ onError: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ strict: 1 });
    // $FlowExpectedError[incompatible-call]
    koaBody({ parsedMethods: '' });
  });

  test('formidable options', () => {
    koaBody({
      formidable: {
        maxFileSize: 1,
        maxFields: 1,
        maxFieldsSize: 1,
        uploadDir: '',
        keepExtensions: true,
        hashAlgorithm: '',
        multiples: true,
        onFileBegin: (name) => {
          name.toLowerCase();
        },
      },
    });

    koaBody({
      // $FlowExpectedError[incompatible-call]
      formidable: '',
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        maxFileSize: '',
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        maxFields: '',
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        maxFieldsSize: '',
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        uploadDir: 1,
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        keepExtensions: 1,
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        hashAlgorithm: 1,
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        multiples: 1,
      },
    });
    koaBody({
      formidable: {
        // $FlowExpectedError[incompatible-call]
        onFileBegin: 1,
      },
    });
  });
});
