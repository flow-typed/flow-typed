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

  declare module.exports: {
    getInitialOrientation(): ?Orientations,
    getOrientation((error: ?Error, payload?: Orientations) => void): void,
    getSpecificOrientation(
      (error: ?Error, payload?: SpecificOrientations) => void
    ): void,
    lockToPortrait(): void,
    lockToLandscape(): void,
    lockToLandscapeRight(): void,
    lockToLandscapeLeft(): void,
    unlockAllOrientations(): void,
    addOrientationListener((payload?: Orientations) => void): void,
    removeOrientationListener((payload?: Orientations) => void): void,
    addSpecificOrientationListener(
      (payload?: SpecificOrientations) => void
    ): void,
    removeSpecificOrientationListener(
      (payload?: SpecificOrientations) => void
    ): void
  };
}
