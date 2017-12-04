// @flow

/**
 * Credit to @faceleg for some of the typedefs seen here:
 * https://github.com/solnet-aquarium/flow-interfaces-angular/blob/master/interfaces/angular.js
 */

declare module angular {

  // I'm not sure how represent this properly: Angular DI declarations are a
  // list of strings with a single function at the end. The function can vary,
  // so it is a type param.
  declare type $npm$angular$DependencyInjection<T> = Array<string | T>

  // Extending Array<Element> allows us to do the `jq[0]` expression and friends
  // to get the actual underlying Element.
  // TODO: This is supposed to be interchangeable with JQuery. Can we possibly
  // check to see if JQuery's types are already defined?
  declare interface JqliteElement extends Array<Element> {
    remove: () => JqliteElement,
    contents: () => JqliteElement,
    injector: Function,
  }

  declare function AngularLinkFunction(
    scope: mixed,
    element: JqliteElement,
    attrs: mixed,
    controller: mixed
  ): void

  declare type AngularCompileLink = {
    post?: AngularLinkFunction,
    pre?: AngularLinkFunction,
  }

  // TODO: Attrs and controller should be properly typed.
  declare function CompileFunction(
    element: JqliteElement,
    attrs: mixed,
    controller: mixed
  ): AngularLinkFunction

  // TODO: Expand to cover the whole matrix of AECM, in any order. Probably
  // should write something to handle it.
  declare type DirectiveRestrict = 'A' | 'E' | 'AE' | 'EA'
  declare type Directive = {
    restrict?: string,
    template?: string,
    templateUrl?: string,
    scope?: mixed,
    controller?: $npm$angular$DependencyInjection<*>,
    link?: AngularLinkFunction,
    // TODO: flesh out this definition
    compile?: (...a: any) => AngularCompileLink,
  }

  declare type DirectiveDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<mixed>) => Directive>,
  ) => AngularModule


  declare type ControllerDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<*>,
  ) => AngularModule


  declare type ConfigDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<*>,
  ) => AngularModule

  declare type FactoryDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<mixed>) => Object>,
  ) => AngularModule

  declare type ServiceDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<mixed>) => Function>,
  ) => AngularModule

  declare type RunDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<void>,
  ) => AngularModule

  declare type ValueDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<mixed>) => Object>,
  ) => AngularModule

  declare type ConstantDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: Array<mixed>) => Object>,
  ) => AngularModule

  declare type AngularModule = {
    controller: ControllerDeclaration,
    directive: DirectiveDeclaration,
    run: RunDeclaration,
    config: ConfigDeclaration,
    factory: FactoryDeclaration,
    service: ServiceDeclaration,
    value: ValueDeclaration,
    constant: ConstantDeclaration,
    name: string,
  }

  declare type Dependency = AngularModule | string

  declare function module(
    name: string,
    deps: ?Array<Dependency>
  ): AngularModule

  declare function element(html: string | Element): JqliteElement
  declare function copy<T>(object: T): T
  declare function extend<T>(dst: T, src: Object): T
  declare function forEach<T>(obj: Array<T>, iterator: (value: T, key: string) => void): void


  declare type AngularQ = {
    when: <T>(value: T) => AngularPromise<T>,
  }

  declare type AngularPromise<T> = {
    then: <U>(a: (resolve: U) => T) => AngularPromise<*>,
    catch: <U>(a: (e: Error) => U) => AngularPromise<*>,
    finally: <U>(a: (result: U | typeof Error) => T) => AngularPromise<*>,
  }

  //****************************************************************************
  // Angular testing tools
  //****************************************************************************

  declare type AngularMock = {
    inject: (...a: Array<mixed>) => Function,
  }
  declare var mock: AngularMock

  //----------------------------------------------------------------------------
  // Service specific stuff
  //----------------------------------------------------------------------------

  declare type AngularHttpService = {
    post: AngularHttpPost<*>
  }

  declare function AngularHttpPost<T>(url: string, data: mixed):
  AngularPromise<T>

  declare type AngularResourceResult<T> = {
    $promise: AngularPromise<T>,
  }

  declare type AngularResource = {
    get: <T>(options?: Object, callback?: Function) => AngularResourceResult<T>,
  }

  declare function AngularResourceFactory(
    url: string,
    defaultParams?: Object,
    actions?: Object,
    options?: Object,
  ): AngularResource

  declare function AngularCompileService(
    a: JqliteElement
  ): JqliteElement

  declare type WatchExpression<T> = string | ((scope: $Scope<T>) => any);
  declare type EvalExpression = string | (() => void);
  declare type ApplyExpression = string | (() => void);
  declare type Listener<T> = (
    newValue: *,
    oldValue: *,
    $scope: $Scope<T>
  ) => any;

  declare type _Watch1<T> = (
    expression: WatchExpression<T>,
    listener: Listener<T>,
    objectEquality?: boolean
  ) => () => void;
  declare type _Watch2<T> = (
    listener: Listener<T>,
    objectEquality?: boolean
  ) => () => void;

  declare type $Scope<T: Object> = {|
    $new(isolate: boolean, parent: $Scope<T>): $Scope<T>,
    $watch: _Watch1<T> & _Watch2<T>,
    $watchGroup(
      expressions: Array<WatchExpression<T>>,
      listener: Listener<T>
    ): () => void,
    $watchCollection(
      expression: WatchExpression<T>,
      listener: Listener<T>
    ): () => void,
    $digest(): void,
    $destroy(): void,
    $eval(expression: EvalExpression, locals?: Object): void,
    $evalAsync(expression: EvalExpression, locals?: Object): void,
    $apply(expression?: ApplyExpression): void,
    $applyAsync(expression?: ApplyExpression): void,
    $on(name: string, listener: (event: *, ...Array<*>) => void): () => void,
    $emit(name: string, ...Array<*>): void,
    $broadcast(name: string, ...Array<*>): void,

    $$postDigest(cb: () => void): void,

    $id: string,
    $parent: $Scope<*>,
    $root: $Scope<*>
  |} & T;
}
