declare module "react-native-orientation-locker" {
  declare export type Orientations =
    | "PORTRAIT"
    | "LANDSCAPE-LEFT"
    | "LANDSCAPE-RIGHT"
    | "PORTRAIT-UPSIDEDOWN" //  not support at iOS now
    | "UNKNOWN";

  declare class Orientation {
    static addOrientationListener((payload: Orientations) => void): void;
    static removeOrientationListener((payload: Orientations) => void): void;

    static getInitialOrientation(): Orientations;

    static getOrientation((payload: Orientations) => void): void;

    static lockToLandscape(): void;
    static lockToLandscapeLeft(): void;
    static lockToLandscapeRight(): void;
    static lockToPortrait(): void;
    static lockToPortraitUpsideDown(): void;

    static unlockAllOrientations(): void;
  }

  declare export default typeof Orientation;
}
