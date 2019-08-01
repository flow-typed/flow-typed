import slug from 'slug'

const result1: string = slug('Hello world')

// $ExpectError
slug(2)

const result2: string = slug('i ♥ unicode', '_')

// $ExpectError
slug('i ♥ unicode', 2)

// $ExpectError
slug('Hello world', { mode: 'invalid_mode' })

// $ExpectError
slug('Hello world', { remove: 'hello' })

slug('Hello world', { remove: null })

// $ExpectError
slug('Hello world', { symbols: 'hello' })

// $ExpectError
slug('Hello world', { charmap: 'hello' })

// $ExpectError
slug('Hello world', { multicharmap: 'hello' })

// $ExpectError
slug('Hello world', { lower: 'hello' })

// $ExpectError
slug.defaults.modes['hello']
