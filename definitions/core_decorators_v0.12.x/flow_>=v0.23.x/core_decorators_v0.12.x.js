type coreDecorators$GenericDescriptor<V, E, C, W> = {
  value: V,
  enumerable: E,
  configurable: C,
  writeable: W,
}

type coreDecorators$Descriptor<T> = coreDecorators$GenericDescriptor<T, bool, bool, bool>

declare module 'core-decorators' {
  declare function autobind<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function debounce<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function decorate(target: mixed): mixed;
  declare function deprecate<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function enumerable<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function extendDescriptor<T>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function lazyInitialize<T>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function mixin(target: mixed): mixed;
  declare function nonconfigurable<T>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$GenericDescriptor<T, bool, false, bool>;
  declare function nonenumerable<T>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$GenericDescriptor<T, false, bool, bool>;
  declare function override<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function readonly<T>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$GenericDescriptor<T, bool, bool, false>;
  declare function suppressWarnings<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function throttle<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
  declare function time<T: Function>(target: mixed, key: string, descriptor: coreDecorators$Descriptor<T>): coreDecorators$Descriptor<T>;
}
