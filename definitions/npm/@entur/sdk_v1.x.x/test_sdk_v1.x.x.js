import { describe, it } from 'flow-typed-test';
import createEnturService, { ONSTREET_BUS, FeatureCategory } from '@entur/sdk'

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

describe('getQuaysForStopPlace', () => {
  it('can be called with single argument', () => {
    const service = createEnturService({ clientName: 'flow-typed' })
    const p: Promise<Array<$entur$sdk$Quay>> = service.getQuaysForStopPlace('NSR:StopPlace:1')
  });

  it('cannot be called without arguments', () => {
    const service = createEnturService({ clientName: 'flow-typed' })
    // $FlowExpectedError[incompatible-call]
    const p: Promise<Array<$entur$sdk$Quay>> = service.getQuaysForStopPlace()
  });

  it('can be called with options', () => {
    const service = createEnturService({ clientName: 'flow-typed' })
    const p: Promise<Array<$entur$sdk$Quay>> = service.getQuaysForStopPlace('NSR:StopPlace:1', {
      filterByInUse: true
    })
  });

  it('can be called with options', () => {
    const service = createEnturService({ clientName: 'flow-typed' })
    // $FlowExpectedError[prop-missing]
    const p: Promise<Array<$entur$sdk$Quay>> = service.getQuaysForStopPlace('NSR:StopPlace:1', {
      allowCheeses: ['camembert', 'brie']
    })
  });
})

describe('FeatureCategory constants', () => {
  it('can import individual constants', () => {
    const onstreetBus: string = ONSTREET_BUS
  });

  it('can use FeatureCategory enum', () => {
    const onstreetBus: string = FeatureCategory.ONSTREET_BUS
  });
})
