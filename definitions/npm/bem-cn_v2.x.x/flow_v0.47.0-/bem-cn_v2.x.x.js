// @flow

declare module "bem-cn" {
  declare type settings = {
    ns?: string,
    el?: string,
    mod?: string,
    modValue?: string,
    classMap?: Array<string>
  };

  declare export type Modifiers = { [string]: string | boolean };

  declare export function setup(settings: settings): void;

  declare export function reset(): void;

  declare export type BemFunction = InnerFunction & typeof ToStringFunction;

  // All checks for the additional properties do not seem to work.
  // Flow allows everything.
  declare type InnerFunction = {
    (nameOrModifiers: string | Modifiers, modifiers?: Modifiers): BemFunction,
    toString: ToStringFunction,
    mix(additionalClasses: string | Array<string>): BemFunction,
    has: typeof StateFunction,
    state: typeof StateFunction,
    is: typeof StateFunction,
    split: (separator?: string, limit?: number) => Array<string>
  };

  declare function StateFunction(state: { [string]: boolean }): BemFunction;

  declare function ToStringFunction(): string;

  declare export default function block(name: string): BemFunction;
}
