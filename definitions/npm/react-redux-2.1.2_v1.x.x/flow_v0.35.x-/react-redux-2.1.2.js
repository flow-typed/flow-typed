

declare module 'react-redux-2.1.2' {
					
}

declare module 'react-redux' {
		declare export interface ClassDecorator {
		(component: T): T
	}

	declare interface MapStateToProps {
		(state: any, ownProps?: any): any
	}

	declare interface MapDispatchToPropsFunction {
		(dispatch: Dispatch<any>, ownProps?: any): any
	}

	declare interface MapDispatchToPropsObject {
		[name: string]: ActionCreator<any>
	}

	declare interface MergeProps {
		(stateProps: any, dispatchProps: any, ownProps: any): any
	}

	declare interface Options {
		pure: boolean
	}

	declare export interface Property {
		store?: Store<any>,
		children?: Function
	}

	declare export function connect(
		mapStateToProps?: MapStateToProps, mapDispatchToProps?: MapDispatchToPropsFunction | MapDispatchToPropsObject, mergeProps?: MergeProps, options?: Options
	): ClassDecorator

	declare export class ElementClass extends Component<any, any> {
		
	}

	declare export class Provider extends Component<Property, {
		
	}> {
		
	}

	
}