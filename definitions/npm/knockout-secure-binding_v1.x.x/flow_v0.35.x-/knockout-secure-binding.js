

declare module 'knockout-secure-binding' {
		declare interface KnockoutSecureBindingOptions {
		attribute?: string,
		globals?: any,
		bindings?: KnockoutBindingHandlers,
		noVirtualElements?: boolean
	}

	declare interface KnockoutSecureBindingProvider {
		new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider
	}

	declare interface KnockoutStatic {
		secureBindingsProvider: {
		new (options?: KnockoutSecureBindingOptions): KnockoutBindingProvider
	}
	}

			declare module.exports: undefined


}