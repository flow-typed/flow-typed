

declare module 'react-side-effect' {
		declare interface ClassDecorator {
		(component: T): T
	}

	declare function withSideEffect(
		reducePropsToState: (propsList: any[]) => any, handleStateChangeOnClient: (state: any) => any, mapStateOnServer?: (state: any) => any
	): ClassDecorator

	declare class ElementClass extends React$Component<any, any> {
		
	}

	declare module.exports: undefined


}