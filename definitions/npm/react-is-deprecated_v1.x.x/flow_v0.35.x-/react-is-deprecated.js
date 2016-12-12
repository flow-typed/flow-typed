

declare module 'react-is-deprecated' {
		declare interface Deprecatable<T> {
		isDeprecated: (message: string) => Validator<T>
	}

	declare interface DeprecatablePropTypes {
		any: Requireable<any> & Deprecatable<any>,
		array: Requireable<any> & Deprecatable<any>,
		bool: Requireable<any> & Deprecatable<any>,
		func: Requireable<any> & Deprecatable<any>,
		number: Requireable<any> & Deprecatable<any>,
		object: Requireable<any> & Deprecatable<any>,
		string: Requireable<any> & Deprecatable<any>,
		node: Requireable<any> & Deprecatable<any>,
		element: Requireable<any> & Deprecatable<any>,
		instanceOf(expectedClass: {
		
	}): Requireable<any> & Deprecatable<any>,
		oneOf(types: any[]): Requireable<any> & Deprecatable<any>,
		oneOfType(types: Validator<any>[]): Requireable<any> & Deprecatable<any>,
		arrayOf(type: Validator<any>): Requireable<any> & Deprecatable<any>,
		objectOf(type: Validator<any>): Requireable<any> & Deprecatable<any>,
		shape(type: ValidationMap<any>): Requireable<any> & Deprecatable<any>
	}

	declare export function deprecate<T>(validator: Validator<T>, message: string): Validator<T>

	declare export function addIsDeprecated(propTypes: ReactPropTypes): DeprecatablePropTypes

		
}