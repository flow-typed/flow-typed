import warning from 'warning'

warning(true, 'foo')
warning(false, 'foo')
// $ExpectError - bool needed
warning('foo', 'bar')
// $ExpectError - string as warning
warning('foo', 123)
