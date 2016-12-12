

declare module 'redux-action-utils' {
		declare export interface Action {
		type: string
	}

	declare export interface ActionCreator<T> {
		(...data: any[]): Action & T
	}

	declare export interface OptionsActionCreator<T> {
		(data: T): Action & T
	}

	declare export function actionCreator<T>(type: string, ...props: string[]): ActionCreator<T>

	declare export function actionCreator<T>(type: string, props: string[]): ActionCreator<T>

	declare export function optionsActionCreator<T>(type: string, ...props: string[]): OptionsActionCreator<T>

	declare export function optionsActionCreator<T>(type: string, props: string[]): OptionsActionCreator<T>

		
}