/** @format */

// flow-typed signature: 313cef7b9950a1fea79cecdc23f0050c
// flow-typed version: <<STUB>>/react-stripe-elements_v2.0.3/flow_v0.95.1

declare module 'react-stripe-elements' {
	import type { Component } from 'react';

	declare type Source = {|
		id: string,
	|};

	declare type Token = {||};

	declare type ElementType =
		| 'card'
		| 'cardNumber'
		| 'cardExpiry'
		| 'cardCvc'
		| 'paymentRequestButton'
		| 'iban'
		| 'idealBank';

	declare type ElementEventHandler<T> = (T) => void;

	declare type CardBrands =
		| 'visa'
		| 'mastercard'
		| 'amex'
		| 'discover'
		| 'diners'
		| 'jcb'
		| 'unionpay'
		| 'unknown';
	declare type ElementEventPayload = {| elementType: ElementType |};
	declare type ElementChangeEventCommon = {|
		empty: boolean,
		complete: boolean,
		error: {| type: 'validation_error', message: string, code: string |},
	|};
	declare type ElementChangeEventPayload =
		| {| elementType: 'card', value: string | {...}, brand: CardBrands, ...ElementChangeEventCommon |}
		| {| elementType: 'cardNumber', brand: CardBrands, ...ElementChangeEventCommon |}
		| {| elementType: 'iban', country: string, bankName: string, ...ElementChangeEventCommon |}
		| {| elementType: 'idealBank', value: string, ...ElementChangeEventCommon |};

	declare type ElementClickEventPayload = {|
		elementType: ElementType,
		preventDefault: () => void,
	|};

	declare type StripeElementStyleOptions<T: {...}> = {|
		color?: string,
		fontFamily?: string,
		fontSize?: string,
		fontSmoothing?: string,
		fontStyle?: string,
		fontVariant?: string,
		fontWeight?: string,
		iconColor?: string,
		lineHeight?: string,
		letterSpacing?: string,
		textDecoration?: 'none' | 'underline' | 'overline' | 'line-through' | 'blink' | 'inherit',
		textShadow?: string,
		textTransform?:
			| 'none'
			| 'capitalize'
			| 'uppercase'
			| 'lowercase'
			| 'full-width'
			| 'full-size-kana'
			| 'inherit'
			| 'initial'
			| 'unset',
		...T,
	|};

	declare type StripeElementStyle<T: {...}> = {|
		...StripeElementStyleOptions<T>,
		':hover'?: StripeElementStyleOptions<T>,
		':focus'?: StripeElementStyleOptions<T>,
		'::placeholed'?: StripeElementStyleOptions<T>,
		'::selection'?: StripeElementStyleOptions<T>,
		':-webkit-autofill'?: StripeElementStyleOptions<T>,
		':disabled'?: StripeElementStyleOptions<T>,
		'::ms-clear'?: {| ...StripeElementStyleOptions<T>, display?: string |},
	|};

	declare type StripeOptions<T = {...}> = {|
		classes?: {|
			base?: string,
			complete?: string,
			empty?: string,
			focus?: string,
			invalid?: string,
			webkitAutofill?: string,
		|},
		style?: {|
			base?: StripeElementStyle<T>,
			complete?: StripeElementStyle<T>,
			empty?: StripeElementStyle<T>,
			invalid?: StripeElementStyle<T>,
		|},
	|};

	declare class Element<T: {...}> {
		on('blur', ElementEventHandler<ElementEventPayload>): void;
		on('change', ElementEventHandler<ElementChangeEventPayload>): void;
		on('click', ElementEventHandler<ElementClickEventPayload>): void;
		on('focus', ElementEventHandler<ElementEventPayload>): void;
		on('ready', ElementEventHandler<ElementEventPayload>): void;

		mount(HTMLElement | string): void;
		blur(): void;
		focus(): void;
		destroy(): void;
		focus(): void;
		unmount(): void;
		update(StripeOptions<T>): void;
	}

	declare type TokenData = {|
		name?: string,
		address_line1?: string,
		address_line2?: string,
		address_city?: string,
		address_state?: string,
		address_city?: string,
		address_country?: string,
		currency?: string,
	|};

	declare export type StripeError = {|
		code: string,
		type: string,
		message: string,
		param: ?string,
	|};

	declare export class Stripe {
		createSource({|
			type: string,
			owner?: {|
				address?: {|
					city?: string,
					country?: string,
					line1?: string,
					line2?: string,
					postal_code?: string,
					state?: string,
				|},
				email?: string,
				name?: string,
				phone?: string,
			|},
			usage?: 'reusable' | 'single_use',
		|}): Promise<{| source: Source |} | {| error: StripeError |}>;
		createToken(Element<*>, TokenData): Promise<{| token: Token |} | StripeError>;
		createToken(
			'bank_account',
			{|
				country: string,
				currency: string,
				routing_number: string,
				account_number: string,
				account_holder_name: string,
				account_holder_type: string,
			|}
		): Promise<{| token: Token |} | {| error: StripeError |}>;
		createToken('pii', {| personal_id_number: string |}): Promise<{| token: Token |} | StripeError>;
	}

	declare type StripeElement<T = {...}> = React$ComponentType<{|
		...StripeOptions<T>,
		onBlur?: () => void,
		onClick?: () => void,
		onFocus?: () => void,
		onReady?: (Element<T>) => void,
	|}>;

	declare type StripeProviderProps =
		| {| apiKey: string, stripeAccount?: string, children: React$Node |}
		| {| stripe: ?Stripe, children: React$Node |};

	declare type TextAlignOption = {|
		textAlign?:
			| 'left'
			| 'right'
			| 'center'
			| 'justify'
			| 'justify-all'
			| 'start'
			| 'end'
			| 'match-parent'
			| 'inherit'
			| 'initial'
			| 'unset',
	|};

	declare export var StripeProvider: React$ComponentType<StripeProviderProps>;
	declare export var CardElement: StripeElement<{||}>;
	declare export var CardNumberElement: StripeElement<TextAlignOption>;
	declare export var CardExpiryElement: StripeElement<TextAlignOption>;
	declare export var CardCVCElement: StripeElement<TextAlignOption>;
	declare export var PostalCodeElement: StripeElement<{||}>;
	declare export var IdealBankElement: StripeElement<{| padding?: string |}>;

	declare export var Elements: React$ComponentType<{|
		fonts?:
			| {| cssSrc: string |}
			| {|
					family: string,
					src: string,
					display?: string,
					style?: string,
					unicodeRange?: string,
					fontWeight:
						| number
						| 'normal'
						| 'bold'
						| 'lighter'
						| 'bolder'
						| 'inherit'
						| 'initial'
						| 'unset',
			  |},
		locale?:
			| 'auto'
			| 'ar'
			| 'da'
			| 'de'
			| 'en'
			| 'es'
			| 'fi'
			| 'fr'
			| 'he'
			| 'it'
			| 'ja'
			| 'no'
			| 'nl'
			| 'pl'
			| 'ru'
			| 'sv'
			| 'zh',
		children: React$Node,
	|}>;

	declare export function injectStripe<T: { stripe: Stripe, ... }>(
		React$AbstractComponent<T, any>
	): React$AbstractComponent<$Diff<T, { stripe: Stripe, ... }>, any>;
}
