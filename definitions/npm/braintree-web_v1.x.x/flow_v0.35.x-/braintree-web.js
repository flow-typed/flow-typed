

declare module 'braintree-web' {
		declare interface ApplePayPaymentRequest {
		total: {
		label: string,
		amount: string
	},
		countryCode: string,
		currencyCode: string,
		supportedNetworks: string[],
		merchantCapabilities: string[],
		billingContact?: any,
		shippingContact?: any,
		shippingMethods?: any,
		shippingType?: any,
		requiredBillingContactFields?: any,
		requiredShippingContactFields?: any
	}

	declare interface ApplePayPayload {
		merchantIdentifier: string,
		domainName: string,
		displayName: string
	}

	declare interface BraintreeStatic {
		client: BraintreeWeb.Client,
		paypal: BraintreeWeb.PayPal,
		hostedFields: BraintreeWeb.HostedFields,
		threeDSecure: BraintreeWeb.ThreeDSecure,
		dataCollector: BraintreeWeb.DataCollector,
		americanExpress: BraintreeWeb.AmericanExpress,
		unionpay: BraintreeWeb.UnionPay,
		applePay: BraintreeWeb.ApplePay,
		VERSION: string
	}

		declare class ApplePaySession  {
		constructor(version: number, request: ApplePayPaymentRequest): this;
		canMakePayments(): boolean;
		canMakePaymentsWithActiveCard(merchantIdentifier: string): boolean;
		completeMerchantValidation(merchantSession: any): void;
		abort(): void;
		begin(): void;
		completePayment(status: ApplePayStatusCodes): void;
		completePaymentMethodSelection(newTotal: any, newLineItems: any): void;
		completeShippingContactSelection(
		status: ApplePayStatusCodes, newShippingMethods: any, newTotal: any, newLineItems: any
	): void;
		completeShippingMethodSelection(status: ApplePayStatusCodes, newTotal: any, newLineItems: any): void;
		supportsVersion(version: number): boolean;
		oncancel: (event: any) => void;
		onpaymentauthorized: (event: any) => void;
		onpaymentmethodselected: (event: any) => void;
		onshippingcontactselected: (event: any) => void;
		onshippingmethodselected: (event: any) => void;
		onvalidatemerchant: (event: any) => void
	}

	declare class BraintreeError  {
		constructor(options: any): this;
		code: string;
		message: string;
		type: BraintreeError.Types;
		details: any
	}

	
}

declare module 'npm$namespace$BraintreeWeb' {
	declare type callback = (err?: BraintreeError, data?: any) => void;

	declare export interface AmericanExpress {
		create: (options: {
		client: Client
	}, callback: callback) => void,
		VERSION: string
	}

	declare export interface ApplePay {
		create: (options: {
		client: Client
	}, callback: callback) => void,
		VERSION: string
	}

	declare interface ClientAnalyticsMetadata {
		sessionId: string,
		sdkVersion: string,
		merchantAppId: string
	}

	declare interface Configuration {
		client: Client,
		gatewayConfiguration: any,
		analyticsMetadata: ClientAnalyticsMetadata
	}

	declare interface CreditCardInfo {
		number: string,
		cvv: string,
		expirationDate: string,
		billingAddress: {
		postalCode?: string
	}
	}

	declare export interface Client {
		authorization: string,
		create: (options: {
		authorization: string
	}, callback: callback) => void,
		VERSION: string
	}

	declare export interface DataCollector {
		create: (
		options: {
		client: Client,
		kount: boolean,
		paypal: boolean
	}, callback: callback
	) => void,
		VERSION: string
	}

	declare interface HostedFieldsField {
		selector: string,
		placeholder?: string,
		type?: string,
		formatInput?: boolean,
		select?: boolean | {
		options: string[]
	}
	}

	declare interface HostedFieldFieldOptions {
		number: HostedFieldsField,
		expirationDate?: HostedFieldsField,
		expirationMonth?: HostedFieldsField,
		expirationYear?: HostedFieldsField,
		cvv: HostedFieldsField,
		postalCode?: HostedFieldsField
	}

	declare interface HostedFieldsCardCode {
		name: string,
		size: number
	}

	declare interface HostedFieldsHostedFieldsCard {
		type: string,
		niceType: string,
		code: HostedFieldsCardCode
	}

	declare interface HostedFieldsHostedFieldsFieldData {
		container: HTMLElement,
		isFocused: boolean,
		isEmpty: boolean,
		isPotentiallyValid: boolean,
		isValid: boolean
	}

	declare interface HostedFieldsFieldDataFields {
		number: HostedFieldsHostedFieldsFieldData,
		cvv: HostedFieldsHostedFieldsFieldData,
		expirationDate: HostedFieldsHostedFieldsFieldData,
		expirationMonth: HostedFieldsHostedFieldsFieldData,
		expirationYear: HostedFieldsHostedFieldsFieldData,
		postalCode: HostedFieldsHostedFieldsFieldData
	}

	declare interface HostedFieldsStateObject {
		cards: HostedFieldsHostedFieldsCard[],
		emittedBy: string,
		fields: HostedFieldsFieldDataFields
	}

	declare interface HostedFieldsAccountDetails {
		cardType: string,
		lastTwo: string
	}

	declare interface HostedFieldsTokenizePayload {
		nonce: string,
		details: HostedFieldsAccountDetails,
		type: string,
		description: string
	}

