

declare module 'facebook-pixel' {
					
}

declare module 'Pixel' {
		declare interface Event {
		(eventType: string, InitialAppId: string): void,
		(eventType: string, eventName: string): void,
		(eventType: string, eventName: string, parameters: facebook.Pixel.ViewContentParameters): void,
		(eventType: string, eventName: string, parameters: ViewContentParameters): void,
		(eventType: string, eventName: string, parameters: SearchParameters): void,
		(eventType: string, eventName: string, parameters: AddToCartParameters): void,
		(eventType: string, eventName: string, parameters: AddToWishlistParameters): void,
		(eventType: string, eventName: string, parameters: InitiateCheckoutParameters): void,
		(eventType: string, eventName: string, parameters: AddPaymentInfoParameters): void,
		(eventType: string, eventName: string, parameters: PurchaseParameters): void,
		(eventType: string, eventName: string, parameters: LeadParameters): void,
		(eventType: string, eventName: string, parameters: CompleteRegistrationParameters): void,
		(eventType: string, eventName: string, parameters: facebook.Pixel.DPA.AddToCartParameters): void,
		(eventType: string, eventName: string, parameters: facebook.Pixel.DPA.PurchaseParameters): void,
		(eventType: string, eventName: string, parameters: facebook.Pixel.DPA.ViewContentParameters): void
	}

	declare interface ViewContentParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		content_type?: string,
		content_ids?: string[],
		content_category?: string
	}

	declare interface SearchParameters {
		value?: number,
		currency?: string,
		content_category?: string,
		content_ids?: string[],
		search_string?: string
	}

	declare interface AddToCartParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		content_type?: string,
		content_ids?: string[]
	}

	declare interface AddToWishlistParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		content_category?: string,
		content_ids?: string[]
	}

	declare interface InitiateCheckoutParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		content_category?: string,
		content_ids?: string[],
		num_items?: number
	}

	declare interface AddPaymentInfoParameters {
		value?: number,
		currency?: string,
		content_category?: string,
		content_ids?: string[]
	}

	declare interface PurchaseParameters {
		value: number,
		currency: string,
		content_name?: string,
		content_type?: string,
		content_ids?: string[],
		num_items?: number,
		order_id?: string
	}

	declare interface LeadParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		content_category?: string
	}

	declare interface CompleteRegistrationParameters {
		value?: number,
		currency?: string,
		content_name?: string,
		status?: string
	}

			
}

declare module 'DPA' {
		declare interface ViewContentParameters {
		content_type: string,
		content_ids: string[]
	}

	declare interface AddToCartParameters {
		content_type: string,
		content_ids: string[]
	}

	declare interface PurchaseParameters {
		content_type: string,
		content_ids: string[]
	}

			
}