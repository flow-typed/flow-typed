declare module 'react-dnd' {
  declare function DropTarget<T: ReactClass<*>>(type: string|string[], spec?: Object, collect?: Object, options?: mixed): (component: T) => T;
  declare function DragSource<T: ReactClass<*>>(type: string|string[], spec?: Object, collect?: Object, options?: mixed): (component: T) => T;
  declare function DragLayer<T: ReactClass<*>>(type: string|string[], spec?: Object, collect?: Object, options?: mixed): (component: T) => T;
  declare function DragDropContext(backend: mixed): ReactClass<*>;
}
