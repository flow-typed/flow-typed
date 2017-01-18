/**
 * Flowtype definitions for node-form
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * 
 * @ngdoc  module
 * @name  Validation
 * @description  * # Validation (core module)
The module itself contains the essential components for an validation engine to function. The table below
lists a high level breakdown of each of the components (object, functions) available within this core module.

<div doc-module-components="Validation"></div>It defines validation function.
*/
declare interface Validation$IValidate {
    (args: Validation$IError): void
}


/**
 * It defines async validation function.
 */
declare interface Validation$IAsyncValidate {
    (args: Validation$IError): Q.Promise<any >
}


/**
 * It represents named validation function.
 */
declare interface Validation$IValidatorFce {
    Name: string,
        ValidationFce?: Validation$IValidate,
        AsyncValidationFce?: Validation$IAsyncValidate
}


/**
 * This class represents custom validator.
 */
declare interface Validation$IValidator {
    Validate(context: any): Validation$IValidationFailure,
        ValidateAsync(context: any): Q.Promise<Validation$IValidationFailure>,
        Error: Validation$IError
}


/**
 * It represents abstract validator for type of <T>.
 */
declare interface Validation$IAbstractValidator<T>{
    RuleFor(prop: string, validator: Validation$IPropertyValidator): any,
    ValidationFor(prop: string, validator: Validation$IValidatorFce): any,
    ValidatorFor<K>(prop: string, validator: Validation$IAbstractValidator<K>): any,

    /**
     * It creates new concrete validation rule and assigned data context to this rule.
     * @param name of the rule
     * @constructor  
     */
    CreateRule(name: string): Validation$IAbstractValidationRule<any>,
    CreateAbstractRule(name: string): Validation$IAbstractValidationRule<any>,
    CreateAbstractListRule(name: string): Validation$IAbstractValidationRule<any>,

    /**
     * return true if this validation rule is intended for list of items, otherwise true
     */
    ForList: boolean
}


/**
 * It represents concrete validation rule for type of <T>.
 */
declare interface Validation$IAbstractValidationRule<T>{

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures.
     */
    Validate(context: T): Validation$IValidationResult,

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsync(context: T): Q.Promise<Validation$IValidationResult>,

    /**
     * Performs validation and async validation using a validation context.
     */
    ValidateAll(context: T): void,

    /**
     * Performs validation and async validation using a validation context for a passed field.
     */
    ValidateField(context: T, propName: string): void,

    /**
     * Return validation results.
     */
    ValidationResult: Validation$IValidationResult,
    Rules: {
        [name: string]: Validation$IPropertyValidationRule<T >
    },
    Validators: {
        [name: string]: Validation$IValidator
    },
    Children: {
        [name: string]: Validation$AbstractValidationRule<any >
    }
}


/**
 * It represents property validation rule for type of <T>.
 */
declare interface Validation$IPropertyValidationRule<T>{

    /**
     * The validators that are grouped under this rule.
     */
    Validators: {
        [name: string]: any
    },

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures.
     */
    Validate(context: Validation$IValidationContext<T>): Validation$IValidationFailure[],

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsync(
        context: Validation$IValidationContext<T>): Q.Promise<Validation$IValidationFailure[] >
}


/**
 * It represents a data context for validation rule.
 */
declare interface Validation$IValidationContext<T>{

    /**
     * Return current value.
     */
    Value: string,

    /**
     * Return property name for current data context.
     */
    Key: string,

    /**
     * Data context for validation rule.
     */
    Data: T
}


/**
 * 
 * @ngdoc  object
 * @name  AbstractValidator
 * @module  Validation
 * @description  * It enables to create custom validator for your own abstract object (class) and to assign validation rules to its properties.
You can assigned these rules

+  property validation rules - use _RuleFor_ property
+  property async validation rules - use _RuleFor_ property
+  shared validation rules - use _ValidationFor_ property
+  custom object validator - use _ValidatorFor_ property - enables composition of child custom validators
*/
declare class AbstractValidator<T>mixins IAbstractValidator<T>{
    Validators: {
        [name: string]: Validation$IPropertyValidator[]
    };
    AbstractValidators: {
        [name: string]: Validation$IAbstractValidator<any >
    };
    ValidationFunctions: {
        [name: string]: Validation$IValidatorFce[]
    };
    RuleFor(prop: string, validator: Validation$IPropertyValidator): void;
    ValidationFor(prop: string, fce: Validation$IValidatorFce): void;
    ValidatorFor<K>(
        prop: string,
        validator: Validation$IAbstractValidator<K>,
        forList?: boolean): void;
    CreateAbstractRule(name: string): Validation$AbstractValidationRule<T>;
    CreateAbstractListRule(name: string): Validation$AbstractListValidationRule<T>;
    CreateRule(name: string): Validation$AbstractValidationRule<T>;

    /**
     * Return true if this validation rule is intended for list of items, otherwise true.
     */
    ForList: boolean
}


/**
 * 
 * @ngdoc  object
 * @name  AbstractValidationRule
 * @module  Validation
 * @description  * It represents concreate validator for custom object. It enables to assign validation rules to custom object properties.
 */
