declare module 'awilix' {
  declare module .exports: {
    createContainer(?awilix$ContainerOptions): awilix$Container<{}>,
    ResolutionMode: Class<awilix$ResolutionMode>,
    Lifetime: Class<awilix$Lifetime>,
    asValue: awilix$asValue,
    asClass: awilix$asClass,
    asFunction: awilix$asFunction,
    AwilixResolutionError: awilix$ResolutionError,
    listModules: awilix$listModules,

  }
}

declare class awilix$ResolutionError extends Error {

}

declare type awilix$POJO<T> = {
  [string]: T
};

declare type awilix$listModules = (globPatterns: string | string[] | Array<awilix$LoadModulesTuple<*>>, options?: awilix$LoadModulesOptions<*>) => awilix$ModuleDescriptor[];

declare type $Return<F> = $Call<(<V>(() => V) => V), F>;

declare class awilix$Container<R> {
  cradle: R;
  registrations: awilix$Registration<$Values<R>>[];
  options: awilix$ContainerOptions;

  createScope(): awilix$Container<R>;

  register<Name: string, T>(name: Name, registration: awilix$Registration<T>): awilix$MergedRegistrations<R, { [Name]: T }>;

  register<RegistrationMap: *>(registrations: RegistrationMap, opts?: awilix$ContainerRegOptions<RegistrationMap>): awilix$MergedRegistrations<R, RegistrationMap>;

  registerClass<T>(className: Class<T>): awilix$Container<R & { [$PropertyType<Class<T>, 'name'>]: T }>;
  registerClass<T, Name: string>(name: Name, clazz: Class<T>, opts?: awilix$ContainerRegOptions<T>): awilix$Container<{ [Name]: T } & R>;
  registerClass<T, Name: string>(name: Name, ctorAndOptionsPair: [Class<T>, awilix$ContainerRegOptions<T>]): awilix$Container<{ [Name]: T } & R>;
  registerClass<T>([Class<T>, awilix$ContainerRegOptions<T>]): awilix$Container<{ [$PropertyType<Class<T>, 'name'>]: T } & R>;


  registerFunction<F: () => *>(fn: F, opts?: awilix$ContainerRegOptions<$Return<F>>): awilix$Container<{ [$PropertyType<F, 'name'>]: $Return<F> } & R>;
  registerFunction<F: () => *>(fn: F, opts?: awilix$ContainerRegOptions<$Return<F>>): awilix$Container<{ [$PropertyType<F, 'name'>]: $Return<F> } & R>;
  registerFunction<Name:string, F: () => *>(name: Name, fn: F, opts?: awilix$ContainerRegOptions<$Return<F>>): awilix$Container<{ [Name]: $Return<F> } & R>;
  registerFunction<Name:string, F: () => *>(name: string, funcAndOptionsPair: [Function, awilix$ContainerRegOptions<$Return<F>>]): awilix$Container<{ [Name]: $Return<F> } & R>;
  registerFunction<F: () => *, RegistrationMap: {
    [string]: F | [F, awilix$ContainerRegOptions<$Return<F>>]
  }>(RegistrationMap): awilix$MergedRegistrations<R, $ObjMap<RegistrationMap, (<V>(() => V) => V)>>;

  registerValue<Name: string, T>(name: Name, value: T): awilix$Container<{ [Name]: T } & R>;
  registerValue<Registrations: { [string]: * }>(Registrations): awilix$Container<Registrations & R>;

  resolve<Name:string>(name: Name): $ElementType<R, Name>;

  loadModules(globPatterns: string[] | Array<awilix$LoadModulesTuple<*>>, options?: awilix$LoadModulesOptions<*>): awilix$Container<R>;

  build<T:Function>(target: T | awilix$Registration<T>): $Return<T>;
  build<T>(target: Class<T> | awilix$Registration<T>): $Return<T>;

}

declare type awilix$LoadModulesTuple<T> = [string] | [string, awilix$ContainerRegOptions<T>];
declare type awilix$LoadModulesOptions<T> = {
  cwd?: string,
  formatName?: awilix$NameFormatter | awilix$BuiltInNameFormatters,
  registrationOptions?: awilix$ContainerRegOptions<T>,
}

declare type awilix$ModuleDescriptor = {
  name: string,
  path: string
};

declare type awilix$BuiltInNameFormatters = 'camelCase';
declare type awilix$NameFormatter = (name: string, descriptor: awilix$ModuleDescriptor) => string

declare interface awilix$AsProviderFunction {
}

declare interface awilix$asFunction extends awilix$AsProviderFunction {
  $call: <F: () => *>(fn: F, options?: awilix$ContainerRegOptions<$Return<F>>) => awilix$FluidRegistration<$Return<F>>;
}

declare interface awilix$asValue extends awilix$AsProviderFunction {
  $call: <T>(val: T, options?: awilix$ContainerRegOptions<T>) => awilix$Registration<T>;
}

declare interface awilix$asClass extends awilix$AsProviderFunction {
  $call: <T>(type: Class<T>, options?: awilix$ContainerRegOptions<T>) => awilix$FluidRegistration<T>
}

declare interface awilix$FluidRegistration<T> extends awilix$Registration<T> {
  singleton(): awilix$FluidRegistration<T>;

  scoped(): awilix$FluidRegistration<T>;

  transient(): awilix$FluidRegistration<T>;

  proxy(): awilix$FluidRegistration<T>;

  classic(): awilix$FluidRegistration<T>;

  inject<R>(injector: awilix$InjectorFunction<R>): awilix$FluidRegistration<T>;
}

declare type awilix$ContainerOptions = {|
  require?: typeof require;
  resolutionMode ?: awilix$ResolutionMode
|}

declare type awilix$ContainerRegOptions<T> = string | {|
  name?: string,
  lifetime?: awilix$Lifetime,
  resolutionMode?: awilix$ResolutionMode,
  injector?: awilix$InjectorFunction<T>,
  register?: awilix$AsProviderFunction
|}

declare class awilix$Lifetime {
  static SCOPED: awilix$Lifetime,
  static SINGLETON: awilix$Lifetime,
  static TRANSIENT: awilix$Lifetime,
}

declare class awilix$ResolutionMode {
  static PROXY: awilix$ResolutionMode,
  static CLASSIC: awilix$ResolutionMode,
}

declare type awilix$MergedRegistrations<T1, T2> = awilix$Container<T1 & $ObjMap<T2, <T>(awilix$Registration<T>) => T>>;

declare type awilix$InjectorFunction<T> = (container: awilix$Container<T>) => awilix$POJO<any>

declare interface awilix$Registration<T> {
  resolve(): T,

  lifetime: awilix$Lifetime,
  resolutionMode: awilix$ResolutionMode
}
