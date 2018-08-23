declare module "nanoevents" {
  declare export default class NanoEvents {
    constructor(): NanoEvents,

    on(event: string, cb: (any) => void): void,

    emit(event: string, data?: any): void
  }
}
