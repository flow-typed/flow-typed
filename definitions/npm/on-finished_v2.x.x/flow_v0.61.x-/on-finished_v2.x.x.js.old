import { type IncomingMessage, type OutgoingMessage } from 'http';

declare module 'on-finished' {

  declare function isFinished(msg: IncomingMessage | OutgoingMessage): boolean;

  declare module.exports: <T: IncomingMessage | OutgoingMessage>(msg: T, listener: (err: Error | null, msg: T) => void) => T;
}
