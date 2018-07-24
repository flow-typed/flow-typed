// @flow
import Future from 'fluture'

const noop = () => {}

// No error
Future.of(1)
  .map(x => x + 1)
  .chain(Future.of)
  .fork(noop, noop) 

// $ExpectError when calling unavailable function
Future.unavailableFunction(123)

// $ExpectError when map over wrong type with Future.of
Future.of(1).map(x => x.length)

// $ExpectError when map over wrong type with Future()
Future((rej, res) => res(1)).map(x => x.length)

// $ExpectError when mapRef over wrong type
Future.reject(1).map(x => x).mapRej(x => x.length)

// No error as rejected type is passed down the chain
Future.of(1)
  .mapRej(() => 'string')
  .map(x => x)
  .fork(x => x.length, noop)

// $ExpectError when map over wrong type with Future.node
Future.node(done => done(1, 'string')).map(x => x.length).mapRej(x => x.length)

// $ExpectError when folding back
Future.reject('123').fold(x => 123, x => '123').map(x => x.length)
