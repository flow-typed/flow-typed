declare module 'mitt' {
  declare type EventHandler = (event?: any) => void;

  declare interface EventEmitter {
    on: (type: string, handler: EventHandler) => void,
    off: (type: string, handler: EventHandler) => void,
    emit: (type: string, event: any) => void,
  }

  declare module.exports: () => EventEmitter;
}
