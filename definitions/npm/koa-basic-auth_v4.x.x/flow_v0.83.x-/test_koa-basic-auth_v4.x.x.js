// @flow
import { describe, it } from 'flow-typed-test';
import basicAuth from 'koa-basic-auth';

describe('koa-basic-auth', () => {
  it('takes object with two properties', () => {
    basicAuth({
      name: '',
      pass: '',
    });
  });

  it('errors on args', () => {
    // $FlowExpectedError[incompatible-call] cannot have no args
    basicAuth();
    // $FlowExpectedError[incompatible-call] object only
    basicAuth('test');
    basicAuth({
      name: '',
      pass: '',
    // $FlowExpectedError[extra-arg] only takes one
    }, 'test');
    // $FlowExpectedError[prop-missing] must have pass
    basicAuth({
      name: '',
    });
    // $FlowExpectedError[prop-missing] must have name
    basicAuth({
      pass: '',
    });
  });
});
