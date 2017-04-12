// @flow

declare module angular {

  // I'm not sure how represent this properly: Angular DI declarations are a
  // list of strings with a single function at the end. The function can vary,
  // so it is a type param.
  declare type $npm$angular$DependencyInjection<T> = Array<string | T>

  // Extending Array<Element> allows us to do the `jq[0]` expression and friends
  // to get the actual underlying Element.
  declare interface JqliteElement extends Array<Element> {
    remove: () => JqliteElement,
    contents: () => JqliteElement,
  }

  declare function $npm$angular$LinkFunction(
    scope: mixed,
    element: JqliteElement,
    attrs: mixed,
    controller: mixed
  ): void

  declare type Link = {
    post?: $npm$angular$LinkFunction,
    pre?: $npm$angular$LinkFunction,
  }

  // TODO: Attrs and controller should be properly typed.
  declare function CompileFunction(
    element: JqliteElement,
    attrs: mixed,
    controller: mixed
  ): Link

  // TODO: Expand to cover the whole matrix of AECM, in any order. Probably
  // should write something to handle it.
  declare type DirectiveRestrict = 'A' | 'E' | 'AE' | 'EA'
  declare type Directive = {
    restrict?: string,
    template?: string,
    templateUrl?: string,
    scope?: mixed,
    controller?: $npm$angular$DependencyInjection<*>,
    link?: $npm$angular$LinkFunction,
    // TODO: flesh out this definition
    compile?: (...a: any) => Link,
  }

  declare type DirectiveDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: any) => Directive>,
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
    di: $npm$angular$DependencyInjection<(...a: any) => Object>,
  ) => AngularModule

  declare type ServiceDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<(...a: any) => Function>,
  ) => AngularModule

  declare type RunDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<void>,
  ) => AngularModule

  declare type ValueDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<Object>,
  ) => AngularModule

  declare type ConstantDeclaration = (
    name: string,
    di: $npm$angular$DependencyInjection<Object>,
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

  declare function element(html: string): JqliteElement


  declare type AngularResource = {
    $promise: AngularPromise<*, *>,
  }

  declare type AngularPromise<T, U> = {
    then: (a: (resolve: U) => T) => AngularPromise<*, *>,
    catch: (a: (b: typeof Error) => typeof Error) => AngularPromise<*, *>,
    finally: (a: (result: U | typeof Error) => T) => AngularPromise<*, *>,
  }

  declare type AngularResourcePromise<T, U> = {
    $promise: AngularPromise<T, U>,
  }

  declare function AngularHttpPost<T, U>(url: string, data: mixed):
    AngularPromise<T, U>

  //----------------------------------------------------------------------------
  // Service specific stuff
  //----------------------------------------------------------------------------

  declare function CompileService(
    a: JqliteElement
  ): JqliteElement
}
