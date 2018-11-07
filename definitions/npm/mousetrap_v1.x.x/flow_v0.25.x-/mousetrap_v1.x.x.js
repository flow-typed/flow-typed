declare module "mousetrap" {
  declare module.exports: {
    stopCallback: (
      e: KeyboardEvent,
      element: Element,
      combo: string
    ) => boolean,
    bind(
      key: string | Array<string>,
      fn: (e: Event, combo?: string) => mixed,
      eventType?: string
    ): void,
    unbind(key: string | Array<string>): void,
    trigger(key: string): void,
    reset(): void
  };
}
