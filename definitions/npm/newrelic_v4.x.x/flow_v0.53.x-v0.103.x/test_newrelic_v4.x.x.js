// @flow
import { describe, it } from 'flow-typed-test';
import newrelic from 'newrelic';

describe('newrelic', () => {

  it('should record metrics', () => {
    newrelic.recordMetric('test', 0)
    newrelic.recordMetric('test', {
      count: 0,
      total: 0,
      min: 0,
      max: 0,
      sumOfSquares: 0
    })

    // $ExpectError
    newrelic.recordMetric('test', '')
  })

  it('should increment metrics', () => {
    newrelic.incrementMetric('test', 1)
    newrelic.incrementMetric('test')

    // $ExpectError
    newrelic.incrementMetric('test', '')
  })

  it('should add custom attribute', () => {
    newrelic.addCustomAttribute('test', 10)
    newrelic.addCustomAttribute('test', true)
    newrelic.addCustomAttribute('test', 'value')
    // $ExpectError
    newrelic.addCustomAttribute('test', [])

    newrelic.addCustomAttributes({
      test1: 10,
      test2: true,
      test3: 'value'
    })

    // $ExpectError
    newrelic.addCustomAttributes({
      test1: 10,
      test2: true,
      test3: 'value',
      test4: []
    })
  })

  it('should start segment', () => {
    const seg: Promise<string> = newrelic.startSegment('sqg', true, (cb) => cb(''))
  })

  it('should instrument', () => {
    newrelic.instrument('express', () => {})
  })
})
