// @flow
import * as route from 'koa-route'

route.get('/login', () => {})
route.post(/public/g, () => {})

route.all((): string => 'string')

// $ExpectError string. This type is incompatible with string
route.put({}, () => {})

// $ExpectError Function. This type is incompatible with string
route.all({})
