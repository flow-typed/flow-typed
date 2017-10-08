/* @flow */
import type {FormatFn, Options, TokenIndexer} from 'morgan'
import morgan from 'morgan'

// a pre-defined name
morgan('combined')
morgan('common')
morgan('short')
morgan('tiny')
// $ExpectError
morgan({});

// a format string
morgan(':remote-addr :method :url')

const opts: Options = {
    buffer: true,
    immediate: true,
    skip: (req, res) => res.statusCode < 400,
    stream: {
    	write: (str: string) => {}
    }
}

morgan('combined', opts);

morgan.format('tiny-extended', ':method :url :status :res[content-length] - :response-time ms :user-agent');

const formatLine: FormatFn = (tokens: TokenIndexer, req: any, res: any): string => ''

morgan.format('dev-extended', formatLine);

// $ExpectError
morgan.format(formatLine);
