

declare module 'yandex-money-sdk' {
		declare export interface ResponseCallback<TBody> {
		(err: any, body: TBody, response: http.IncomingMessage): any
	}

	declare export interface WalletStatic {
		new (accessToken: string): Wallet,
		buildObtainTokenUrl(clientId: string, redirectURI: string, scope: string[]): string,
		getAccessToken(
		clientId: string, code: string, redirectURI: string, clientSecret: string, callback: ResponseCallback<YandexMoneySDK.Wallet.GetAccessTokenResult>
	): void,
		revokeToken(token: string, revoke_all: any, callback: ResponseCallback<any>): void
	}

	declare export interface Wallet {
		sendAuthenticatedRequest(
		params: YandexMoneySDK.Wallet.SendAuthenticatedRequestParams, callback: ResponseCallback<any>
	): void,
		accountInfo(callback: ResponseCallback<YandexMoneySDK.Wallet.AccountInfoResult>): void,
		operationHistory(
		options: YandexMoneySDK.Wallet.OperationHistoryOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.OperationHistoryResult>
	): void,
		operationDetails(
		operation_id: string, callback: ResponseCallback<YandexMoneySDK.Wallet.OperationDetailsResult>
	): void,
		requestPayment(
		options: YandexMoneySDK.Wallet.RequestPaymentOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.RequestPaymentResult>
	): void,
		processPayment(
		options: YandexMoneySDK.Wallet.ProcessPaymentOptions, callback: ResponseCallback<YandexMoneySDK.Wallet.ProcessPaymentResult>
	): void,
		incomingTransferAccept(
		operation_id: string, protectionCode: string, callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferAcceptResult>
	): void,
		incomingTransferReject(
		operation_id: string, callback: ResponseCallback<YandexMoneySDK.Wallet.IncomingTransferRejectResult>
	): void
	}

	declare export interface ExternalPaymentStatic {
		new (instanceId: string): ExternalPayment,
		getInstanceId(
		clientId: string, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.GetInstanceIdResult>
	): void
	}

	declare export interface ExternalPayment {
		request(
		options: YandexMoneySDK.ExternalPayment.RequestOptions, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.RequestResult>
	): void,
		process(
		options: YandexMoneySDK.ExternalPayment.ProcessOptions, callback: ResponseCallback<YandexMoneySDK.ExternalPayment.ProcessResult>
	): void
	}

	declare export interface Config {
		MONEY_URL: string,
		SP_MONEY_URL: string
	}

			
}

declare module 'Wallet' {
		declare interface GetAccessTokenResult {
		access_token?: string,
		error?: string
	}

	declare interface SendAuthenticatedRequestParams {
		headers?: any,
		data?: any,
		url: string
	}

	declare interface AccountInfoResult {
		account: string,
		balance: number,
		currency: string,
		account_status: string,
		account_type: string,
		avatar?: {
		url: string,
		ts: string
	},
		balance_details?: {
		total: number,
		available: number,
		deposition_pending?: number,
		blocked?: number,
		debt?: number,
		hold?: number
	},
		cards_linked?: {
		pan_fragment?: string,
		type?: string
	}[]
	}

	declare interface OperationHistoryOptions {
		type: string,
		label: string,
		from?: string | Date,
		till?: string | Date,
		start_record?: string,
		records?: number,
		details?: boolean
	}

	declare interface OperationHistoryResult {
		error?: string,
		next_record?: string,
		operations?: {
		operation_id: string,
		status: string,
		datetime: string,
		title: string,
		pattern_id?: string,
		direction: string,
		amount: number,
		label?: string,
		type?: string
	}[]
	}

	declare interface OperationDetailsResult {
		error?: string,
		operation_id?: string,
		status?: string,
		pattern_id?: string,
		direction?: string,
		amount?: number,
		amount_due?: number,
		fee?: number,
		datetime?: string,
		title?: string,
		sender?: string,
		recipient?: string,
		recipient_type?: string,
		message?: string,
		comment?: string,
		codepro?: boolean,
		protection_code?: string,
		expires?: string,
		answer_datetime?: string,
		label?: string,
		details?: string,
		type?: string,
		digital_goods?: {
		article: {
		merchantArticleId: string,
		serial: string,
		secret: string
	}[],
		bonus: {
		serial: string,
		secret: string
	}[]
	}
	}

	declare interface RequestPaymentOptions {
		pattern_id: string,
		to?: string,
		amount?: number,
		amount_due?: number,
		comment?: string,
		message?: string,
		label?: string,
		codepro?: boolean,
		hold_for_pickup?: boolean,
		expire_period?: number,
		phone-number?: string,
		[key: string]: any,
		test_payment?: boolean,
		test_card?: string,
		test_result?: string
	}

	declare interface RequestPaymentResult {
		status: string,
		error?: string,
		money_source?: {
		wallet?: {
		allowed: boolean
	},
		cards?: {
		allowed: boolean,
		csc_required: boolean,
		items: {
		id: string,
		pan_fragment: string,
		type: string
	}[]
	}
	},
		request_id?: string,
		contract_amount?: number,
		balance?: number,
		recipient_account_status?: string,
		recipient_account_type?: string,
		protection_code?: string,
		account_unblock_uri?: string,
		ext_action_uri?: string
	}

	declare interface ProcessPaymentOptions {
		request_id: string,
		money_source?: string,
		csc?: string,
		ext_auth_success_uri?: string,
		ext_auth_fail_uri?: string,
		test_payment?: boolean,
		test_card?: string,
		test_result?: string
	}

	declare interface ProcessPaymentResult {
		status: string,
		error?: string,
		payment_id?: string,
		balance?: number,
		invoice_id?: string,
		payer?: string,
		payee?: string,
		credit_amount?: number,
		account_unblock_uri?: string,
		hold_for_pickup_link?: string,
		acs_uri?: string,
		acs_params?: {
		MD: string,
		PaReq: string,
		[key: string]: any
	},
		next_retry?: number,
		digital_goods?: {
		article: {
		merchantArticleId: string,
		serial: string,
		secret: string
	}[],
		bonus: {
		serial: string,
		secret: string
	}[]
	}
	}

	declare interface IncomingTransferAcceptResult {
		status: string,
		error?: string,
		protection_code_attempts_available?: number,
		ext_action_uri?: string
	}

	declare interface IncomingTransferRejectResult {
		status: string,
		error?: string
	}

			
}

declare module 'ExternalPayment' {
		declare interface GetInstanceIdResult {
		status: string,
		error?: string,
		instance_id?: string
	}

	declare interface RequestOptions {
		pattern_id: string,
		to?: string,
		amount?: number,
		amount_due?: number,
		message?: string,
		[key: string]: any
	}

	declare interface RequestResult {
		status: string,
		error?: string,
		request_id?: string,
		contract_amount?: number,
		title?: string
	}

	declare interface ProcessOptions {
		request_id: string,
		ext_auth_success_uri: string,
		ext_auth_fail_uri: string,
		request_token?: boolean,
		money_source_token?: string,
		csc?: string
	}

	declare interface ProcessResult {
		status: string,
		error?: string,
		acs_uri?: string,
		acs_params?: {
		MD: string,
		PaReq: string,
		[key: string]: any
	},
		money_source?: {
		type: string,
		payment_card_type: string,
		pan_fragment?: string,
		money_source_token?: string
	},
		next_retry?: number,
		invoice_id?: string
	}

			
}