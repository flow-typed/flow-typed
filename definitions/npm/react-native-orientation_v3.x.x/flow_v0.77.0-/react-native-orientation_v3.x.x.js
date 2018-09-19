// @flow

declare module "react-native-orientation" {
  declare export type Orientations =
    | "LANDSCAPE"
    | "PORTRAIT"
    | "PORTRAITUPSIDEDOWN"
    | "UNKNOWN";

  declare export type SpecificOrientations =
    | "LANDSCAPE-LEFT"
    | "LANDSCAPE-RIGHT"
    | "PORTRAIT"
    | "PORTRAITUPSIDEDOWN"
    | "UNKNOWN";

  declare export type CallbackFn = <ReturnValue>(
    error: ?Error,
    payload?: ReturnValue
  ) => void;

  declare export type HandlerFn = <ReturnValue>(payload?: ReturnValue) => void;

  declare module.exports: {
    getInitialOrientation(): ?Orientations,
    getOrientation(callback: CallbackFn<Orientations>): void,
    getSpecificOrientation(callback: CallbackFn<SpecificOrientations>): void,
    lockToPortrait(): void,
    lockToLandscape(): void,
    lockToLandscapeRight(): void,
    lockToLandscapeLeft(): void,
    unlockAllOrientations(): void,
    addOrientationListener(handler: HandlerFn<Orientations>): void,
    removeOrientationListener(handler: HandlerFn<Orientations>): void,
    addSpecificOrientationListener(
      handler: HandlerFn<SpecificOrientations>
    ): void,
    removeSpecificOrientationListener(
      handler: HandlerFn<SpecificOrientations>
    ): void
  };
}
