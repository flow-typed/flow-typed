
import { describe, it } from 'flow-typed-test';
import { createHandlers } from 'redux-handlers';

describe('redux-handlers', () => {
  describe('#createHandlers', () => {
    it('should destructure', () => {
      const { registerHandler, createReducer } = createHandlers()
    })

    it('registerHandler should expect a certain format', () => {
      const { registerHandler, createReducer } = createHandlers()
      registerHandler('FOO', () => ({}))
      registerHandler('FOO', (a: string, b: number, state: {...}) => ({}))
      // $FlowExpectedError
      registerHandler(123, () => ({}))
      // $FlowExpectedError
      registerHandler(123, 'argh')
    })

    it('createReducer should expect an initial state', () => {
      const { createReducer } = createHandlers()
      createReducer('foo')
      createReducer({})
      // $FlowExpectedError
      createReducer('foo', 'bar')
    })
  })
})