declare class AbstractValidationRule<T>mixins IAbstractValidationRule<T>{
    Name: string;
    validator: Validation$AbstractValidator<T>;
    ValidationResult: Validation$IValidationResult;
    Rules: {
        [name: string]: Validation$IPropertyValidationRule<T >
    };
    Validators: {
        [name: string]: Validation$IValidator
    };
    Children: {
        [name: string]: Validation$AbstractValidationRule<any >
    };

    /**
     * Return true if this validation rule is intended for list of items, otherwise true.
     */
    ForList: boolean;
    constructor(Name: string, validator: Validation$AbstractValidator<T>, forList?: boolean): this;
    addChildren(): void;
    SetOptional(fce: Validation$IOptional): void;

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures.
     */
    Validate(context: T): Validation$IValidationResult;

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsync(context: T): Q.Promise<Validation$IValidationResult>;
    ValidateAll(context: T): void;
    ValidateField(context: T, propName: string): void
}


/**
 * 
 * @ngdoc  object
 * @name  AbstractListValidationRule
 * @module  Validation
 * @description  * It represents an validator for custom object. It enables to assign rules to custom object properties.
 */
declare class AbstractListValidationRule<T>mixins AbstractValidationRule<T>{
    Name: string;
    validator: Validation$AbstractValidator<T>;
    constructor(Name: string, validator: Validation$AbstractValidator<T>): this;

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures.
     */
    Validate(context: any): Validation$IValidationResult;

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsync(context: any): Q.Promise<Validation$IValidationResult>;
    NotifyListChanged(list: any[]): void
}


/**
 * 
 * @ngdoc  object
 * @name  ValidationContext
 * @module  Validation
 * @description  * It represents a data context for validation rule.
 */
declare class ValidationContext<T>mixins IValidationContext<T>{
    Key: string;
    Data: T;
    constructor(Key: string, Data: T): this;
    Value: any
}

declare class MessageLocalization {
    customMsg: string;
    defaultMessages: {
        required: string,
        remote: string,
        email: string,
        url: string,
        date: string,
        dateISO: string,
        number: string,
        digits: string,
        signedDigits: string,
        creditcard: string,
        equalTo: string,
        maxlength: string,
        minlength: string,
        rangelength: string,
        range: string,
        max: string,
        min: string,
        step: string,
        contains: string,
        mask: string,
        custom: string
    };
    ValidationMessages: {
        required: string,
        remote: string,
        email: string,
        url: string,
        date: string,
        dateISO: string,
        number: string,
        digits: string,
        signedDigits: string,
        creditcard: string,
        equalTo: string,
        maxlength: string,
        minlength: string,
        rangelength: string,
        range: string,
        max: string,
        min: string,
        step: string,
        contains: string,
        mask: string,
        custom: string
    };
    GetValidationMessage(validator: any): string
}


/**
 * 
 * @ngdoc  object
 * @name  PropertyValidationRule
 * @module  Validation
 * @description  * It represents a property validation rule. The property has assigned collection of property validators.
 */
declare class PropertyValidationRule<T>mixins ValidationResult, IPropertyValidationRule<T>{
    Name: string;
    Validators: {
        [name: string]: any
    };
    ValidationFailures: {
        [name: string]: Validation$IValidationFailure
    };
    constructor(Name: string, validatorsToAdd?: Validation$IPropertyValidator[]): this;
    AddValidator(validator: any): void;
    Errors: {
        [name: string]: Validation$IValidationFailure
    };
    HasErrors: boolean;
    ErrorCount: number;
    ErrorMessage: string;
    TranslateArgs: Validation$IErrorTranslateArgs[];

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures.
     */
    Validate(context: Validation$IValidationContext<T>): Validation$IValidationFailure[];
    ValidateEx(value: any): Validation$IValidationFailure[];

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsync(
        context: Validation$IValidationContext<T>): Q.Promise<Validation$IValidationFailure[]>;

    /**
     * Performs validation using a validation context and returns a collection of Validation Failures asynchronoulsy.
     */
    ValidateAsyncEx(value: string): Q.Promise<Validation$IValidationFailure[] >
}


/**
 * 
 * @ngdoc  object
 * @name  Validator
 * @module  Validation
 * @description  * It represents a custom validator. It enables to define your own shared validation rules
 */
declare class Validator mixins ValidationResult, IValidator {
    Name: string;
    Error: Validation$IError;
    ValidationFailures: {
        [name: string]: Validation$IValidationFailure
    };
    constructor(Name: string, ValidateFce?: Validation$IValidate, AsyncValidationFce?: Validation$IAsyncValidate): this;
    Optional: Validation$IOptional;
    Validate(context: any): Validation$IValidationFailure;
    ValidateAsync(context: any): Q.Promise<Validation$IValidationFailure>;
    HasError: boolean;
    Errors: {
        [name: string]: Validation$IValidationFailure
    };
    HasErrors: boolean;
    ErrorCount: number;
    ErrorMessage: string;
    TranslateArgs: Validation$IErrorTranslateArgs[]
}
declare module 'node-form' {
    declare module.exports: typeof Validation
}