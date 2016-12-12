

declare module 'three-vrcontrols' {
					
}

declare module 'npm$namespace$THREE' {
				declare export class VRControls  {
		constructor(camera: Camera, callback?: (param: string) => void): this;
		update(): void;
		zeroSensor(): void;
		scale: number;
		setVRDisplay(display: VRDisplay): void
	}

	
}