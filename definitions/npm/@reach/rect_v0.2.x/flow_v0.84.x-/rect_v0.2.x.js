// @flow

declare module '@reach/rect' {
  declare type Ref<T> = {| current: T |};

  declare export var useRect: <T: ?HTMLElement>(
    ref: Ref<T>,
    observe?: boolean
  ) => DOMRect | null;

  declare export default React$ComponentType<{|
    onChange?: DOMRect => void,
    observe?: boolean,
    children: <T: ?HTMLElement>({ ref: Ref<T>, rect: DOMRect | void }) => React$Node,
  |}>;
}
