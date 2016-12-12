

declare module 'react-jsonschema-form' {
		declare export interface FormProps {
		schema: {
		
	},
		uiSchema?: {
		
	},
		formData?: any,
		widgets?: {
		
	},
		fields?: {
		
	},
		validate?: (formData: any, errors: any) => any,
		onChange?: (e: IChangeEvent) => any,
		onError?: (e: any) => any,
		onSubmit?: (e: any) => any,
		liveValidate?: boolean,
		safeRenderCompletion?: boolean
	}

	declare export interface IChangeEvent {
		edit: boolean,
		formData: any,
		errors: any[],
		errorSchema: any,
		idSchema: any,
		status: string
	}

		declare export default class Form extends React$Component<FormProps, any> {
		
	}

	
}