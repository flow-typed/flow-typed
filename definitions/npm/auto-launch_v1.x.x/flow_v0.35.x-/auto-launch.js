

declare module 'auto-launch' {
		declare interface AutoLaunchOption {
		name: string,
		isHidden?: boolean,
		path?: string
	}

		declare class AutoLaunch  {
		constructor(opts: AutoLaunchOption): this;
		enable(callback?: (err: Error) => void): void;
		disable(callback?: (err: Error) => void): void;
		isEnabled(callback: (enabled: boolean) => void): void
	}

	declare module.exports: undefined


}