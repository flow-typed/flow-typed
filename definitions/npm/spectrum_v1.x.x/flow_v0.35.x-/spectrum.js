

declare module 'spectrum' {
		declare interface JQuery {
		spectrum(methodName: "show"): JQuery,
		spectrum(methodName: "hide"): JQuery,
		spectrum(methodName: "toggle"): JQuery,
		spectrum(methodName: "get"): tinycolorInstance,
		spectrum(methodName: "set", colorString?: string): JQuery,
		spectrum(methodName: "container"): JQuery,
		spectrum(methodName: "reflow"): JQuery,
		spectrum(methodName: "destroy"): JQuery,
		spectrum(methodName: "enable"): JQuery,
		spectrum(methodName: "disable"): JQuery,
		spectrum(methodName: "option", optionName?: string): JQuery,
		spectrum(methodName: "option", optionName?: string, newOptionValue?: any): JQuery,
		spectrum(methodName: string): any,
		spectrum(options?: Spectrum.Options): JQuery,
		on(
		events: "dragstart.spectrum", handler: (eventObject: JQueryEventObject, color: tinycolorInstance) => any
	): JQuery,
		on(
		events: "dragstop.spectrum", handler: (eventObject: JQueryEventObject, color: tinycolorInstance) => any
	): JQuery
	}

			
}

declare module 'npm$namespace$Spectrum' {
		declare interface Options {
		color?: string,
		flat?: boolean,
		showInput?: boolean,
		showInitial?: boolean,
		allowEmpty?: boolean,
		showAlpha?: boolean,
		disabled?: boolean,
		palette?: string[][],
		showPalette?: boolean,
		showPaletteOnly?: boolean,
		togglePaletteOnly?: boolean,
		togglePaletteMoreText?: string,
		togglePaletteLessText?: string,
		hideAfterPaletteSelect?: boolean,
		showSelectionPalette?: boolean,
		localStorageKey?: string,
		clickoutFiresChange?: boolean,
		cancelText?: string,
		chooseText?: string,
		containerClassName?: string,
		replacerClassName?: string,
		preferredFormat?: string,
		showButtons?: boolean,
		appendTo?: any,
		maxSelectionSize?: number,
		selectionPalette?: string[],
		change?: (color: tinycolorInstance) => void,
		move?: (color: tinycolorInstance) => void,
		show?: (color: tinycolorInstance) => void,
		hide?: (color: tinycolorInstance) => void,
		beforeShow?: (color: tinycolorInstance) => void
	}

			
}