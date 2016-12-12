

declare module 'NProgress' {
		declare interface NProgressStatic {
		start(): NProgressStatic,
		done(forceShow?: boolean): NProgressStatic,
		inc(): NProgressStatic,
		inc(amount: number): NProgressStatic,
		remove(): void,
		set(progressPercent: number): NProgressStatic,
		configure(options: NProgressConfigureOptions): NProgressStatic,
		version: string,
		status: any,
		isStarted(): boolean
	}

	declare interface NProgressConfigureOptions {
		parent?: string,
		minimum?: number,
		trickleSpeed?: number,
		showSpinner?: boolean,
		trickle?: boolean,
		easing?: string,
		speed?: number,
		template?: string
	}

			
}

declare module 'nprogress' {
					declare module.exports: undefined


}