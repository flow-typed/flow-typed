declare module 'fbemitter' {
  declare export type Callback = (...args: mixed[]) => mixed;

  declare export type Subscription = {|
    remove: () => void,
  |};

  declare export class EmitterSubscription {
    // a context for listener to be called with
    context?: { [key: string]: any, ... };
    listener: Callback;
  }

  declare export class EventEmitter {
    addListener(eventType: string, callback: Callback): Subscription;
    // Similar to `addListener()` but the callback is removed after
    // it is invoked once. A token is returned that can be used
    // to remove the listener.
    once(eventType: string, callback: Callback): Subscription;

    // Return an array of listeners that are currently registered
    // for the given event type.
    listeners(eventType: string): Callback[];

    // Removes all of the registered listeners. eventType is optional,
    // if provided only listeners for that event type are removed.
    removeAllListeners(eventType?: string): void;

    // Emits an event of the given type with the given data.
    // All callbacks that are listening to the particular
    // event type will be notified.
    emit(eventType: string, ...args: mixed[]): void;

    // It is reasonable to extend EventEmitter in order to inject some custom
    // logic that you want to do on every callback that is called during an emit,
    // such as logging, or setting up error boundaries. `__emitToSubscription()`
    // is exposed to make this possible.
    // @see https://github.com/facebook/emitter#__emittosubscriptionsubscription-eventtype-args
    __emitToSubscription(
      subscription: EmitterSubscription,
      eventType: string,
      ...args: mixed[]
    ): void;
  }
}
