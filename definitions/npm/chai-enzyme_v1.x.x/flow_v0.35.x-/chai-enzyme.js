

declare module 'chai-enzyme' {
	declare type DebugWrapper = ShallowWrapper<any, any> | CheerioWrapper<any, any> | ReactWrapper<any, any>;

		declare function chaiEnzyMe(wrapper?: (debugWrapper: DebugWrapper) => string): (chai: any) => void

		declare module.exports: undefined


}

declare module 'npm$namespace$Chai' {
	declare type EnzymeSelector = string | ___React.StatelessComponent<any> | ___React.ComponentClass<any> | {
		[key: string]: any
	};

	declare interface Match {
		(selector: EnzymeSelector): Assertion
	}

	declare interface Include {
		(selector: EnzymeSelector): Assertion
	}

	declare interface Assertion {
		checked(): Assertion,
		className(name: string): Assertion,
		descendants(selector?: EnzymeSelector): Assertion,
		exactly(count?: number): Assertion,
		disabled(): Assertion,
		blank(): Assertion,
		present(): Assertion,
		html(str?: string): Assertion,
		id(str: string): Assertion,
		ref(key: string): Assertion,
		selected(): Assertion,
		tagName(str: string): Assertion,
		text(str?: string): Assertion,
		value(str: string): Assertion,
		attr(key: string, val?: string): Assertion,
		data(key: string, val?: string): Assertion,
		style(key: string, val?: string): Assertion,
		state(key: string, val?: any): Assertion,
		prop(key: string, val?: any): Assertion
	}

			
}