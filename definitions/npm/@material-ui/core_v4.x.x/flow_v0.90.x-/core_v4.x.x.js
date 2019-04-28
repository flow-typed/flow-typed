declare module "@material-ui/core/colors" {
  declare export { default as amber } from "@material-ui/core/colors/amber";
  declare export { default as blue } from "@material-ui/core/colors/blue";
  declare export { default as blueGrey } from "@material-ui/core/colors/blueGrey";
  declare export { default as brown } from "@material-ui/core/colors/brown";
  declare export { default as common } from "@material-ui/core/colors/common";
  declare export { default as cyan } from "@material-ui/core/colors/cyan";
  declare export { default as deepOrange } from "@material-ui/core/colors/deepOrange";
  declare export { default as deepPurple } from "@material-ui/core/colors/deepPurple";
  declare export { default as green } from "@material-ui/core/colors/green";
  declare export { default as grey } from "@material-ui/core/colors/grey";
  declare export { default as indigo } from "@material-ui/core/colors/indigo";
  declare export { default as lightBlue } from "@material-ui/core/colors/lightBlue";
  declare export { default as lightGreen } from "@material-ui/core/colors/lightGreen";
  declare export { default as lime } from "@material-ui/core/colors/lime";
  declare export { default as orange } from "@material-ui/core/colors/orange";
  declare export { default as pink } from "@material-ui/core/colors/pink";
  declare export { default as purple } from "@material-ui/core/colors/purple";
  declare export { default as red } from "@material-ui/core/colors/red";
  declare export { default as teal } from "@material-ui/core/colors/teal";
  declare export { default as yellow } from "@material-ui/core/colors/yellow";
}
declare module "@material-ui/core/colors/amber" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/blue" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/blueGrey" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/brown" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/common" {
  declare export type CommonColors = {|
    black: string,
    white: string
  |};

  declare export default CommonColors;
}
declare module "@material-ui/core/colors/cyan" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/deepOrange" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/deepPurple" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/green" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/grey" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/indigo" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/lightBlue" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/lightGreen" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/lime" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/orange" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/pink" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/purple" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/red" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/teal" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}
declare module "@material-ui/core/colors/yellow" {
  import type { Color } from "@material-ui/core";
  declare export default Color;
}

declare module "@material-ui/core/utils" {
  declare export * from "@material-ui/core/utils/helpers"
  declare export * from "@material-ui/core/utils/reactHelpers"
  declare export { default as requirePropFactory } from "@material-ui/core/utils/requirePropFactory";
  declare export { default as ownerWindow } from "@material-ui/core/utils/ownerWindow";
}

declare module "@material-ui/core/utils/helpers" {
  declare export type ChainedFunction = ((...args: Array<any>) => mixed) | void | null;

  declare export function capitalize(str: string): string;

  declare export function contains(obj: {}, pred: {}): boolean;

  declare export function createChainedFunction(...args: Array<ChainedFunction>): (...args: any[]) => mixed;
}

declare module "@material-ui/core/utils/ownerWindow" {
  // https://github.com/facebook/flow/blob/e812492d9f642c0345e70407e77d16768a55be81/lib/bom.js#L36
  declare type $Window = any;

  declare export default (node: Node, fallback?: $Window) => $Window;
}
declare module "@material-ui/core/utils/reactHelpers" {
  declare export type NamedMuiComponent = React$ComponentType<any> & { muiName: string };

  declare export type NamedMuiElement = {
    type: NamedMuiComponent,
    // TODO: need StandardProps
    props: any,
    key: string | number | null
  };

  declare export function isMuiElement(element: any, muiNames: Array<string>): boolean;

  declare export function setRef<T>(ref: React$Ref<T>, value: T | null): void;
}
declare module "@material-ui/core/utils/requirePropFactory" {
  declare export default (componentNameInError: string) => any;
}

declare module "@material-ui/core" {
  declare export type Color = {|
    "50": string,
    "100": string,
    "200": string,
    "300": string,
    "400": string,
    "500": string,
    "600": string,
    "700": string,
    "800": string,
    "900": string,
    A100: string,
    A200: string,
    A400: string,
    A700: string
  |};
}
