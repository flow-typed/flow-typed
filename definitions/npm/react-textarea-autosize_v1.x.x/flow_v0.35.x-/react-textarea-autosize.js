

declare module 'react-textarea-autosize' {
		declare export interface TextareaAutosizeProps {
		value?: string,
		onChange?: (event: React.FormEvent) => void,
		onHeightChange?: (height: number) => void,
		useCacheForDOMMeasurements?: boolean,
		rows?: number,
		minRows?: number,
		maxRows?: number
	}

		declare export default class TextareaAutosize extends React$Component<TextareaAutosizeProps, any> {
		
	}

	
}