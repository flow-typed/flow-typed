

declare module 'valdr' {
					
}

declare module 'npm$namespace$valdr' {
		declare interface ValdrValidator {
		name: string,
		validate(value: any, validationArguments?: {
		[argumentName: string]: any
	}): boolean
	}

	declare interface ValdrConstraintValidator {
		[argumentName: string]: any,
		message: string
	}

	declare interface ValdrConstraintFieldName {
		[validatorName: string]: ValdrConstraintValidator
	}

	declare interface ValdrConstraintTypeName {
		[fieldName: string]: ValdrConstraintFieldName
	}

	declare interface ValdrConstraints {
		[typeName: string]: ValdrConstraintTypeName
	}

	declare interface ValdrViolation {
		valid: boolean,
		value: string,
		field: string,
		type: string,
		validator: string
	}

	declare interface ValdrValidationResult {
		valid: boolean,
		violations: ValdrViolation[],
		validationResults: ValdrViolation[]
	}

	declare interface Valdr {
		validate(typeName: string, fieldName: string, value: string): ValdrValidationResult,
		addConstraints(newConstraints: ValdrConstraints): void,
		removeConstraints(constraintNames: string | string[]): void,
		getConstraints(): ValdrConstraints,
		setClasses(newClasses: {
		valid: string,
		invalid: string
	}): void
	}

	declare interface ValdrProvider {
		addConstraints(newConstraints: ValdrConstraints): void,
		removeConstraints(constraintNames: string | string[]): void,
		setConstraintUrl(url: string): void,
		addValidator(validatorName: string): void,
		addConstraintAlias(valdrName: string, alias: string): void
	}

			
}