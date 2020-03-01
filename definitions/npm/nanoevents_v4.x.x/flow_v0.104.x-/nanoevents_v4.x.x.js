declare module 'nanoevents' {
  declare type EventsMap = {
    [event: string]: any,
    ...,
  };

  declare export type DefaultEvents = {
    [event: string]: $ReadOnlyArray<any>,
    ...,
  };

  declare export type Emitter<Events: EventsMap> = {|
    events: $ObjMap<Events, <V>(V) => Array<(...V) => void> | void>,
    on: <K: $Keys<Events>>(
      event: K,
      cb: (...$ElementType<Events, K>) => void,
    ) => () => void,
    emit: <K: $Keys<Events>>(event: K, ...$ElementType<Events, K>) => void,
  |};

  declare export default function createNanoEvents<
    Events: EventsMap = DefaultEvents,
  >(): Emitter<Events>;
}
