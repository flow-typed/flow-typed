// @flow
import subdomain from 'express-subdomain'

// $FlowExpectedError
subdomain(5)

// $FlowExpectedError
subdomain('')

// $FlowExpectedError
subdomain(5, (_: void): void => {})

subdomain('subdomain', (_: void): void => {})
