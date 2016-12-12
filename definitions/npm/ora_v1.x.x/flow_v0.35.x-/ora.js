

declare module 'ora' {
	declare type Color = "black" | "red" | "green" | "yellow" | "blue" | "magenta" | "cyan" | "white" | "gray";

	declare type Text = string;

	declare interface Options {
		text?: Text,
		spinner?: string | Spinner,
		color?: Color,
		interval?: number,
		stream?: NodeJS.WritableStream,
		enabled?: boolean
	}

	declare interface Spinner {
		interval?: number,
		frames: string[]
	}

	declare interface Instance {
		start(): Instance,
		stop(): Instance,
		succeed(): Instance,
		fail(): Instance,
		stopAndPersist(symbol?: string): Instance,
		clear(): Instance,
		render(): Instance,
		frame(): Instance,
		text: string,
		color: Color
	}

	declare function ora(options: Options | Text): Instance

		declare module.exports: undefined


}