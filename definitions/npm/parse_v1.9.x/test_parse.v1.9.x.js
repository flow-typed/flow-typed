// @flow
import Parse from 'parse/node'

const parseObject = new Parse.Object('Test')
parseObject.get('username')

// $ExpectError
parseObject.get(false)
