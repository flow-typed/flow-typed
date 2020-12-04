import { describe, it } from 'flow-typed-test';
const contentType = require('content-type');

describe('content-type', () => {
  it('parse normal usage', () => {
    const parsedValue = contentType.parse('application/json');
    (parsedValue.type: string);
    (parsedValue.parameters.foo: string);
    (parsedValue.parameters['foo']: string);
  });

  it('format normal usage', () => {
    const typeValue = contentType.format({
      type: 'application/json',
      parameters: { version: '1.0' },
    });

    (typeValue: string);

    contentType.format({
      type: 'application/json',
      parameters: { version: 1 },
    });

    contentType.format({
      type: 'application/json',
    });

    const parameters = {};
    parameters['charset'] = 'utf-8';
    parameters['version'] = 8;
    contentType.format({
      type: 'application/json',
      parameters,
    });
  });

  it('finds errors when we miss the type property', () => {
    // $FlowExpectedError
    contentType.format({
      foo: 'bar',
    });

    // $FlowExpectedError
    contentType.format({
      parameters: { version: '1.0' }
    });
  });
});
