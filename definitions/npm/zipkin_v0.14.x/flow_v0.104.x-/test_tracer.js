// @flow

import { describe, it } from 'flow-typed-test'
import { TraceId, Tracer, sampler, type Context, ExplicitContext, ConsoleRecorder } from 'zipkin'

describe('Tracer', () => {
    it('should accept proper argument types', () => {
        // Example ported from https://github.com/openzipkin/zipkin-js/blob/master/packages/zipkin/README.md
        const ctxImpl: Context<TraceId> = new ExplicitContext()

        const tracer1: Tracer = new Tracer({
            ctxImpl,
            recorder: new ConsoleRecorder(),
            sampler: new sampler.CountingSampler(0.01),
            traceId128Bit: true,
            localServiceName: 'test1'
        })
    })
})
