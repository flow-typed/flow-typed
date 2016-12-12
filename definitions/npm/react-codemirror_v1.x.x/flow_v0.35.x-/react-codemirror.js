import type { ReactCodeMirrorClass } from 'npm$namespace$ReactCodeMirror'

declare module 'react-codemirror' {
					declare module.exports: ReactCodeMirrorClass


}

declare module 'npm$namespace$ReactCodeMirror' {
		declare interface ReactCodeMirrorProps {
		onChange?: (newValue: string) => any,
		onFocusChange?: (focused: boolean) => any,
		onScroll?: (scrollInfo: CodeMirror.ScrollInfo) => any,
		options?: CodeMirror.EditorConfiguration,
		path?: string,
		value?: string,
		className?: string,
		codeMirrorInstance?: CodeMirror.Editor
	}

	declare interface ReactCodeMirror {
		focus(): void,
		getCodeMirror(): CodeMirror.Editor
	}

	declare interface ReactCodeMirrorClass {
		
	}

			
}