

declare module 'stripe-checkout' {
		declare interface StripeCheckoutStatic {
		configure(options: StripeCheckoutOptions): StripeCheckoutHandler
	}

	declare interface StripeCheckoutHandler {
		open(options?: StripeCheckoutOptions): void,
		close(): void
	}

	declare interface StripeCheckoutOptions {
		key?: string,
		token?: (token: StripeTokenResponse) => void,
		image?: string,
		name?: string,
		description?: string,
		amount?: number,
		locale?: string,
		currency?: string,
		panelLabel?: string,
		zipCode?: boolean,
		email?: string,
		label?: string,
		allowRememberMe?: boolean,
		bitcoin?: boolean,
		opened?: () => void,
		closed?: () => void
	}

			
}