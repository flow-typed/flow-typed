declare module 'signals' {
  declare class SignalBinding {
    active: boolean;
    context: ?mixed;
    params: ?mixed[];
    constructor(signal: Signal, listener: () => void, isOnce: boolean, listenerContext: ?mixed, priority: ?number): void;
    detach(): ?() => void;
    execute(paramsArr: ?mixed[]): mixed;
    getListener(): () => void;
    getSignal(): Signal;
    isBound(): boolean;
    isOnce(): boolean;
    toString(): string;
  }
  declare class Signal {
    active: boolean;
    memorize: boolean;
    VERSION: string;
    constructor(): void;
    add(listener: () => void, listenerContext: ?mixed, priority: ?number): SignalBinding;
    addOnce(listener: () => void, listenerContext: ?mixed, priority: ?number): SignalBinding;
    dispatch(...params: mixed[]): void;
    dispose(): void;
    forget(): void;
    getNumListeners(): number;
    halt(): void;
    has(listener: () => void, context: ?mixed): boolean;
    remove(listener: () => void, context: ?mixed): () => void;
    removeAll(): void;
    toString(): string;
  }

  declare export default typeof Signal;
}
