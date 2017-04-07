// @flow
import Bunyan from 'bunyan';
const logger = Bunyan.createLogger({
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
        ...Bunyan.stdSerializers,
        err(input: any): string {
            let result: string = '';
            if (typeof (input) !== 'undefined' && input !== 'null') {
                result = input.toString();
            }
            return result;
        }
    }
});

// $ExpectError - name needed
Bunyan.createLogger({});

const child = logger.child({});

logger.trace('Foobar');

const g: void = logger.trace('foobar');

logger.trace({ err: new Error('type') }, 'messages');
const sf = logger.trace(new Error('ASDF'));
const t  = logger.trace(new Error('asdf'));

const s = logger.trace({}, false);
const b: boolean = logger.trace();
logger.trace('foo', new Error('foo'));

// $ExpectError
const v: number = Bunyan.VERSION;

Bunyan.safeCycles('true', false);

const consoleRawStream = new Bunyan.ConsoleRawStream()

// $ExpectError
consoleRawStream.write({ level: false })

// $ExpectError
logger.log()

// $ExpectError
logger.addSTream();

logger.trace({ err: new Error('foobar') }, 'error');

Bunyan.createLogger({
    name: 'foo',
    serializers: {
        foo(data) {
            return {baz: data};
        }
    }
}).info({foo: 'baz'});
