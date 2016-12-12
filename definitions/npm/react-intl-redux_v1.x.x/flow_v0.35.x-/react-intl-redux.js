

declare module 'react-intl-redux' {
		declare interface IntlState {
		locale: string,
		messages: any
	}

	declare interface IntlAction {
		payload?: IntlState
	}

	declare export function intlReducer(state: IntlState, action: IntlAction): IntlState

	declare export function updateIntl(opts: IntlState): IntlAction

	declare export class IntlProvider extends ReactIntlProvider {
		
	}

	declare export class Provider extends ReduxProvider {
		
	}

	
}