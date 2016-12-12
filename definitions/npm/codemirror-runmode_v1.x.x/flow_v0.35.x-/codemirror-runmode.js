

declare module 'codemirror-runmode' {
					
}

declare module 'npm$namespace$CodeMirror' {
			declare function runMode(
		text: string, modespec: any, callback: (HTMLElement | ((text: string, style: string) => void)), options?: {
		tabSize?: number,
		state?: any
	}
	): void

		
}