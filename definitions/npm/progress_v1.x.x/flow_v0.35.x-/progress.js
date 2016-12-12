

declare module 'progress' {
		declare interface ProgressJsStatic {
		(targetElm?: string): ProgressJs
	}

	declare interface ProgressJs {
		start(): ProgressJs,
		set(percent: number): ProgressJs,
		autoIncrease(size: number, millisecond: number): ProgressJs,
		increase(size?: number): ProgressJs,
		end(): ProgressJs,
		setOption(option: string, value: string): ProgressJs,
		setOption(option: string, value: boolean): ProgressJs,
		setOptions(options: ProgressJsOptions): ProgressJs,
		onbeforeend(providedCallback: () => any): ProgressJs,
		onbeforestart(providedCallback: () => any): ProgressJs,
		onprogress(providedCallback: (targetElement: string, percent: number) => any): ProgressJs
	}

	declare interface ProgressJsOptions {
		theme?: string,
		overlayMode?: boolean,
		considerTransition?: boolean
	}

			
}