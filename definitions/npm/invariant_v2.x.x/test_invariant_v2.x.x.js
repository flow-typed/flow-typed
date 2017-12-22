import invariant from 'invariant'

invariant(true, 'foo')
invariant(false, 'foo')
// $ExpectError - bool needed
invariant('foo', 'bar')
// $ExpectError - string as message
invariant('foo', 123)
