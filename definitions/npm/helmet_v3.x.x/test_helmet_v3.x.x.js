/* @flow */
import helmet from 'helmet'

helmet()

helmet.frameguard()

helmet.frameguard({
  action: 'DENY'
})

helmet.hpkp({
  maxAge: 7776000,
  sha256s: ['AbCdEf123=', 'ZyXwVu456='],
  includeSubDomains: true,
  reportUri: 'http://example.com',
  reportOnly: false,
  setIf: function (req, res) {
    return req.statusCode == 200
  }
})

// $ExpectError
helmet.foo()

// $ExpectError
helmet.hpkp()

// $ExpectError
helmet.hpkp({
  notEnoughDefaultProps: '',
  reportOnly: false,
  setIf: function (req, res) {
    return req.statusCode == 200
  }
})

// $ExpectError
helmet.frameguard({
  action: 'NOTHING'
})
