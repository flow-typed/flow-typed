declare module 'awilix' {
  declare module .exports: {
    createContainer(?ContainerOptions): Container<{}>,
    ResolutionMode: Class<ResolutionMode>,
    Lifetime: Class<Lifetime>,
    asValue: asValue,
    asClass: asClass,
    asFunction: asFunction,
    AwilixResolutionError: ResolutionError,
    listModules: listModules,

  }
}

declare class ResolutionError extends Error {

}

declare type POJO<T> = {
  [string]: T
};

declare type listModules = (globPatterns: string | string[] | Array<LoadModulesTuple<*>>, options?: LoadModulesOptions<*>) => ModuleDescriptor[];

declare type $Return<F> = $Call<(<V>(() => V) => V), F>;

declare class Container<R> {
  cradle: R;
  registrations: Registration<$Values<R>>[];
  options: ContainerOptions;

  createScope(): Container<R>;

  register<Name: string, T>(name: Name, registration: Registration<T>): MergedRegistrations<R, { [Name]: T }>;

  register<RegistrationMap: *>(registrations: RegistrationMap, opts?: ContainerRegOptions<RegistrationMap>): MergedRegistrations<R, RegistrationMap>;

  registerClass<T>(className: Class<T>): Container<R & { [$PropertyType<Class<T>, 'name'>]: T }>;
  registerClass<T, Name: string>(name: Name, clazz: Class<T>, opts?: ContainerRegOptions<T>): Container<{ [Name]: T } & R>;
  registerClass<T, Name: string>(name: Name, ctorAndOptionsPair: [Class<T>, ContainerRegOptions<T>]): Container<{ [Name]: T } & R>;
  registerClass<T>([Class<T>, ContainerRegOptions<T>]): Container<{ [$PropertyType<Class<T>, 'name'>]: T } & R>;


  registerFunction<F: () => *>(fn: F, opts?: ContainerRegOptions<$Return<F>>): Container<{ [$PropertyType<F, 'name'>]: $Return<F> } & R>;
  registerFunction<F: () => *>(fn: F, opts?: ContainerRegOptions<$Return<F>>): Container<{ [$PropertyType<F, 'name'>]: $Return<F> } & R>;
  registerFunction<Name:string, F: () => *>(name: Name, fn: F, opts?: ContainerRegOptions<$Return<F>>): Container<{ [Name]: $Return<F> } & R>;
  registerFunction<Name:string, F: () => *>(name: string, funcAndOptionsPair: [Function, ContainerRegOptions<$Return<F>>]): Container<{ [Name]: $Return<F> } & R>;
  registerFunction<F: () => *, RegistrationMap: {
    [string]: F | [F, ContainerRegOptions<$Return<F>>]
  }>(RegistrationMap): MergedRegistrations<R, $ObjMap<RegistrationMap, (<V>(() => V) => V)>>;

  registerValue<Name: string, T>(name: Name, value: T): Container<{ [Name]: T } & R>;
  registerValue<Registrations: { [string]: * }>(Registrations): Container<Registrations & R>;

  resolve<Name:string>(name: Name): $ElementType<R, Name>;

  loadModules(globPatterns: string[] | Array<LoadModulesTuple<*>>, options?: LoadModulesOptions<*>): Container<R>;

  build<T:Function>(target: T | Registration<T>): $Return<T>;
  build<T>(target: Class<T> | Registration<T>): $Return<T>;

}

declare type LoadModulesTuple<T> = [string] | [string, ContainerRegOptions<T>];
declare type LoadModulesOptions<T> = {
  cwd?: string,
  formatName?: NameFormatter | BuiltInNameFormatters,
  registrationOptions?: ContainerRegOptions<T>,
}

declare type ModuleDescriptor = {
  name: string,
  path: string
};

declare type BuiltInNameFormatters = 'camelCase';
declare type NameFormatter = (name: string, descriptor: ModuleDescriptor) => string

declare interface AsProviderFunction {
}

declare interface asFunction extends AsProviderFunction {
  $call: <F: () => *>(fn: F, options?: ContainerRegOptions<$Return<F>>) => FluidRegistration<$Return<F>>;
}

declare interface asValue extends AsProviderFunction {
  $call: <T>(val: T, options?: ContainerRegOptions<T>) => Registration<T>;
}

declare interface asClass extends AsProviderFunction {
  $call: <T>(type: Class<T>, options?: ContainerRegOptions<T>) => FluidRegistration<T>
}

declare interface FluidRegistration<T> extends Registration<T> {
  singleton(): FluidRegistration<T>;

  scoped(): FluidRegistration<T>;

  transient(): FluidRegistration<T>;

  proxy(): FluidRegistration<T>;

  classic(): FluidRegistration<T>;

  inject<R>(injector: InjectorFunction<R>): FluidRegistration<T>;
}

declare type ContainerOptions = {|
  require?: typeof require;
  resolutionMode ?: ResolutionMode
|}

declare type ContainerRegOptions<T> = string | {|
  name?: string,
  lifetime?: Lifetime,
  resolutionMode?: ResolutionMode,
  injector?: InjectorFunction<T>,
  register?: AsProviderFunction
|}

declare class Lifetime {
  static SCOPED: Lifetime,
  static SINGLETON: Lifetime,
  static TRANSIENT: Lifetime,
}

declare class ResolutionMode {
  static PROXY: ResolutionMode,
  static CLASSIC: ResolutionMode,
}

declare type MergedRegistrations<T1, T2> = Container<T1 & $ObjMap<T2, <T>(Registration<T>) => T>>;

declare type InjectorFunction<T> = (container: Container<T>) => POJO<any>

declare interface Registration<T> {
  resolve(): T,

  lifetime: Lifetime,
  resolutionMode: ResolutionMode
}
