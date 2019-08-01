// @flow
import subdomain from 'express-subdomain'

// $ExpectError
subdomain(5)

// $ExpectError
subdomain('')

// $ExpectError
subdomain(5, (_: void): void => {})

subdomain('subdomain', (_: void): void => {})
