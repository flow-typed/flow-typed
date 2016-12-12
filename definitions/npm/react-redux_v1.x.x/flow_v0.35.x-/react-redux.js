

declare module 'react-redux' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactRedux' {
	declare type ComponentClass<P> = ___React.ComponentClass<P>;

	declare type StatelessComponent<P> = ___React.StatelessComponent<P>;

	declare type ReactNode = ___React.ReactNode;

	declare type Store<S> = Redux.Store<S>;

	declare type Dispatch<S> = Redux.Dispatch<S>;

	declare type ActionCreator<A> = Redux.ActionCreator<A>;

	declare type FuncOrSelf<T> = T | (() => T);

	declare interface ComponentDecorator<TOriginalProps, TOwnProps> {
		(component: ComponentClass<TOriginalProps> | StatelessComponent<TOriginalProps>): ComponentClass<TOwnProps>
	}

	declare export interface InferableComponentDecorator {
		(component: TComponentConstruct): TComponentConstruct
	}

	declare interface MapStateToProps<TStateProps, TOwnProps> {
		(state: any, ownProps?: TOwnProps): TStateProps
	}

	declare interface MapDispatchToPropsFunction<TDispatchProps, TOwnProps> {
		(dispatch: Dispatch<any>, ownProps?: TOwnProps): TDispatchProps
	}

	declare interface MapDispatchToPropsObject {
		[name: string]: ActionCreator<any>
	}

	declare interface MergeProps<TStateProps, TDispatchProps, TOwnProps> {
		(stateProps: TStateProps, dispatchProps: TDispatchProps, ownProps: TOwnProps): TStateProps & TDispatchProps
	}

	declare interface Options {
		pure?: boolean,
		withRef?: boolean
	}

	declare export interface ProviderProps {
		store?: Store<any>,
		children?: ReactNode
	}

	declare export function connect(): InferableComponentDecorator

	declare export function connect<TStateProps, TDispatchProps, TOwnProps>(
		mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>, mapDispatchToProps?: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject>
	): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>

	declare export function connect<TStateProps, TDispatchProps, TOwnProps>(
		mapStateToProps: FuncOrSelf<MapStateToProps<TStateProps, TOwnProps>>, mapDispatchToProps: FuncOrSelf<MapDispatchToPropsFunction<TDispatchProps, TOwnProps> | MapDispatchToPropsObject>, mergeProps: MergeProps<TStateProps, TDispatchProps, TOwnProps>, options?: Options
	): ComponentDecorator<TStateProps & TDispatchProps, TOwnProps>

	declare export class Provider extends ___React$Component<ProviderProps, {
		
	}> {
		
	}

	
}