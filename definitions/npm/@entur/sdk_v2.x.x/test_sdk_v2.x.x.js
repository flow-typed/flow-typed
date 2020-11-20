import { describe, it } from 'flow-typed-test';
import createEnturService from '@entur/sdk'

describe('createEnturService', () => {
  it('creates a service', () => {
    const service = createEnturService({
      clientName: 'flow-typed'
    })
  });

  it('fails if using wrong typefor service', () => {
    // $FlowExpectedError[incompatible-type] wrong return type
    const numberService: number = createEnturService({
      clientName: 'flow-typed'
    })
  });
})

describe('findTrips', () => {
  it('can call findTrips', () => {
    const service = createEnturService({
      clientName: 'flow-typed'
    })

    service.findTrips(
      'Oslo',
      'Bergen'
    )
  });

  it('fails if using parameter is missing', () => {
    const service = createEnturService({
      clientName: 'flow-typed'
    })

    // $FlowExpectedError[incompatible-call]
    service.findTrips('Oslo')
  });
})
