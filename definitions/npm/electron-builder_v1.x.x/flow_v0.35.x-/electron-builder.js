

declare module 'electron-builder' {
		declare interface NodeRequireFunction {
		(id: "electron-builder"): {
		init(): ElectronBuilder.Builder
	}
	}

	declare export function init(): ElectronBuilder.Builder

		
}

declare module 'npm$namespace$ElectronBuilder' {
		declare export interface Options {
		appPath: string,
		platform: string,
		config: string | Config,
		out?: string
	}

	declare export interface Config {
		osx: {
		title: string,
		background: string,
		icon: string,
		icon-size: number,
		contents: [OsxContents, OsxContents]
	},
		win: {
		title: string,
		icon: string
	}
	}

	declare export interface OsxContents {
		x: number,
		y: number,
		type: string,
		path?: string
	}

	declare export interface Callback {
		(err: Error): void
	}

	declare export interface Builder {
		build(opts: Options, callback: Callback): void
	}

			
}