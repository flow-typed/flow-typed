

declare module 'redux-form' {
	declare export type FieldValue = any;

	declare export type FormData = {
		[fieldName: string]: FieldValue
	};

	declare export type Normalizer = (
		value: FieldValue, previousValue: FieldValue, allValues: FormData, previousAllValues: FormData
	) => any;

	declare export interface FieldProp {
		active: boolean,
		checked?: boolean,
		dirty: boolean,
		error?: any,
		initialValue: FieldValue,
		invalid: boolean,
		name: string,
		onBlur(eventOrValue: SyntheticEvent | FieldValue): void,
		onChange(eventOrValue: SyntheticEvent | FieldValue): void,
		onDragStart(): void,
		onDrop(): void,
		onFocus(): void,
		onUpdate(): void,
		pristine: boolean,
		touched: boolean,
		valid: boolean,
		value: FieldValue,
		visited: boolean
	}

	declare export interface ReduxFormProps {
		active?: string,
		asyncValidate?: Function,
		asyncValidating?: boolean,
		destroyForm(): void,
		dirty?: boolean,
		error?: any,
		fields?: {
		[field: string]: FieldProp
	},
		handleSubmit(event: SyntheticEvent): void,
		handleSubmit(
		submit: (data: FormData, dispatch?: Dispatch<any>) => Promise<any> | void
	): FormEventHandler,
		initializeForm(data: FormData): void,
		invalid?: boolean,
		pristine?: boolean,
		resetForm(): void,
		formKey?: string,
		submitting?: boolean,
		submitFailed?: boolean,
		touch(...field: string[]): void,
		touchAll(): void,
		untouch(...field: string[]): void,
		untouchAll(): void,
		valid?: boolean,
		values?: FormData
	}

	declare interface ClassDecorator {
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

	declare export interface ReduxFormConfig {
		fields: string[],
		form: string,
		alwaysAsyncValidate?: boolean,
		asyncBlurFields?: string[],
		asyncValidate(values: FormData, dispatch: Dispatch<any>, props: Object): Promise<any>,
		destroyOnUnmount?: boolean,
		formKey?: string,
		getFormState(state: any, reduxMountPoint: string): any,
		initialValues?: {
		[field: string]: FieldValue
	},
		onSubmit(values: FormData, dispatch?: Dispatch<any>): any,
		overwriteOnInitialValuesChange?: boolean,
		propNamespace?: string,
		readonly?: boolean,
		reduxMountPoint?: string,
		returnRejectedSubmitPromise?: boolean,
		touchOnBlur?: boolean,
		touchOnChange?: boolean,
		validate(values: FormData, props: {
		[fieldName: string]: FieldProp
	}): Object
	}

	declare export function reduxForm(
		config: ReduxFormConfig, mapStateToProps?: MapStateToProps, mapDispatchToProps?: MapDispatchToPropsFunction | MapDispatchToPropsObject
	): ClassDecorator

	declare class ElementClass extends Component<any, any> {
		
	}

	
}