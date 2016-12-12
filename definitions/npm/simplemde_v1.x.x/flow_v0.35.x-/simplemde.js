

declare module 'simplemde' {
				declare class SimpleMDE  {
		constructor(): this;
		constructor(options: SimpleMDE.Options): this;
		value(): string;
		value(val: string): void;
		codemirror: any;
		toTextArea(): void;
		isPreviewActive(): boolean;
		isSideBySideActive(): boolean;
		isFullscreenActive(): boolean;
		clearAutosavedValue(): void;
		toggleBold: (editor: SimpleMDE) => void;
		toggleItalic: (editor: SimpleMDE) => void;
		toggleStrikethrough: (editor: SimpleMDE) => void;
		toggleHeadingSmaller: (editor: SimpleMDE) => void;
		toggleHeadingBigger: (editor: SimpleMDE) => void;
		toggleHeading1: (editor: SimpleMDE) => void;
		toggleHeading2: (editor: SimpleMDE) => void;
		toggleHeading3: (editor: SimpleMDE) => void;
		toggleCodeBlock: (editor: SimpleMDE) => void;
		toggleBlockquote: (editor: SimpleMDE) => void;
		toggleUnorderedList: (editor: SimpleMDE) => void;
		toggleOrderedList: (editor: SimpleMDE) => void;
		cleanBlock: (editor: SimpleMDE) => void;
		drawLink: (editor: SimpleMDE) => void;
		drawImage: (editor: SimpleMDE) => void;
		drawTable: (editor: SimpleMDE) => void;
		drawHorizontalRule: (editor: SimpleMDE) => void;
		togglePreview: (editor: SimpleMDE) => void;
		toggleSideBySide: (editor: SimpleMDE) => void;
		toggleFullScreen: (editor: SimpleMDE) => void;
		undo: (editor: SimpleMDE) => void;
		redo: (editor: SimpleMDE) => void
	}

	
}

declare module 'npm$namespace$SimpleMDE' {
		declare interface AutoSaveOptions {
		enabled?: boolean,
		delay?: number,
		uniqueId: string
	}

	declare interface BlockStyleOptions {
		bold?: string,
		code?: string,
		italic?: string
	}

	declare interface InsertTextOptions {
		horizontalRule?: string[],
		image?: string[],
		link?: string[],
		table?: string[]
	}

	declare interface ParsingOptions {
		allowAtxHeaderWithoutSpace?: boolean,
		strikethrough?: boolean,
		underscoresBreakWords?: boolean
	}

	declare interface RenderingOptions {
		singleLineBreaks?: boolean,
		codeSyntaxHighlighting: boolean
	}

	declare interface ShortcutsArray {
		[action: string]: string,
		toggleBlockquote?: string,
		toggleBold?: string,
		cleanBlock?: string,
		toggleHeadingSmaller?: string,
		toggleItalic?: string,
		drawLink?: string,
		toggleUnorderedList?: string,
		togglePreview?: string,
		toggleCodeBlock?: string,
		drawImage?: string,
		toggleOrderedList?: string,
		toggleHeadingBigger?: string,
		toggleSideBySide?: string,
		toggleFullScreen?: string
	}

	declare interface StatusBarItem {
		className: string,
		defaultValue: (element: HTMLElement) => void,
		onUpdate: (element: HTMLElement) => void
	}

	declare interface ToolbarIcon {
		name: string,
		action: string | ((editor: SimpleMDE) => void),
		className: string,
		title: string
	}

	declare interface Options {
		autoDownloadFontAwesome?: boolean,
		autofocus?: boolean,
		autosave?: AutoSaveOptions,
		blockStyles?: BlockStyleOptions,
		element?: HTMLElement,
		forceSync?: boolean,
		hideIcons?: string[],
		indentWithTabs?: boolean,
		initialValue?: string,
		insertTexts?: InsertTextOptions,
		lineWrapping?: boolean,
		parsingConfig?: ParsingOptions,
		placeholder?: string,
		previewRender?: (markdownPlaintext: string, previewElement?: HTMLElement) => string,
		promptURLs?: boolean,
		renderingConfig?: RenderingOptions,
		shortcuts?: ShortcutsArray,
		showIcons?: string[],
		spellChecker?: boolean,
		status?: boolean | Array<string | StatusBarItem>,
		styleSelectedText?: boolean,
		tabSize?: number,
		toolbar?: boolean | Array<string | ToolbarIcon>,
		toolbarTips?: boolean
	}

			
}