import { IncomingMessage, ServerResponse } from 'http';

declare module 'on-finished' {

  declare function isFinished(msg: IncomingMessage | ServerResponse): boolean;

  declare module.exports: <T: IncomingMessage | ServerResponse>(msg: T, listener: (err: Error | null, msg: T) => void) => T;
}
