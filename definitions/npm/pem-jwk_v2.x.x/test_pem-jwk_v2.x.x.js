// @flow
import { describe, it } from 'flow-typed-test';
import { pem2jwk, jwk2pem } from 'pem-jwk';

describe('pem-jwk', () => {
    it('convert from PEM to JWK', () => {
        pem2jwk('')
    })

    it('convert from JWK to PEM', () => {
        jwk2pem({})
    })
})
