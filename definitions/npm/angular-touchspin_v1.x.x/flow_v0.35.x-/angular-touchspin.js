

declare module 'angular-touchspin' {
					declare module.exports: undefined


}

declare module 'touchspin' {
		declare interface ITouchSpinOptions {
		min?: number,
		max?: number,
		step?: number,
		decimals?: number,
		stepInterval?: number,
		forceStepDivisibility?: string,
		stepIntervalDelay?: number,
		verticalButtons?: boolean,
		verticalUpClass?: string,
		verticalDownClass?: string,
		initVal?: number,
		prefix?: string,
		postfix?: string,
		prefixExtraClass?: string,
		postfixExtraClass?: string,
		mousewheel?: boolean,
		buttonDownClass?: string,
		buttonUpClass?: string,
		buttonDownTxt?: string,
		buttonUpTxt?: string
	}

	declare interface ITouchSpinConfig {
		
	}

	declare interface ITouchSpinConfigProvider {
		defaults(touchSpinOptions: ITouchSpinOptions): void
	}

			
}