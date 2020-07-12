import warning from 'warning'

warning(true, 'foo')
warning(false, 'foo')
// $FlowExpectedError - bool needed
warning('foo', 'bar')
// $FlowExpectedError - string as warning
warning('foo', 123)
