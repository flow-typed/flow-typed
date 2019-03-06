// @flow

import { describe, it } from 'flow-typed-test'
import { TraceId, Tracer, model, sampler, type Context, ExplicitContext, BatchRecorder } from 'zipkin'

describe('BatchRecorder', () => {
    it('should accept Logger', () => {
        const ctxImpl: Context<TraceId> = new ExplicitContext() 
        
        const logger = {
            logSpan(s: model.Span): void {}
        }

        const recorder = new BatchRecorder({ logger })

        const tracer2: Tracer = new Tracer({
            ctxImpl,
            recorder,
            sampler: new sampler.Sampler((traceId: TraceId) => true),
            traceId128Bit: false,
            localServiceName: 'test2'
        })
    })
})
