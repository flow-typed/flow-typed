

declare module 'react-autosuggest' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactAutosuggest' {
		declare interface SuggestionUpdateRequest {
		value: string,
		reason: string
	}

	declare interface InputValues {
		value: string,
		valueBeforeUpDown?: string
	}

	declare interface InputProps {
		value: string,
		onChange: (
		event: React.FormEvent, params?: {
		newValue: string,
		method: string
	}
	) => void
	}

	declare interface ExplicitSuggestionSelectedEventData<TSuggestion> {
		method: string,
		sectionIndex: number,
		suggestion: TSuggestion,
		suggestionValue: string
	}

	declare interface SuggestionSelectedEventData {
		
	}

	declare interface Theme {
		container: string,
		containerOpen: string,
		input: string,
		sectionContainer: string,
		sectionSuggestionsContainer: string,
		sectionTitle: string,
		suggestion: string,
		suggestionFocused: string,
		suggestionsContainer: string
	}

	declare interface AutosuggestProps {
		suggestions: any[],
		onSuggestionsUpdateRequested?: (request: SuggestionUpdateRequest) => void,
		getSuggestionValue: (suggestion: any) => string,
		renderSuggestion: (suggestion: any, inputValues: InputValues) => JSX.Element,
		inputProps: InputProps,
		shouldRenderSuggestions?: (value: string) => boolean,
		multiSection?: boolean,
		renderSectionTitle?: (section: any, inputValues: InputValues) => JSX.Element,
		getSectionSuggestions?: (section: any) => any[],
		onSuggestionSelected?: (
		event: React.FormEvent, data: SuggestionSelectedEventData | ExplicitSuggestionSelectedEventData<any>
	) => void,
		focusInputOnSuggestionClick?: boolean,
		theme?: Theme,
		id?: string
	}

		declare class Autosuggest extends React$Component<AutosuggestProps, any> {
		
	}

	
}