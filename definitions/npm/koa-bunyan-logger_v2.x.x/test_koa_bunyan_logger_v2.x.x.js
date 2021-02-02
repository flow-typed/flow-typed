// @flow
import koaBunyanLogger from 'koa-bunyan-logger';
import type { MiddlewareType } from 'koa-bunyan-logger';

const logger = koaBunyanLogger({
    name: 'logger',
    streams: [{
        type: 'rotating-file',
        level: 'error',
        path: './error.log'
    }, {
        type: 'stream',
        stream: process.stdout
    }, {
      stream: process.stderr,
    }],
    serializers: {
        ...koaBunyanLogger.bunyan.stdSerializers,
        err(input: any): string {
            let result: string = '';
            if (typeof (input) !== 'undefined' && input !== 'null') {
                result = input.toString();
            }
            return result;
        }
    }
});

// $FlowExpectedError - name needed
koaBunyanLogger({});

const child = logger.child({});

logger.trace('Foobar');

logger.log()

koaBunyanLogger({
    name: 'foo',
    serializers: {
        foo(data) {
            return {baz: data};
        }
    }
}).info({foo: 'baz'});

let middleware: MiddlewareType = koaBunyanLogger.requestIdContext({
    header: 'req-id'
});

middleware = koaBunyanLogger.requestIdContext();

middleware = koaBunyanLogger.requestLogger();

// $FlowExpectedError
middleware = koaBunyanLogger.requestLogger({
    formatRequestMessage: (req) => {string: 'expected'}
});

// $FlowExpectedError
middleware = koaBunyanLogger.requestLogger({
    formatResponseMessage: (req) => {string: 'expected'}
});

// $FlowExpectedError
middleware = koaBunyanLogger.requestLogger({
    durationField: 1
});

// $FlowExpectedError
middleware = koaBunyanLogger.requestLogger({
    levelFn: (status: number, err: Error) => 'INFO',
});

middleware = koaBunyanLogger.requestLogger({
    durationField: 'duration',
    levelFn: (status: number, err: Error) => 30,
    updateLogFields: (req) => ({id: req.reqId}),
    updateRequestLogFields: (req) => ({id: req.reqId}),
    updateResponseLogFields: (res) => ({id: res.reqId}),
    formatRequestMessage: (req) => 'Incoming request',
    formatResponseMessage: (res) => 'Response'
});
