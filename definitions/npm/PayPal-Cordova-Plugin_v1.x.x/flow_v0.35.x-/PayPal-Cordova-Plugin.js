import type { PayPalMobileStatic } from 'npm$namespace$PayPalCordovaPlugin'

declare module 'PayPal-Cordova-Plugin' {
		declare interface PayPalConfigurationOptions {
		defaultUserEmail?: string,
		defaultUserPhoneCountryCode?: string,
		defaultUserPhoneNumber?: string,
		merchantName?: string,
		merchantPrivacyPolicyURL?: string,
		merchantUserAgreementURL?: string,
		acceptCreditCards?: boolean,
		payPalShippingAddressOption?: number,
		rememberUser?: boolean,
		languageOrLocale?: string,
		disableBlurWhenBackgrounding?: boolean,
		presentingInPopover?: boolean,
		forceDefaultsInSandbox?: boolean,
		sandboxUserPassword?: string,
		sandboxUserPin?: string
	}

		declare class PayPalItem  {
		constructor(name: string, quantity: number, price: string, currency: string, sku?: string): this;
		name: string;
		quantity: number;
		price: string;
		currency: string;
		sku: string
	}

	declare class PayPalPaymentDetails  {
		constructor(subtotal: string, shipping: string, tax: string): this;
		subtotal: string;
		shipping: string;
		tax: string
	}

	declare class PayPalPayment  {
		constructor(amount: string, currency: string, shortDescription: string, intent: string, details?: PayPalPaymentDetails): this;
		amount: string;
		currency: string;
		shortDescription: string;
		intent: string;
		details: PayPalPaymentDetails;
		invoiceNumber: string;
		custom: string;
		softDescriptor: string;
		bnCode: string;
		items: PayPalItem[];
		shippingAddress: PayPalShippingAddress
	}

	declare class PayPalShippingAddress  {
		constructor(recipientName: string, line1: string, line2: string, city: string, state: string, postalCode: string, countryCode: string): this;
		recipientName: string;
		line1: string;
		line2: string;
		city: string;
		state: string;
		postalCode: string;
		countryCode: string
	}

	declare class PayPalConfiguration  {
		constructor(options?: PayPalConfigurationOptions): this;
		defaultUserEmail: string;
		defaultUserPhoneCountryCode: string;
		defaultUserPhoneNumber: string;
		merchantName: string;
		merchantPrivacyPolicyURL: string;
		merchantUserAgreementURL: string;
		acceptCreditCards: boolean;
		payPalShippingAddressOption: number;
		rememberUser: boolean;
		languageOrLocale: string;
		disableBlurWhenBackgrounding: boolean;
		presentingInPopover: boolean;
		forceDefaultsInSandbox: boolean;
		sandboxUserPassword: string;
		sandboxUserPin: string
	}

	
}

declare module 'npm$namespace$PayPalCordovaPlugin' {
		declare export interface PayPalClientIds {
		PayPalEnvironmentProduction: string,
		PayPalEnvironmentSandbox: string
	}

	declare export interface BaseResult {
		client: Client,
		response_type: string
	}

	declare export interface Client {
		paypal_sdk_version: string,
		environment: string,
		platform: string,
		product_name: string
	}

	declare export interface SinglePaymentResult {
		response: {
		intent: string,
		id: string,
		state: string,
		authorization_id: string,
		create_time: string
	}
	}

	declare export interface FuturePaymentResult {
		response: {
		code: string
	}
	}

	declare export interface PayPalMobileStatic {
		version(completionCallback: (result: string) => void): void,
		init(
		clientIdsForEnvironments: PayPalCordovaPlugin.PayPalClientIds, completionCallback: () => void
	): void,
		prepareToRender(
		environment: string, configuration: PayPalConfiguration, completionCallback: () => void
	): void,
		renderSinglePaymentUI(
		payment: PayPalPayment, completionCallback: (result: PayPalCordovaPlugin.SinglePaymentResult) => void, cancelCallback: (cancelReason: string) => void
	): void,
		applicationCorrelationIDForEnvironment(
		environment: string, completionCallback: (applicationCorrelationId: string) => void
	): void,
		clientMetadataID(completionCallback: (clientMetadataId: string) => void): void,
		renderFuturePaymentUI(
		completionCallback: (result: PayPalCordovaPlugin.FuturePaymentResult) => void, cancelCallback: (cancelReason: string) => void
	): void,
		renderProfileSharingUI(
		scopes: string[], completionCallback: (result: any) => void, cancelCallback: (cancelReason: string) => void
	): void
	}

			
}