declare module "component-emitter" {
  declare type Callback = (...args: mixed[]) => void;

  declare class Emitter {
    static (base?: {}): this;
    on(event: string, cb: Callback): this;
    addEventListener(event: string, cb: Callback): this;

    once(event: string, cb: Callback): this;

    off(event: string, cb: Callback): this;
    removeListener(event: string, cb: Callback): this;
    removeAllListeners(event: string, cb: Callback): this;
    removeEventListener(event: string, cb: Callback): this;

    emit(event: string, payload: mixed): this;
    listeners(event: string): Callback[];
    hasListeners(event: string): boolean;
  }

  declare export default typeof Emitter
}
