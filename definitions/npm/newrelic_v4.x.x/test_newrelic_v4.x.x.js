// @flow

import newrelic from 'newrelic';

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

newrelic.incrementMetric('test', 1)
newrelic.incrementMetric('test')

// $ExpectError
newrelic.incrementMetric('test', '')

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

const seg1: Promise<string> = newrelic.startSegment('sqg', true, () => '')
const seg1: Promise<string> = newrelic.startSegment('sqg', true, () => Promise.resolve(''))
