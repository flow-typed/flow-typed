import { describe, it } from 'flow-typed-test';
import createEnturService from '@entur/sdk'

describe('#someFunction', () => {
  it('create a service', () => {
    const service = createEnturService({
      clientName: 'flow-typed'
    })
  });

  it('fail if using wrong typefor service', () => {
    // $FlowExpectedError[incompatible-type] wrong return type
    const numberService: number = createEnturService({
      clientName: 'flow-typed'
    })
  });
})
