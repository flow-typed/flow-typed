// @flow
import PrettyError from 'pretty-error';

(PrettyError.start(): void);
const pr: PrettyError = new PrettyError();
(pr.start(): void);
// $ExpectError
(pr.skip(100): void);
(pr.alias('foo', 'bar'): void);
(pr.skipNodeFiles(): void);
(pr.withoutColors(): void);