	declare export interface HostedFields {
		create: (
		options: {
		client: Client,
		fields: HostedFieldFieldOptions,
		styles: any
	}, callback: callback
	) => void,
		styleOptions: any,
		VERSION: string
	}

	declare interface PayPalTokenizeReturn {
		close: (() => any)
	}

	declare interface PayPalShippingAddress {
		recipientName: string,
		line1: string,
		line2: string,
		city: string,
		state: string,
		postalCode: string,
		countryCode: string
	}

	declare interface PayPalBillingAddress {
		line1: string,
		line2: string,
		city: string,
		state: string,
		postalCode: string,
		countryCode: string
	}

	declare interface PayPalAccountDetails {
		email: string,
		payerId: string,
		firstName: string,
		lastName: string,
		countryCode: string,
		phone: string,
		shippingAddress: PayPalShippingAddress,
		billingAddress: PayPalBillingAddress
	}

	declare interface PayPalTokenizePayload {
		nonce: string,
		type: string,
		details: PayPalAccountDetails
	}

	declare export interface PayPal {
		create: (options: {
		client: Client
	}, callback: callback) => void,
		VERSION: string
	}

	declare interface ThreeDSecureAccountDetails {
		cardType: string,
		lastTwo: string
	}

	declare interface ThreeDSecureVerifyPayload {
		nonce: string,
		details: ThreeDSecureAccountDetails,
		description: string,
		liabilityShiftPossible: boolean,
		liabilityShifted: boolean
	}

	declare export interface ThreeDSecure {
		create: (options: {
		client: Client
	}, callback: callback) => void,
		VERSION: string
	}

	declare interface UnionPayAccountDetails {
		cardType: string,
		lastTwo: string,
		description: string
	}

	declare interface UnionPayTokenizePayload {
		nonce: string,
		type: string,
		details: UnionPayAccountDetails
	}

	declare interface UnionPayEnrollPayload {
		enrollmentId: string,
		smsCodeRequired: boolean
	}

	declare interface UnionPayProperties {
		supportsTwoStepAuthAndCapture: boolean,
		isSupported: boolean
	}

	declare interface UnionPayFetchCapabilitiesPayload {
		isUnionPay: boolean,
		isDebit: boolean,
		unionPay: UnionPayProperties
	}

	declare export interface UnionPay {
		create: (options: {
		client: Client
	}, callback: callback) => void,
		VERSION: string
	}

		declare export class AmericanExpress  {
		constructor(options: any): this;
		getRewardsBalance(options: {
		nonce: string
	}, callback: callback): void;
		getExpressCheckoutProfile(options: {
		nonce: string
	}, callback: callback): void
	}

	declare export class ApplePay  {
		constructor(options: any): this;
		createPaymentRequest(paymentRequest: ApplePayPaymentRequest): ApplePayPaymentRequest;
		performValidation(
		options: {
		validationURL: string,
		displayName?: string,
		merchantIdentifier?: string
	}, callback: callback
	): void;
		tokenize(options: {
		token: any
	}, callback: callback): void
	}

	declare export class Client  {
		constructor(configuration: Configuration): this;
		getConfiguration(): Configuration;
		request(
		options: {
		method: string,
		endpoint: string,
		data: any,
		timeout?: number
	}, callback: callback
	): void
	}

	declare export class DataCollector  {
		constructor(): this;
		deviceData: string;
		teardown(callback?: callback): void
	}

	declare export class HostedFields  {
		constructor(options: any): this;
		on(event: string, handler: (() => any)): void;
		teardown(callback?: callback): void;
		tokenize(options?: {
		vault: boolean
	}, callback?: callback): void;
		addClass(field: string, classname: string, callback?: callback): void;
		removeClass(field: string, classname: string, callback?: callback): void;
		setPlaceholder(field: string, placeholder: string, callback?: callback): void;
		clear(field: string, callback?: callback): void;
		getState(): any
	}

	declare export class PayPal  {
		constructor(options: any): this;
		tokenize(
		options: {
		flow: string,
		intent: string,
		offerCredit: boolean,
		useraction: string,
		amount: (string | number),
		currency: string,
		displayName: string,
		locale: string,
		enableShippingAddress: boolean,
		shippingAddressOverride: PayPalShippingAddress,
		shippingAddressEditable: boolean,
		billingAgreementDescription: string
	}, callback: callback
	): PayPalTokenizeReturn;
		teardown(callback?: () => void): void
	}

	declare export class ThreeDSecure  {
		constructor(options: any): this;
		addFrameCallback: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void;
		removeFrameCallback: () => void;
		verifyCard(
		options: {
		nonce: string,
		amount: number,
		addFrame: (err?: BraintreeError, iframe?: HTMLIFrameElement) => void,
		removeFrame: () => void
	}, callback: callback
	): void;
		cancelVerifyCard(callback: callback): void;
		teardown(callback?: callback): void
	}

	declare export class UnionPay  {
		constructor(options: any): this;
		fetchCapabilities(
		options: {
		card: any,
		hostedFields: HostedFields
	}, callback: callback
	): void;
		enroll(
		options: {
		card: any,
		hostedFields: HostedFields,
		mobile: any
	}, callback: callback
	): void;
		tokenize(
		options: {
		card: any,
		hostedFields: HostedFields,
		enrollmentId: string,
		smsCode: string
	}, callback: callback
	): void;
		teardown(callback?: callback): void
	}

	
}