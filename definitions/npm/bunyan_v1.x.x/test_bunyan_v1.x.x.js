// @flow
import Bunyan from 'bunyan';
const logger = Bunyan.createLogger({
    name: 'logger',
    streams: [{
        type: 'rotating-file',
        level: 'error',
        path: './error.log'
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

logger.trace('Foobar');

const g: void = logger.trace('foobar');

const otherLogger = logger.child({ name: 'child' });

// $ExpectError
const childLogger = otherLogger.child({ name: false });


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
