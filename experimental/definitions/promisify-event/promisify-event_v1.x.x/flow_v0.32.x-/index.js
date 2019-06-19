// @flow

declare module 'promisify-event' {
  declare module.exports: (emitter: events$EventEmitter, event: string) => Promise<any> & {
    cancel: () => void,
  }
}

