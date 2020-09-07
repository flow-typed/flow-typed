import invariant from 'invariant'

invariant(true, 'foo')
invariant(false, 'foo')
// $FlowExpectedError - bool needed
invariant('foo', 'bar')
// $FlowExpectedError - string as message
invariant('foo', 123)
