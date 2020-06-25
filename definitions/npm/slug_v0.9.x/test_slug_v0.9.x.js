import slug from 'slug'

const result1: string = slug('Hello world')

// $FlowExpectedError
slug(2)

const result2: string = slug('i ♥ unicode', '_')

// $FlowExpectedError
slug('i ♥ unicode', 2)

// $FlowExpectedError
slug('Hello world', { mode: 'invalid_mode' })

// $FlowExpectedError
slug('Hello world', { remove: 'hello' })

slug('Hello world', { remove: null })

// $FlowExpectedError
slug('Hello world', { symbols: 'hello' })

// $FlowExpectedError
slug('Hello world', { charmap: 'hello' })

// $FlowExpectedError
slug('Hello world', { multicharmap: 'hello' })

// $FlowExpectedError
slug('Hello world', { lower: 'hello' })

// $FlowExpectedError
slug.defaults.modes['hello']
