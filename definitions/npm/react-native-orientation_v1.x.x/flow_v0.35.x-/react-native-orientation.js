

declare module 'react-native-orientation' {
					declare module.exports: undefined


}

declare module 'Orientation' {
	declare type orientation = "LANDSCAPE" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";

	declare type specificOrientation = "LANDSCAPE-LEFT" | "LANDSCAPE-RIGHT" | "PORTRAIT" | "UNKNOWN" | "PORTRAITUPSIDEDOWN";

		declare export function addOrientationListener(callback: (orientation: orientation) => void): void

	declare export function removeOrientationListener(callback: (orientation: orientation) => void): void

	declare export function addSpecificOrientationListener(callback: (specificOrientation: specificOrientation) => void): void

	declare export function removeSpecificOrientationListener(callback: (specificOrientation: specificOrientation) => void): void

	declare export function getInitialOrientation(): orientation

	declare export function lockToPortrait(): void

	declare export function lockToLandscape(): void

	declare export function lockToLandscapeLeft(): void

	declare export function lockToLandscapeRight(): void

	declare export function unlockAllOrientations(): void

	declare export function getOrientation(callback: (err: Error, orientation: orientation) => void): void

	declare export function getSpecificOrientation(callback: (err: Error, orientation: specificOrientation) => void): void

		
}