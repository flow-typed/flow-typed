// @flow

import { describe, it } from 'flow-typed-test'
import { model } from 'zipkin'

describe('Endpoint', () => {
    describe('isEmpty', () => {
        it('should return boolean', () => {
            const e1: model.Endpoint = new model.Endpoint({ serviceName: 'test1' })
            const isEmpty: boolean = e1.isEmpty()
        })
    })
})
