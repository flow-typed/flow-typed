// @flow
import PrettyError from 'pretty-error';

(PrettyError.start(): PrettyError);

const pr: PrettyError = new PrettyError();
(pr.start(): PrettyError);
(pr.render(new Error('')): string);

// $ExpectError
(pr.skip(100): PrettyError);

(pr.alias('foo', 'bar'): PrettyError);
(pr.skipNodeFiles(): PrettyError);
(pr.withoutColors(): PrettyError);
