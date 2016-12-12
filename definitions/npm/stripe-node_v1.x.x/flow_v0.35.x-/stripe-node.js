import type { StripeExport } from 'npm$namespace$StripeNode'

declare module 'stripe-node' {
					
}

declare module 'stripe' {
					declare module.exports: StripeExport


}

declare module 'npm$namespace$StripeNode' {
	declare type IBankAccount = bankAccounts.IBankAccount;

	declare type ICard = cards.ICard;

	declare type IDateFilter = string | {
		gt?: string,
		gte?: string,
		lt?: string,
		lte?: string
	};

	declare type HeaderOptions = IHeaderOptions | string;

	declare interface StripeExport {
		new (apiKey: string, version?: string): Stripe,
		(apiKey: string, version?: string): Stripe
	}

	declare interface StripeStatic {
		DEFAULT_HOST: string,
		DEFAULT_PORT: string,
		DEFAULT_BASE_PATH: string,
		DEFAULT_API_VERSION: string,
		DEFAULT_TIMEOUT: number,
		PACKAGE_VERSION: string,
		USER_AGENT: {
		bindings_version: string,
		lang: string,
		lang_version: string,
		platform: string,
		publisher: string,
		uname: string
	},
		USER_AGENT_SERIALIZED: string,
		resources: typeof resources,
		StripeResource: typeof StripeResource
	}

	declare interface Stripe {
		accounts: resources.Accounts,
		balance: resources.Balance,
		charges: resources.Charges,
		coupons: resources.Coupons,
		customers: resources.Customers,
		disputes: resources.Disputes,
		events: resources.Events,
		invoices: resources.Invoices,
		invoiceItems: resources.InvoiceItems,
		plans: resources.Plans,
		recipientCards: resources.RecipientCards,
		recipients: resources.Recipients,
		subscriptions: resources.Subscriptions,
		tokens: resources.Tokens,
		transfers: resources.Transfers,
		applicationFees: resources.ApplicationFees,
		fileUploads: resources.FileUploads,
		bitcoinReceivers: resources.BitcoinReceivers,
		refunds: resources.Refunds,
		countrySpecs: resources.CountrySpecs,
		orders: resources.Orders,
		products: resources.Products,
		skus: resources.SKUs,
		setHost(host: string): void,
		setHost(host: string, port: string | number): void,
		setHost(host: string, port: string | number, protocol: string): void,
		setProtocol(protocol: string): void,
		setPort(port: string | number): void,
		setApiVersion(version?: string): void,
		setApiKey(key?: string): void,
		setTimeout(timeout?: number): void,
		setHttpAgent(agent: string): void,
		getConstant(c: string): any,
		getClientUserAgent(response: (userAgent: string) => void): void
	}

	declare interface IObject {
		object: string
	}

	declare interface IResourceObject {
		id: string
	}

	declare interface IResponseFn<R> {
		(err: IStripeError, value: R): void
	}

	declare interface IDeleteConfirmation {
		id: string,
		deleted: boolean
	}

	declare interface IMetadata {
		
	}

	declare interface IShippingInformation {
		address: {
		line1: string,
		line2?: string,
		city?: string,
		state?: string,
		postal_code?: string,
		country?: string
	},
		name: string,
		carrier?: string,
		phone?: string,
		tracking_number?: string
	}

	declare interface IList<T> {
		object: string,
		data: Array<T>,
		has_more: boolean,
		url: string,
		total_count?: number
	}

	declare interface IListOptions {
		ending_before?: string,
		limit?: number,
		starting_after?: string
	}

	declare interface IListOptionsCreated {
		created?: string | IDateFilter
	}

	declare interface IDataOptions {
		expand?: Array<string>,
		include?: Array<string>
	}

	declare interface IDataOptionsWithMetadata {
		metadata?: IMetadata
	}

	declare interface IHeaderOptions {
		idempotency_key?: string,
		stripe_account?: string,
		api_key?: string
	}

	declare interface IStripeError {
		type: string,
		message?: string,
		code?: string,
		param?: string
	}

		declare class StripeResource  {
		constructor(stripe: Stripe, urlData: any): this
	}

	
}

declare module 'accounts' {
		declare interface IAccount {
		object: string,
		charges_enabled: boolean,
		country: string,
		details_submitted: boolean,
		display_name: string,
		transfers_enabled: boolean,
		verification: {
		disabled_reason: string,
		due_by: number,
		fields_needed: Array<string>
	}
	}

	declare interface IAccountCreationOptions {
		country?: string,
		email: string,
		managed?: boolean
	}

	declare interface IAccountShared {
		business_logo?: string,
		business_name?: string,
		business_primary_color?: string,
		business_url?: string,
		debit_negative_balances?: boolean,
		decline_charge_on?: {
		avs_failure?: boolean,
		cvc_failure?: boolean
	},
		default_currency?: string,
		email?: string,
		legal_entity?: {
		
	},
		metadata?: IMetadata,
		product_description?: string,
		statement_descriptor?: string,
		support_email?: string,
		support_phone?: string,
		support_url?: string,
		tos_acceptance?: {
		date: number,
		ip?: string,
		user_agent?: string
	},
		transfer_schedule?: {
		delay_days?: number | string,
		interval?: string,
		monthly_anchor?: number,
		weekly_anchor?: string
	}
	}

	declare interface IAccountUpdateOptions {
		external_account?: {
		object: string,
		account_number: string,
		country: string,
		currency: string,
		account_holder_name?: string,
		account_holder_type?: string,
		routing_number?: string
	}
	}

	declare interface IExternalAccountCreationOptions {
		external_account: string,
		default_for_currency?: boolean
	}

	declare interface IExternalAccountUpdateOptions {
		default_for_currency?: boolean
	}

	declare interface IBankAccountListOptions {
		object: "bank_account"
	}

	declare interface ICardListOptions {
		object: "card"
	}

	declare interface IRejectReason {
		reason: "fraud" | "terms_of_service" | "other"
	}

			
}

declare module 'applicationFees' {
		declare interface IApplicationFee {
		object: string,
		account: string | accounts.IAccount,
		amount: number,
		amount_refunded: number,
		application: string,
		balance_transaction: string | balance.IBalanceTransaction,
		charge: string | charges.ICharge,
		created: number,
		currency: string,
		livemode: boolean,
		originating_transaction: string,
		refunded: boolean,
		refunds: IApplicationFeeRefunds
	}

	declare interface IApplicationFeeListOptions {
		charge: string
	}

	declare interface IApplicationFeeRefund {
		object: string,
		amount: number,
		balance_transaction: string | balance.IBalanceTransaction,
		created: number,
		currency: string,
		fee: string | IApplicationFee,
		metadata: IMetadata
	}

	declare interface IApplicationFeeRefunds {
		
	}

	declare interface IApplicationFeeRefundCreationOptions {
		amount?: number,
		metadata?: IMetadata
	}

			
}

declare module 'balance' {
		declare interface IBalance {
		object: string,
		available: Array<ISourceType>,
		livemode: boolean,
		pending: Array<ISourceType>
	}

	declare interface ISourceType {
		currency: string,
		amount: number,
		source_types: {
		card: number,
		bitcoin_receiver?: number,
		customer_bank_account?: number,
		alipay_account?: number
	}
	}

	declare interface IBalanceTransaction {
		object: string,
		amount: number,
		available_on: number,
		created: number,
		currency: string,
		description?: string,
		fee: number,
		fee_details: Array<{
		amount: number,
		application: string,
		currency: string,
		description: string,
		type: string
	}>,
		net: number,
		source: string | IResourceObject,
		source_transfers: IList<transfers.ITransfer>,
		status: string,
		type: string
	}

	declare interface IBalanceListOptions {
		available_on?: string | IDateFilter,
		currency?: string,
		source?: string,
		transfer?: string,
		type?: string
	}

			
}

declare module 'charges' {
		declare interface ICharge {
		object: "charge",
		amount: number,
		amount_refunded: number,
		application_fee?: string,
		balance_transaction: string | balance.IBalanceTransaction,
		captured: boolean,
		created: number,
		currency: string,
		customer: string | customers.ICustomer,
		description?: string,
		dispute?: disputes.IDispute,
		failure_code: string,
		failure_message: string,
		fraud_details: {
		user_report?: "fraudulent" | "safe",
		stripe_report?: "fraudulent"
	},
		invoice: string | invoices.IInvoice,
		livemode: boolean,
		metadata: IMetadata,
		order: string | orders.IOrder,
		paid: boolean,
		receipt_email: string,
		receipt_number: string,
		refunded: boolean,
		refunds: IChargeRefunds,
		shipping?: IShippingInformation,
		source: cards.ICard | bitcoinReceivers.IBitcoinReceiver,
		source_transfer: string | transfers.ITransfer,
		statement_descriptor: string,
		status: "succeeded" | "pending" | "failed",
		transfer: string | transfers.ITransfer
	}

	declare interface IChargeCreationOptions {
		amount: number,
		currency: string,
		application_fee?: number,
		capture?: boolean,
		description?: string,
		destination?: string,
		metadata?: IMetadata,
		receipt_email?: string,
		shipping?: IShippingInformation,
		customer?: string,
		source?: sources.ISourceCreationOptions,
		statement_descriptor?: string
	}

	declare interface IChargeUpdateOptions {
		description?: string,
		fraud_details?: {
		user_report?: "fraudulent" | "safe"
	},
		receipt_email?: string,
		shipping?: IShippingInformation
	}

	declare interface IChargeListOptions {
		customer?: string,
		source?: {
		object: "all" | "alipay_account" | "bitcoin_receiver" | "card"
	}
	}

	declare interface IChargeRefunds {
		
	}

			
}

declare module 'coupons' {
		declare interface IDiscount {
		object: "discount",
		coupon: ICoupon,
		customer: string,
		end: number,
		start: number,
		subscription: string
	}

	declare interface ICoupon {
		object: "coupon",
		amount_off: number,
		created: number,
		currency: string,
		duration: "forever" | "once" | "repeating",
		duration_in_months: number,
		livemode: boolean,
		max_redemptions: number,
		metadata: IMetadata,
		percent_off: number,
		redeem_by: number,
		times_redeemed: number,
		valid: boolean
	}

	declare interface ICouponCreationOptions {
		id?: string,
		duration: "forever" | "once" | "repeating",
		amount_off?: number,
		currency?: string,
		duration_in_months?: number,
		max_redemptions?: number,
		percent_off?: number,
		redeem_by?: number
	}

			
}

declare module 'customers' {
		declare interface ICustomer {
		object: "customer",
		account_balance?: number,
		created: number,
		currency: string,
		default_source: string | cards.ICard | bitcoinReceivers.IBitcoinReceiver,
		delinquent: boolean,
		description?: string,
		discount?: coupons.IDiscount,
		email?: string,
		livemode: boolean,
		metadata?: IMetadata,
		shipping: IShippingInformation,
		sources?: IList<cards.ICard | bitcoinReceivers.IBitcoinReceiver>,
		cards?: resources.CustomerCards,
		subscriptions: ICustomerSubscriptions
	}

	declare interface ICustomerSubscriptions {
		
	}

	declare interface ICustomerCreationOptions {
		account_balance?: number,
		coupon?: string,
		description?: string,
		email?: string,
		plan?: string,
		quantity?: number,
		shipping?: IShippingInformation,
		source?: sources.ISourceCreationOptionsExtended,
		tax_percent?: number,
		trial_end?: number
	}

	declare interface ICustomerUpdateOptions {
		account_balance?: number,
		coupon?: string,
		default_source?: string,
		description?: string,
		email?: string,
		shipping?: IShippingInformation,
		source?: sources.ISourceCreationOptionsExtended
	}

	declare interface ICustomerSourceCreationOptions {
		source: sources.ISourceCreationOptions
	}

	declare interface ICustomerCardSourceCreationOptions {
		source: cards.ISourceCreationOptions
	}

	declare interface IBankAccountSourceListOptions {
		object: "bank_account"
	}

	declare interface ICardSourceListOptions {
		object: "card"
	}

			
}

declare module 'disputes' {
		declare interface IDispute {
		object: "dispute",
		amount: number,
		balance_transactions: Array<balance.IBalanceTransaction>,
		charge: string | charges.ICharge,
		created: number,
		currency: string,
		evidence: IDisputeEvidence,
		evidence_details?: {
		due_by: number,
		has_evidence: boolean,
		past_due: boolean,
		submission_count: number
	},
		is_charge_refundable: boolean,
		livemode: boolean,
		metadata: IMetadata,
		reason: "duplicate" | "fraudulent" | "subscription_canceled" | "product_unacceptable" | "product_not_received" | "unrecognized" | "credit_not_processed" | "incorrect_account_details" | "insufficient_funds" | "bank_cannot_process" | "debit_not_authorized" | "general",
		status: "warning_needs_response" | "warning_under_review" | "warning_closed" | "needs_response" | "response_disabled" | "under_review" | "charge_refunded" | "won" | "lost"
	}

	declare interface IDisputeEvidence {
		access_activity_log?: string,
		billing_address?: string,
		cancellation_policy?: string,
		cancellation_policy_disclosure?: string,
		cancellation_rebuttal?: string,
		customer_communication?: string,
		customer_email_address?: string,
		customer_name?: string,
		customer_purchase_ip?: string,
		customer_signature?: string,
		duplicate_charge_documentation?: string,
		duplicate_charge_explanation?: string,
		duplicate_charge_id?: string,
		product_description?: string,
		receipt?: string,
		refund_policy?: string,
		refund_policy_disclosure?: string,
		refund_refusal_explanation?: string,
		service_date?: string,
		service_documentation?: string,
		shipping_address?: string,
		shipping_carrier?: string,
		shipping_date?: string,
		shipping_documentation?: string,
		shipping_tracking_number?: string,
		uncategorized_file?: string,
		uncategorized_text?: string
	}

	declare interface IDisputeUpdateOptions {
		evidence?: disputes.IDisputeEvidence
	}

			
}

declare module 'events' {
		declare interface IEvent {
		object: "event",
		api_version: string,
		created: number,
		data: {
		object: IObject,
		previous_attributes?: {
		
	}
	},
		livemode: boolean,
		pending_webhooks: number,
		request?: string,
		type: string
	}

	declare interface IEventListOptions {
		type: string
	}

			
}

declare module 'fileUploads' {
	declare type IPurpose = "business_logo" | "dispute_evidence" | "identity_document" | "incorporation_article" | "incorporation_document";

	declare interface IFileUpdate {
		object: "file_upload",
		created: number,
		purpose: IPurpose,
		size: number,
		type: "pdf" | "jpg" | "png",
		url: string
	}

	declare interface IFileUploadCreationOptions {
		purpose: IPurpose,
		file: {
		data: string | Buffer,
		name: string,
		type: string | "application/octet-stream"
	}
	}

	declare interface IFileUploadListOptions {
		purpose: IPurpose
	}

			
}

declare module 'invoices' {
		declare interface IInvoice {
		object: "invoice",
		amount_due: number,
		application_fee: number,
		attempt_count: number,
		attempted: boolean,
		charge: string | charges.ICharge,
		closed: boolean,
		currency: string,
		customer: string,
		date: number,
		description: string,
		discount: coupons.IDiscount,
		ending_balance: number,
		forgiven: boolean,
		lines: IList<IInvoiceLineItem>,
		livemode: boolean,
		metadata: IMetadata,
		next_payment_attempt: number,
		paid: boolean,
		period_end: number,
		period_start: number,
		receipt_number: string,
		starting_balance: number,
		statement_descriptor: string,
		subscription: string,
		subscription_proration_date: number,
		subtotal: number,
		tax: number,
		tax_percent: number,
		total: number,
		webhooks_delivered_at: number
	}

	declare interface IInvoiceLineItem {
		id: string,
		object: "line_item",
		amount: number,
		currency: string,
		description: string,
		discountable: boolean,
		livemode: boolean,
		metadata: IMetadata,
		period: IPeriod,
		plan: plans.IPlan,
		proration: boolean,
		quantity: number,
		subscription: string,
		type: "invoiceitem" | "subscription"
	}

	declare interface IInvoiceCreationOptions {
		customer: string,
		application_fee?: number,
		description?: string,
		statement_descriptor?: string,
		subscription?: string,
		tax_percent?: number
	}

	declare interface IInvoiceUpdateOptions {
		application_fee?: number,
		closed?: boolean,
		description?: string,
		forgiven?: boolean,
		statement_descriptor?: string,
		tax_percent?: number
	}

	declare interface IInvoiceListOptions {
		customer?: string,
		date?: IDateFilter
	}

	declare interface IInvoiceLineItemRetrievalOptions {
		coupon?: string,
		customer?: string,
		subscription?: string,
		subscription_plan?: string,
		subscription_prorate?: boolean,
		subscription_proration_date?: number,
		subscription_quantity?: number,
		subscription_trial_end?: number
	}

	declare interface IInvoiceUpcomingOptions {
		coupon?: string,
		subscription?: string,
		subscription_plan?: string,
		subscription_prorate?: boolean,
		subscription_proration_date?: number,
		subscription_quantity?: number,
		subscription_trial_end?: number
	}

	declare interface IPeriod {
		start: number,
		end: number
	}

			
}

declare module 'invoiceItems' {
		declare interface InvoiceItem {
		object: "invoiceitem",
		amount: number,
		currency: string,
		customer: string,
		date: number,
		description: string,
		discountable: boolean,
		invoice: string,
		livemode: boolean,
		metadata: IMetadata,
		period: invoices.IPeriod,
		plan: plans.IPlan,
		proration: boolean,
		quantity: number,
		subscription: string
	}

	declare interface InvoiceItemCreationOptions {
		amount: number,
		currency: string,
		customer: string,
		description?: string,
		discountable?: boolean,
		invoice?: string,
		subscription?: string
	}

	declare interface InvoiceItemUpdateOptions {
		amount?: number,
		description?: string,
		discountable?: boolean
	}

	declare interface InvoiceItemListOptions {
		customer?: string
	}

			
}

declare module 'orders' {
	declare type OrderStatus = "created" | "paid" | "canceled" | "fulfilled" | "returned";

	declare interface IOrder {
		object: "order",
		amount: number,
		application: string,
		application_fee: number,
		charge: string | charges.ICharge,
		created: number,
		currency: string,
		customer: string | customers.ICustomer,
		email: string,
		external_coupon_code: string,
		items: Array<IOrderItem>,
		livemode: boolean,
		metadata: IMetadata,
		selected_shipping_method: string,
		shipping: IShippingInformation,
		shipping_methods: Array<IShippingMethod>,
		status: OrderStatus,
		status_transactions: {
		canceled: number,
		fulfiled: number,
		paid: number,
		returned: number
	},
		updated: number
	}

	declare interface IOrderItem {
		object: "order_item",
		amount: number,
		currency: string,
		description: string,
		parent: string | skus.ISku,
		quantity: number,
		type: "sku" | "tax" | "shipping" | "discount"
	}

	declare interface IOrderCreationOptions {
		currency: string,
		coupon?: string,
		customer?: string,
		email?: string,
		items?: Array<IOrderItemCreationHash>,
		shipping?: IShippingInformation
	}

	declare interface IOrderUpdateOptions {
		coupon?: string,
		selected_shipping_method?: string,
		status: OrderStatus
	}

	declare interface IOrderPayOptions {
		customer?: string,
		source?: sources.ISourceCreationOptions,
		application_fee?: number,
		email?: string
	}

	declare interface IOrderListOptions {
		customer?: string,
		ids?: Array<string>,
		status: OrderStatus,
		status_transitions?: {
		canceled?: IDateFilter,
		fulfilled?: IDateFilter,
		paid?: IDateFilter,
		returned?: IDateFilter
	}
	}

	declare interface IOrderItemCreationHash {
		amount?: number,
		currency?: string,
		description?: string,
		parent: string,
		quantity?: number,
		type?: "sku" | "tax" | "shipping" | "discount"
	}

	declare interface IShippingMethod {
		id: string,
		amount: number,
		currency: string,
		delivery_estimate: {
		date: string,
		earliest: string,
		latest: string,
		type: "range" | "exact"
	},
		description: string
	}

			
}

declare module 'plans' {
	declare type IntervalUnit = "day" | "week" | "month" | "year";

	declare interface IPlan {
		object: "plan",
		amount: number,
		created: number,
		currency: string,
		interval: IntervalUnit,
		interval_count: number,
		livemode: boolean,
		metadata: IMetadata,
		name: string,
		statement_descriptor: string,
		trial_period_days: number
	}

	declare interface IPlanCreationOptions {
		id: string,
		amount: number,
		currency: string,
		interval: IntervalUnit,
		name: string,
		interval_count?: number,
		statement_descriptor?: string,
		trial_period_days?: number
	}

	declare interface IPlanUpdateOptions {
		name?: string,
		statement_descriptor?: string
	}

			
}

declare module 'products' {
		declare interface IProduct {
		object: "product",
		active: boolean,
		attributes: Array<string>,
		caption: string,
		created: number,
		deactivated_on: Array<string>,
		description: string,
		images: Array<string>,
		livemode: boolean,
		metadata: IMetadata,
		name: string,
		package_dimensions: IPackageDimensions,
		shippable: boolean,
		skus: IList<skus.ISku>,
		updated: number,
		url: string
	}

	declare interface IProductCreationOptions {
		id?: string,
		name: string,
		active?: boolean,
		attribute?: Array<string>,
		caption?: string,
		deactivate_on?: Array<string>,
		description?: string,
		images?: Array<string>,
		package_dimensions?: IPackageDimensions,
		shippable?: boolean,
		url?: string
	}

	declare interface IProductUpdateOptions {
		active?: boolean,
		caption?: string,
		deactivate_on?: Array<string>,
		description?: string,
		images?: Array<string>,
		name?: string,
		package_dimensions?: IPackageDimensions,
		shippable?: boolean,
		url?: string
	}

	declare interface IProductListOptions {
		active?: boolean,
		ids?: Array<string>,
		shippable?: boolean,
		url?: string
	}

	declare interface IPackageDimensions {
		height: number,
		length: number,
		weight: number,
		width: number
	}

			
}

declare module 'recipients' {
		declare interface IRecipient {
		
	}

			
}

declare module 'skus' {
		declare interface ISku {
		object: "sku",
		active: boolean,
		attributes: ISkuAttributes,
		created: number,
		currency: string,
		image: string,
		inventory: IInventory,
		livemode: boolean,
		metadata: IMetadata,
		package_dimensions: products.IPackageDimensions,
		price: number,
		product: string | products.IProduct,
		updated: number
	}

	declare interface ISkuCreationOptions {
		id?: string,
		currency: string,
		inventory: IInventory,
		price: number,
		product: string,
		active?: boolean,
		attributes?: ISkuAttributes,
		image?: string,
		package_dimensions?: products.IPackageDimensions
	}

	declare interface ISkuUpdateOptions {
		active?: boolean,
		currency?: string,
		image?: string,
		inventory?: IInventory,
		package_dimensions?: products.IPackageDimensions,
		price?: number,
		product?: string
	}

	declare interface ISkuListOptions {
		active?: boolean,
		attributes?: ISkuAttributes,
		ids?: Array<string>,
		in_stock?: boolean,
		product?: string
	}

	declare interface IInventory {
		quantity?: number,
		type: "finite" | "bucket" | "infinite",
		value?: "in_stock" | "limited" | "out_of_stock"
	}

	declare interface ISkuAttributes {
		
	}

			
}

declare module 'tokens' {
		declare interface IToken {
		
	}

	declare interface ICardToken {
		card?: cards.ICardHash
	}

	declare interface IBankAccountToken {
		bank_account?: bankAccounts.IBankAccountHash
	}

	declare interface ITokenBase {
		object: "token",
		client_ip: string,
		created: number,
		livemode: boolean,
		type: "card" | "bank_account",
		used: boolean
	}

	declare interface ITokenCreationOptionsBase {
		customer?: string
	}

	declare interface ICardTokenCreationOptions {
		card: sources.ISourceCreationOptions
	}

	declare interface IBankAccountTokenCreationOptions {
		bank_account: bankAccounts.ISourceCreationOptions
	}

	declare interface IPiiTokenCreationOptions {
		pii: {
		personal_id_number: string
	}
	}

			
}

declare module 'transfers' {
	declare type SourceTypes = "alipay_account" | "bank_account" | "bitcoin_receiver" | "card";

	declare type Statuses = "pending" | "paid" | "failed" | "in_transit" | "canceled";

	declare interface ITransfer {
		object: "transfer",
		amount: number,
		amount_reversed: number,
		application_fee: string,
		balance_transaction: string | balance.IBalanceTransaction,
		created: number,
		currency: string,
		date: number,
		description: string,
		destination: string | bankAccounts.IBankAccount | cards.ICardHash | accounts.IAccount,
		destination_payment: string,
		failure_code: string,
		failure_message: string,
		livemode: boolean,
		metadata: IMetadata,
		reversals: ITransferReversals,
		reversed: boolean,
		source_transaction: string | charges.ICharge,
		source_type: SourceTypes,
		statement_descriptor: string,
		status: Statuses,
		type: "card" | "bank_account" | "stripe_account"
	}

	declare interface ITransferReversals {
		
	}

	declare interface ITransferCreationOptions {
		amount: number,
		currency: string,
		destination: string,
		description?: string,
		source_transaction?: string,
		statement_descriptor?: string,
		source_type?: SourceTypes
	}

	declare interface ITransferUpdateOptions {
		description?: string
	}

	declare interface ITransferListOptions {
		date?: IDateFilter,
		destination?: string,
		recipient?: string,
		status: Statuses
	}

			
}

declare module 'transferReversals' {
		declare interface IReversal {
		object: "transfer_reversal",
		amount: number,
		balance_transaction: string | balance.IBalanceTransaction,
		created: number,
		currency: string,
		metadata: IMetadata,
		transfer: string | transfers.ITransfer
	}

	declare interface IReversalCreationOptions {
		amount?: number,
		description?: string,
		refund_application_fee?: boolean
	}

	declare interface IReversalUpdateOptions {
		description?: string
	}

			
}

declare module 'bankAccounts' {
		declare interface IBankAccount {
		account: string,
		default_for_currency: boolean,
		metadata: IMetadata
	}

	declare interface IBankAccountHash {
		object: "customer_bank_account",
		account_holder_name: string,
		account_holder_type: string,
		bank_name: string,
		country: string,
		currency: string,
		fingerprint: string,
		last4: string,
		routing_number: string,
		status: "new" | "validated" | "verified" | "verification_failed" | "error"
	}

	declare interface ISourceCreationOptions {
		account_number: string,
		country: string,
		currency: string,
		routing_number?: string,
		account_holder_name?: string,
		account_holder_type?: "individual" | "company"
	}

	declare interface IBankAccountUpdateOptions {
		account_holder_name?: string,
		account_holder_type?: "individual" | "company"
	}

			
}

declare module 'bitcoinReceivers' {
		declare interface IBitcoinReceiver {
		object: "bitcoin_receiver",
		active: boolean,
		amount: number,
		amount_received: number,
		bitcoin_amount: number,
		bitcoin_amount_received: number,
		bitcoin_uri: number,
		created: number,
		currency: string,
		customer: string,
		description: string,
		email: string,
		filled: boolean,
		inbound_address: string,
		livemode: boolean,
		metadata: IMetadata,
		payment: string,
		refund_address: string,
		transactions: IList<IBitcoinTransaction>,
		uncaptured_funds: boolean,
		used_for_payment: boolean
	}

	declare interface IBitcoinTransaction {
		object: string,
		amount: number,
		bitcoin_amount: number,
		created: number,
		currency: string,
		receiver: string
	}

	declare interface IBitcoinReceiverCreationOptions {
		amount: number,
		currency: string,
		email: string,
		description?: string,
		refund_mispayments?: boolean
	}

	declare interface IBitcoinReceiverListOptions {
		active?: boolean,
		filled?: boolean,
		uncaptured_funds?: boolean
	}

			
}

declare module 'cards' {
		declare interface ICard {
		account?: string | accounts.IAccount,
		currency?: string,
		customer?: customers.ICustomer,
		default_for_currency?: boolean,
		recipient?: string | recipients.IRecipient
	}

	declare interface ICardHash {
		id: string,
		object: string,
		number: number,
		brand: "Visa" | "American Express" | "MasterCard" | "Discover" | "JCB" | "Diners Club" | "Unknown",
		exp_month: number,
		exp_year: number,
		funding: "credit" | "debit" | "prepaid" | "unknown",
		last4: string,
		address_city: string,
		address_country: string,
		address_line1: string,
		address_line1_check: string,
		address_line2: string,
		address_state: string,
		address_zip: string,
		address_zip_check: "pass" | "fail" | "unavailable" | "unchecked",
		country: string,
		cvc_check: "pass" | "fail" | "unavailable" | "unchecked",
		dynamic_last4: string,
		name: string,
		fingerprint: string,
		metadata?: IMetadata,
		tokenization_method: "apple_pay" | "android_pay"
	}

	declare interface ICardUpdateOptions {
		address_city?: string,
		address_country?: string,
		address_line1?: string,
		address_line2?: string,
		address_state?: string,
		address_zip?: string,
		default_for_currency?: boolean,
		exp_month?: number,
		exp_year?: number,
		name?: string
	}

	declare interface ISourceCreationOptions {
		object: "card",
		exp_month: number,
		exp_year: number,
		number: number,
		cvc?: number,
		name?: string,
		address_city?: string,
		address_country?: string,
		address_line1?: string,
		address_line2?: string,
		address_state?: string,
		address_zip?: string,
		metadata?: IMetadata
	}

	declare interface ISourceCreationOptionsExtended {
		currency?: string,
		default_for_currency?: boolean
	}

			
}

declare module 'subscriptions' {
		declare interface ISubscription {
		object: "subscription",
		application_fee_percent: number,
		cancel_at_period_end: boolean,
		canceled_at: number,
		created: number,
		current_period_end: number,
		current_period_start: number,
		customer: string,
		discount: coupons.IDiscount,
		ended_at: number,
		metadata: IMetadata,
		plan: plans.IPlan,
		quantity: number,
		start: number,
		status: "trialing" | "active" | "past_due" | "canceled" | "unpaid",
		tax_percent: number,
		trial_end: number,
		trial_start: number
	}

	declare interface ISubscriptionCustCreationOptions {
		plan: string,
		application_fee_percent?: number,
		coupon?: string,
		source?: sources.ISourceCreationOptions,
		quantity?: number,
		tax_percent?: number,
		trial_end?: number
	}

	declare interface ISubscriptionCreationOptions {
		customer: string
	}

	declare interface ISubscriptionUpdateOptions {
		application_fee_percent?: number,
		coupon?: string,
		plan?: string,
		prorate?: boolean,
		proration_date?: number,
		quantity?: number,
		source?: sources.ISourceCreationOptions,
		tax_percent?: number,
		trial_end?: number
	}

	declare interface ISubscriptionCancellationOptions {
		at_period_end?: boolean
	}

	declare interface ISubscriptionListOptions {
		customer?: string,
		plan?: string
	}

			
}

declare module 'refunds' {
		declare interface IRefund {
		id: string,
		object: string,
		amount: number,
		balance_transaction: string,
		charge: string | charges.ICharge,
		created: number,
		currency: string,
		description: string,
		metadata: IMetadata,
		reason: string,
		receipt_number: string
	}

	declare interface IRefundCreationOptions {
		amount?: number,
		metadata?: IMetadata,
		reason?: string,
		refund_application_fee?: boolean,
		reverse_transfer?: boolean
	}

	declare interface IRefundCreationOptionsWithCharge {
		charge: string
	}

	declare interface IRefundListOptions {
		charge?: string
	}

			
}

declare module 'sources' {
	declare type ISourceCreationOptions = string | cards.ISourceCreationOptions;

	declare type ISourceCreationOptionsExtended = string | cards.ISourceCreationOptionsExtended;

				
}

declare module 'countrySpecs' {
		declare interface ICountrySpec {
		object: "country_spec",
		default_currency: string,
		supported_bank_account_currencies: {
		
	},
		supported_payment_currencies: Array<string>,
		supported_payment_methods: Array<string>,
		verification_fields: {
		individual: {
		minimum: Array<string>,
		additional: Array<string>
	},
		company: {
		minimum: Array<string>,
		additional: Array<string>
	}
	}
	}

			
}

declare module 'resources' {
				declare class Accounts extends StripeResource {
		create(
		data: accounts.IAccountCreationOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		create(
		data: accounts.IAccountCreationOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(
		id: string, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(
		options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		retrieve(response?: IResponseFn<accounts.IAccount>): Promise<accounts.IAccount>;
		update(
		id: string, data: accounts.IAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		update(
		id: string, data: accounts.IAccountUpdateOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		del(
		id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		id: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(response?: IResponseFn<IDeleteConfirmation>): Promise<IDeleteConfirmation>;
		reject(
		id: string, data: accounts.IRejectReason, options: HeaderOptions, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		reject(
		id: string, data: accounts.IRejectReason, response?: IResponseFn<accounts.IAccount>
	): Promise<accounts.IAccount>;
		list(
		data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<accounts.IAccount>>
	): Promise<IList<accounts.IAccount>>;
		list(
		data: IListOptions, response?: IResponseFn<IList<accounts.IAccount>>
	): Promise<IList<accounts.IAccount>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<accounts.IAccount>>
	): Promise<IList<accounts.IAccount>>;
		list(
		response?: IResponseFn<IList<accounts.IAccount>>
	): Promise<IList<accounts.IAccount>>;
		createExternalAccount(
		accId: string, data: accounts.IExternalAccountCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		createExternalAccount(
		accId: string, data: accounts.IExternalAccountCreationOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		retrieveExternalAccount(
		accId: string, bankAccId: string, options: HeaderOptions, response?: IResponseFn<bankAccounts.IBankAccount>
	): Promise<bankAccounts.IBankAccount>;
		retrieveExternalAccount(
		accId: string, bankAccId: string, response?: IResponseFn<bankAccounts.IBankAccount>
	): Promise<bankAccounts.IBankAccount>;
		retrieveCard(
		accId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		retrieveCard(
		accId: string, cardId: string, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateExternalAccount(
		accId: string, bankAccId: string, data: accounts.IExternalAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<bankAccounts.IBankAccount>
	): Promise<bankAccounts.IBankAccount>;
		updateExternalAccount(
		accId: string, bankAccId: string, data: accounts.IExternalAccountUpdateOptions, response?: IResponseFn<bankAccounts.IBankAccount>
	): Promise<bankAccounts.IBankAccount>;
		updateExternalAccount(
		accId: string, cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateExternalAccount(
		accId: string, cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		deleteExternalAccount(
		accId: string, id: string, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		deleteExternalAccount(
		accId: string, id: string, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		listExternalAccounts(
		accId: string, data: accounts.IBankAccountListOptions, options: HeaderOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>
	): Promise<IList<bankAccounts.IBankAccount>>;
		listExternalAccounts(
		accId: string, data: accounts.IBankAccountListOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>
	): Promise<IList<bankAccounts.IBankAccount>>;
		listExternalAccounts(
		accId: string, data: accounts.ICardListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listExternalAccounts(
		accId: string, data: accounts.ICardListOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>
	}

	declare class ApplicationFees extends StripeResource {
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFee>
	): Promise<applicationFees.IApplicationFee>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<applicationFees.IApplicationFee>
	): Promise<applicationFees.IApplicationFee>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFee>
	): Promise<applicationFees.IApplicationFee>;
		retrieve(
		id: string, response?: IResponseFn<applicationFees.IApplicationFee>
	): Promise<applicationFees.IApplicationFee>;
		list(
		data: applicationFees.IApplicationFeeListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>
	): Promise<IList<applicationFees.IApplicationFee>>;
		list(
		data: applicationFees.IApplicationFeeListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>
	): Promise<IList<applicationFees.IApplicationFee>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFee>>
	): Promise<IList<applicationFees.IApplicationFee>>;
		list(
		response?: IResponseFn<IList<applicationFees.IApplicationFee>>
	): Promise<IList<applicationFees.IApplicationFee>>;
		refund(
		feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		refund(
		feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		refund(
		feeId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		refund(
		feeId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		createRefund(
		feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		createRefund(
		feeId: string, data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		createRefund(
		feeId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		createRefund(
		feeId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retreiveRefund(
		feeId: string, refundId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retreiveRefund(
		feeId: string, refundId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		updateRefund(
		feeId: string, refundId: string, data: {
		metadata?: IMetadata
	}, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		updateRefund(
		feeId: string, refundId: string, data: {
		metadata?: IMetadata
	}, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		listRefunds(
		feeId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		listRefunds(
		feeId: string, data: IListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		listRefunds(
		feeId: string, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		listRefunds(
		feeId: string, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>
	}

	declare class ApplicationFeeRefunds extends StripeResource {
		create(
		data: applicationFees.IApplicationFeeRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		create(
		data: applicationFees.IApplicationFeeRefundCreationOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		create(
		options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		create(
		response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retrieve(
		refundId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retrieve(
		refundId: string, options: IDataOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retrieve(
		refundId: string, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		retrieve(
		refundId: string, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		update(
		refundId: string, data: {
		metadata?: IMetadata
	}, options: HeaderOptions, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		update(
		refundId: string, data: {
		metadata?: IMetadata
	}, response?: IResponseFn<applicationFees.IApplicationFeeRefund>
	): Promise<applicationFees.IApplicationFeeRefund>;
		list(
		data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		list(
		data: IListOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>;
		list(
		response?: IResponseFn<IList<applicationFees.IApplicationFeeRefund>>
	): Promise<IList<applicationFees.IApplicationFeeRefund>>
	}

	declare class Balance extends StripeResource {
		retrieve(
		options: HeaderOptions, response?: IResponseFn<balance.IBalance>
	): Promise<balance.IBalance>;
		retrieve(response?: IResponseFn<balance.IBalance>): Promise<balance.IBalance>;
		retrieveTransaction(
		id: string, options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<balance.IBalanceTransaction>;
		retrieveTransaction(
		id: string, response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<balance.IBalanceTransaction>;
		listTransactions(
		data: balance.IBalanceListOptions, options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<IList<balance.IBalanceTransaction>>;
		listTransactions(
		data: balance.IBalanceListOptions, response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<IList<balance.IBalanceTransaction>>;
		listTransactions(
		options: HeaderOptions, response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<IList<balance.IBalanceTransaction>>;
		listTransactions(
		response?: IResponseFn<balance.IBalanceTransaction>
	): Promise<IList<balance.IBalanceTransaction>>
	}

	declare class BitcoinReceivers extends StripeResource {
		create(
		data: bitcoinReceivers.IBitcoinReceiverCreationOptions, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		create(
		data: bitcoinReceivers.IBitcoinReceiverCreationOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		retrieve(
		id: string, response?: IResponseFn<bitcoinReceivers.IBitcoinReceiver>
	): Promise<bitcoinReceivers.IBitcoinReceiver>;
		list(
		data: bitcoinReceivers.IBitcoinReceiverListOptions, options: HeaderOptions, response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>
	): Promise<IList<bitcoinReceivers.IBitcoinReceiver>>;
		list(
		data: bitcoinReceivers.IBitcoinReceiverListOptions, response?: IResponseFn<IList<bitcoinReceivers.IBitcoinReceiver>>
	): Promise<IList<bitcoinReceivers.IBitcoinReceiver>>;
		setMetadata(): void;
		getMetadata(): void
	}

	declare class Charges extends StripeResource {
		create(
		data: charges.IChargeCreationOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		create(
		data: charges.IChargeCreationOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		retrieve(id: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
		update(
		id: string, data: charges.IChargeUpdateOptions, options: HeaderOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		update(
		id: string, data: charges.IChargeUpdateOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		capture(
		id: string, options: HeaderOptions, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		capture(id: string, response?: IResponseFn<charges.ICharge>): Promise<charges.ICharge>;
		list(
		data: charges.IChargeListOptions, options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		list(
		data: charges.IChargeListOptions, response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		list(
		response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		refund(
		chargeId: string, data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		refund(
		chargeId: string, data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		refund(
		chargeId: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		refund(
		chargeId: string, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		createRefund(
		id: string, data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		createRefund(
		id: string, data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		createRefund(
		id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		createRefund(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
		retrieveRefund(
		chargeId: string, refundId: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieveRefund(
		chargeId: string, refundId: string, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		updateRefund(
		chargeId: string, refundId: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		updateRefund(
		chargeId: string, refundId: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		listRefunds(
		chargeId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		listRefunds(
		chargeId: string, data: IListOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		listRefunds(
		chargeId: string, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		listRefunds(
		chargeId: string, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		markAsSafe(
		chargeId: string, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>;
		markAsFraudulent(
		chargeId: string, response?: IResponseFn<charges.ICharge>
	): Promise<charges.ICharge>
	}

	declare class ChargeRefunds extends StripeResource {
		create(
		data: refunds.IRefundCreationOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		create(
		data: refunds.IRefundCreationOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		create(
		options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		create(response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
		update(
		id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		update(
		id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		list(
		data: refunds.IRefundListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		data: refunds.IRefundListOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>
	}

	declare class Coupons extends StripeResource {
		create(
		data: coupons.ICouponCreationOptions, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		create(
		data: coupons.ICouponCreationOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		retrieve(id: string, response?: IResponseFn<coupons.ICoupon>): Promise<coupons.ICoupon>;
		update(
		id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		update(
		id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<coupons.ICoupon>
	): Promise<coupons.ICoupon>;
		del(
		id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		id: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		list(
		data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<coupons.ICoupon>>
	): Promise<IList<coupons.ICoupon>>;
		list(
		data: IListOptionsCreated, response?: IResponseFn<IList<coupons.ICoupon>>
	): Promise<IList<coupons.ICoupon>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<coupons.ICoupon>>
	): Promise<IList<coupons.ICoupon>>;
		list(
		response?: IResponseFn<IList<coupons.ICoupon>>
	): Promise<IList<coupons.ICoupon>>
	}

	declare class CustomerCards extends StripeResource {
		create(
		data: {
		card?: sources.ISourceCreationOptionsExtended
	}, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		create(
		data: {
		card?: sources.ISourceCreationOptionsExtended
	}, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		list(
		data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		list(
		data: IListOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		list(response?: IResponseFn<IList<cards.ICard>>): Promise<IList<cards.ICard>>;
		update(
		cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		update(
		cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		retrieve(
		cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		retrieve(cardId: string, response?: IResponseFn<cards.ICard>): Promise<cards.ICard>;
		del(
		cardId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		cardId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>
	}

	declare class Customers extends StripeResource {
		create(
		data: customers.ICustomerCreationOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		create(
		data: customers.ICustomerCreationOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		list(
		data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<customers.ICustomer>>
	): Promise<IList<customers.ICustomer>>;
		list(
		data: IListOptionsCreated, response?: IResponseFn<IList<customers.ICustomer>>
	): Promise<IList<customers.ICustomer>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<customers.ICustomer>>
	): Promise<IList<customers.ICustomer>>;
		list(
		response?: IResponseFn<IList<customers.ICustomer>>
	): Promise<IList<customers.ICustomer>>;
		update(
		id: string, data: customers.ICustomerUpdateOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		update(
		id: string, data: customers.ICustomerUpdateOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		retrieve(
		id: string, response?: IResponseFn<customers.ICustomer>
	): Promise<customers.ICustomer>;
		del(
		id: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		id: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		createCard(
		customerId: string, data: {
		card?: sources.ISourceCreationOptionsExtended
	}, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		createCard(
		customerId: string, data: {
		card?: sources.ISourceCreationOptionsExtended
	}, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		retrieveCard(
		customerId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		retrieveCard(
		customerId: string, cardId: string, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateCard(
		customerId: string, cardId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateCard(
		customerId: string, cardId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		deleteCard(
		customerId: string, cardId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		deleteCard(
		customerId: string, cardId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		listCards(
		customerId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listCards(
		customerId: string, data: IListOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listCards(
		customerId: string, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listCards(
		customerId: string, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		createSource(
		customerId: string, data: customers.ICustomerCardSourceCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		createSource(
		customerId: string, data: customers.ICustomerCardSourceCreationOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		createSource(
		customerId: string, data: customers.ICustomerSourceCreationOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		createSource(
		customerId: string, data: customers.ICustomerSourceCreationOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		listSource(
		customerId: string, data: customers.ICardSourceListOptions, options: HeaderOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listSource(
		customerId: string, data: customers.ICardSourceListOptions, response?: IResponseFn<IList<cards.ICard>>
	): Promise<IList<cards.ICard>>;
		listSource(
		customerId: string, data: customers.IBankAccountSourceListOptions, options: HeaderOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>
	): Promise<IList<bankAccounts.IBankAccount>>;
		listSource(
		customerId: string, data: customers.IBankAccountSourceListOptions, response?: IResponseFn<IList<bankAccounts.IBankAccount>>
	): Promise<IList<bankAccounts.IBankAccount>>;
		retrieveSource(
		customerId: string, sourceId: string, options: HeaderOptions, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		retrieveSource(
		customerId: string, sourceId: string, response?: IResponseFn<cards.ICard | bankAccounts.IBankAccount>
	): Promise<cards.ICard | bankAccounts.IBankAccount>;
		updateSource(
		customerId: string, sourceId: string, data: cards.ICardUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateSource(
		customerId: string, sourceId: string, data: cards.ICardUpdateOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateSource(
		customerId: string, sourceId: string, data: bankAccounts.IBankAccountUpdateOptions, options: HeaderOptions, response?: IResponseFn<cards.ICard>
	): Promise<cards.ICard>;
		updateSource(
		customerId: string, sourceId: string, data: bankAccounts.IBankAccountUpdateOptions, response?: IResponseFn<bankAccounts.IBankAccount>
	): Promise<bankAccounts.IBankAccount>;
		deleteSource(
		customerId: string, sourceId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		deleteSource(
		customerId: string, sourceId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		verifySource(customerId: string, sourceId: string, options: HeaderOptions): Promise<{
		
	}>;
		verifySource(customerId: string, sourceId: string): Promise<{
		
	}>;
		createSubscription(
		customerId: string, data: subscriptions.ISubscriptionCustCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		createSubscription(
		customerId: string, data: subscriptions.ISubscriptionCustCreationOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		retrieveSubscription(
		customerId: string, subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		retrieveSubscription(
		customerId: string, subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		updateSubscription(
		customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		updateSubscription(
		customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		cancelSubscription(
		customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		cancelSubscription(
		customerId: string, subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		cancelSubscription(
		customerId: string, subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		listSubscriptions(
		customerId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		listSubscriptions(
		customerId: string, data: IListOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		listSubscriptions(
		customerId: string, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		listSubscriptions(
		customerId: string, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		deleteDiscount(
		customerId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement;
		deleteDiscount(
		customerId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement;
		deleteSubscriptionDiscount(
		customerId: string, subscriptionId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement;
		deleteSubscriptionDiscount(
		customerId: string, subscriptionId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement
	}

	declare class SubscriptionsBase extends StripeResource {
		retrieve(
		subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		retrieve(
		subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		update(
		subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		update(
		subscriptionId: string, data: subscriptions.ISubscriptionUpdateOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		del(
		subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		del(
		subscriptionId: string, data: subscriptions.ISubscriptionCancellationOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		del(
		subscriptionId: string, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		del(
		subscriptionId: string, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		list(
		data: subscriptions.ISubscriptionListOptions, options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		list(
		data: subscriptions.ISubscriptionListOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		list(
		response?: IResponseFn<IList<subscriptions.ISubscription>>
	): Promise<IList<subscriptions.ISubscription>>;
		deleteDiscount(
		subscriptionId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement;
		deleteDiscount(
		subscriptionId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		NO PRINT IMPLEMENTED: SemicolonClassElement
	}

	declare class Subscriptions extends SubscriptionsBase {
		create(
		data: subscriptions.ISubscriptionCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		create(
		data: subscriptions.ISubscriptionCreationOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>
	}

	declare class CustomerSubscriptions extends SubscriptionsBase {
		create(
		data: subscriptions.ISubscriptionCustCreationOptions, options: HeaderOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>;
		create(
		data: subscriptions.ISubscriptionCustCreationOptions, response?: IResponseFn<subscriptions.ISubscription>
	): Promise<subscriptions.ISubscription>
	}

	declare class Disputes extends StripeResource {
		retrieve(
		disputeId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		retrieve(
		disputeId: string, data: IDataOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		retrieve(
		disputeId: string, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		retrieve(
		disputeId: string, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		update(
		disputeId: string, data: disputes.IDisputeUpdateOptions, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		update(
		disputeId: string, data: disputes.IDisputeUpdateOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		close(
		disputeId: string, options: HeaderOptions, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		close(
		disputeId: string, response?: IResponseFn<disputes.IDispute>
	): Promise<disputes.IDispute>;
		list(
		data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<disputes.IDispute>>
	): Promise<IList<disputes.IDispute>>;
		list(
		data: IListOptionsCreated, response?: IResponseFn<IList<disputes.IDispute>>
	): Promise<IList<disputes.IDispute>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<disputes.IDispute>>
	): Promise<IList<disputes.IDispute>>;
		list(
		response?: IResponseFn<IList<disputes.IDispute>>
	): Promise<IList<disputes.IDispute>>;
		setMetadata(): void;
		getMetadata(): void
	}

	declare class Events extends StripeResource {
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<events.IEvent>
	): Promise<events.IEvent>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<events.IEvent>
	): Promise<events.IEvent>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<events.IEvent>
	): Promise<events.IEvent>;
		retrieve(id: string, response?: IResponseFn<events.IEvent>): Promise<events.IEvent>;
		list(
		data: events.IEventListOptions, options: HeaderOptions, response?: IResponseFn<IList<events.IEvent>>
	): Promise<IList<events.IEvent>>;
		list(
		data: events.IEventListOptions, response?: IResponseFn<IList<events.IEvent>>
	): Promise<IList<events.IEvent>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<events.IEvent>>
	): Promise<IList<events.IEvent>>;
		list(response?: IResponseFn<IList<events.IEvent>>): Promise<IList<events.IEvent>>
	}

	declare class FileUploads extends StripeResource {
		create(
		data: fileUploads.IFileUploadCreationOptions, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		create(
		data: fileUploads.IFileUploadCreationOptions, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		retrieve(
		id: string, response?: IResponseFn<fileUploads.IFileUpdate>
	): Promise<fileUploads.IFileUpdate>;
		list(
		data: fileUploads.IFileUploadListOptions, options: HeaderOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>
	): Promise<IList<fileUploads.IFileUpdate>>;
		list(
		data: fileUploads.IFileUploadListOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>
	): Promise<IList<fileUploads.IFileUpdate>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<fileUploads.IFileUpdate>>
	): Promise<IList<fileUploads.IFileUpdate>>;
		list(
		response?: IResponseFn<IList<fileUploads.IFileUpdate>>
	): Promise<IList<fileUploads.IFileUpdate>>
	}

	declare class Invoices extends StripeResource {
		create(
		data: invoices.IInvoiceCreationOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		create(
		data: invoices.IInvoiceCreationOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieve(
		id: string, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieveLines(
		id: string, data: invoices.IInvoiceLineItemRetrievalOptions, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>
	): Promise<invoices.IInvoiceLineItem>;
		retrieveLines(
		id: string, data: invoices.IInvoiceLineItemRetrievalOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>
	): Promise<invoices.IInvoiceLineItem>;
		retrieveLines(
		id: string, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>
	): Promise<invoices.IInvoiceLineItem>;
		retrieveLines(
		id: string, response?: IResponseFn<IList<invoices.IInvoiceLineItem>>
	): Promise<invoices.IInvoiceLineItem>;
		retrieveUpcoming(
		id: string, data: invoices.IInvoiceUpcomingOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieveUpcoming(
		id: string, data: invoices.IInvoiceUpcomingOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieveUpcoming(
		id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		retrieveUpcoming(
		id: string, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		update(
		id: string, data: invoices.IInvoiceUpdateOptions, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		update(
		id: string, data: invoices.IInvoiceUpdateOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		pay(
		id: string, options: HeaderOptions, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		pay(
		id: string, response?: IResponseFn<invoices.IInvoice>
	): Promise<invoices.IInvoice>;
		list(
		data: invoices.IInvoiceListOptions, options: HeaderOptions, response?: IResponseFn<IList<invoices.IInvoice>>
	): Promise<IList<invoices.IInvoice>>;
		list(
		data: invoices.IInvoiceListOptions, response?: IResponseFn<IList<invoices.IInvoice>>
	): Promise<IList<invoices.IInvoice>>;
		list(
		response?: IResponseFn<IList<invoices.IInvoice>>
	): Promise<IList<invoices.IInvoice>>
	}

	declare class InvoiceItems extends StripeResource {
		create(
		data: invoiceItems.InvoiceItemCreationOptions, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		create(
		data: invoiceItems.InvoiceItemCreationOptions, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		retrieve(
		invoiceItemId: string, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		retrieve(
		invoiceItemId: string, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		update(
		invoiceItemId: string, data: invoiceItems.InvoiceItemUpdateOptions, options: HeaderOptions, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		update(
		invoiceItemId: string, data: invoiceItems.InvoiceItemUpdateOptions, response?: IResponseFn<invoiceItems.InvoiceItem>
	): Promise<invoiceItems.InvoiceItem>;
		list(
		data: invoiceItems.InvoiceItemListOptions, options: HeaderOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>
	): Promise<IList<invoiceItems.InvoiceItem>>;
		list(
		data: invoiceItems.InvoiceItemListOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>
	): Promise<IList<invoiceItems.InvoiceItem>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<invoiceItems.InvoiceItem>>
	): Promise<IList<invoiceItems.InvoiceItem>>;
		list(
		response?: IResponseFn<IList<invoiceItems.InvoiceItem>>
	): Promise<IList<invoiceItems.InvoiceItem>>;
		del(
		invoiceItemId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		invoiceItemId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>
	}

	declare class Plans extends StripeResource {
		create(
		data: plans.IPlanCreationOptions, options: HeaderOptions, response?: IResponseFn<plans.IPlan>
	): Promise<plans.IPlan>;
		create(
		data: plans.IPlanCreationOptions, response?: IResponseFn<plans.IPlan>
	): Promise<plans.IPlan>;
		retrieve(
		planName: string, options: HeaderOptions, response?: IResponseFn<plans.IPlan>
	): Promise<plans.IPlan>;
		retrieve(planName: string, response?: IResponseFn<plans.IPlan>): Promise<plans.IPlan>;
		update(
		planName: string, data: plans.IPlanUpdateOptions, options: HeaderOptions, response?: IResponseFn<plans.IPlan>
	): Promise<plans.IPlan>;
		update(
		planName: string, data: plans.IPlanUpdateOptions, response?: IResponseFn<plans.IPlan>
	): Promise<plans.IPlan>;
		del(
		planName: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		planName: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		list(
		data: IListOptionsCreated, options: HeaderOptions, response?: IResponseFn<IList<plans.IPlan>>
	): Promise<IList<plans.IPlan>>;
		list(
		data: IListOptionsCreated, response?: IResponseFn<IList<plans.IPlan>>
	): Promise<IList<plans.IPlan>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<plans.IPlan>>
	): Promise<IList<plans.IPlan>>;
		list(response?: IResponseFn<IList<plans.IPlan>>): Promise<IList<plans.IPlan>>
	}

	declare class RecipientCards extends StripeResource {
		create(): void;
		list(): void;
		update(id: string): void;
		retrieve(id: string): void;
		del(id: string): void
	}

	declare class Recipients extends StripeResource {
		create(): void;
		list(): void;
		update(id: string): void;
		retrieve(id: string): void;
		del(id: string): void
	}

	declare class Refunds extends StripeResource {
		create(
		data: refunds.IRefundCreationOptionsWithCharge, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		create(
		data: refunds.IRefundCreationOptionsWithCharge, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		retrieve(id: string, response?: IResponseFn<refunds.IRefund>): Promise<refunds.IRefund>;
		update(
		id: string, data: IDataOptionsWithMetadata, options: HeaderOptions, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		update(
		id: string, data: IDataOptionsWithMetadata, response?: IResponseFn<refunds.IRefund>
	): Promise<refunds.IRefund>;
		list(
		data: refunds.IRefundListOptions, options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		data: refunds.IRefundListOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>;
		list(
		response?: IResponseFn<IList<refunds.IRefund>>
	): Promise<IList<refunds.IRefund>>
	}

	declare class Tokens extends StripeResource {
		create(
		data: tokens.ICardTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.ICardToken>
	): Promise<tokens.ICardToken>;
		create(
		data: tokens.ICardTokenCreationOptions, response?: IResponseFn<tokens.ICardToken>
	): Promise<tokens.ICardToken>;
		create(
		data: tokens.IBankAccountTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.IBankAccountToken>
	): Promise<tokens.IBankAccountToken>;
		create(
		data: tokens.IBankAccountTokenCreationOptions, response?: IResponseFn<tokens.IBankAccountToken>
	): Promise<tokens.IBankAccountToken>;
		create(
		data: tokens.IPiiTokenCreationOptions, options: HeaderOptions, response?: IResponseFn<tokens.IToken>
	): Promise<tokens.IToken>;
		create(
		data: tokens.IPiiTokenCreationOptions, response?: IResponseFn<tokens.IToken>
	): Promise<tokens.IToken>;
		retrieve(
		tokenId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<tokens.IToken>
	): Promise<tokens.IToken>;
		retrieve(
		tokenId: string, data: IDataOptions, response?: IResponseFn<tokens.IToken>
	): Promise<tokens.IToken>;
		retrieve(
		tokenId: string, options: HeaderOptions, response?: IResponseFn<tokens.IToken>
	): Promise<tokens.IToken>;
		retrieve(tokenId: string, response?: IResponseFn<tokens.IToken>): Promise<tokens.IToken>
	}

	declare class Transfers extends StripeResource {
		create(
		data: transfers.ITransferCreationOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		create(
		data: transfers.ITransferCreationOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		retrieve(
		id: string, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		update(
		id: string, data: transfers.ITransferUpdateOptions, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		update(
		id: string, data: transfers.ITransferUpdateOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		list(
		data: transfers.ITransferListOptions, options: HeaderOptions, response?: IResponseFn<IList<transfers.ITransfer>>
	): Promise<IList<transfers.ITransfer>>;
		list(
		data: transfers.ITransferListOptions, response?: IResponseFn<IList<transfers.ITransfer>>
	): Promise<IList<transfers.ITransfer>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<transfers.ITransfer>>
	): Promise<IList<transfers.ITransfer>>;
		list(
		response?: IResponseFn<IList<transfers.ITransfer>>
	): Promise<IList<transfers.ITransfer>>;
		cancel(
		id: string, options: HeaderOptions, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		cancel(
		id: string, response?: IResponseFn<transfers.ITransfer>
	): Promise<transfers.ITransfer>;
		listTransactions(
		options: HeaderOptions, response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		listTransactions(
		response?: IResponseFn<IList<charges.ICharge>>
	): Promise<IList<charges.ICharge>>;
		reverse(
		id: string, data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		reverse(
		id: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		reverse(
		id: string, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		createReverse(
		transferId: string, data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		createReverse(
		transferId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		createReverse(
		transferId: string, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieveReversal(
		transferId: string, reversalId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieveReversal(
		transferId: string, reversalId: string, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		updateReversal(
		transferId: string, reversalId: string, data: transferReversals.IReversalUpdateOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		updateReversal(
		transferId: string, reversalId: string, data: transferReversals.IReversalUpdateOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		listReversals(
		transferId: string, data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		listReversals(
		transferId: string, data: IListOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		listReversals(
		transferId: string, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		listReversals(
		transferId: string, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		setMetadata(): void;
		getMetadata(): void
	}

	declare class TransferReversals extends StripeResource {
		create(
		data: transferReversals.IReversalCreationOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		create(
		options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		create(
		response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieve(
		reversalId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieve(
		reversalId: string, data: IDataOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieve(
		reversalId: string, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		retrieve(
		reversalId: string, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		update(
		reversalId: string, data: transferReversals.IReversalUpdateOptions, options: HeaderOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		update(
		reversalId: string, data: transferReversals.IReversalUpdateOptions, response?: IResponseFn<transferReversals.IReversal>
	): Promise<transferReversals.IReversal>;
		list(
		data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		list(
		data: IListOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>;
		list(
		response?: IResponseFn<IList<transferReversals.IReversal>>
	): Promise<IList<transferReversals.IReversal>>
	}

	declare class CountrySpecs extends StripeResource {
		list(
		data: IListOptions, options: HeaderOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>
	): Promise<IList<countrySpecs.ICountrySpec>>;
		list(
		data: IListOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>
	): Promise<IList<countrySpecs.ICountrySpec>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<countrySpecs.ICountrySpec>>
	): Promise<IList<countrySpecs.ICountrySpec>>;
		list(
		response?: IResponseFn<IList<countrySpecs.ICountrySpec>>
	): Promise<IList<countrySpecs.ICountrySpec>>;
		retrieve(
		id: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<countrySpecs.ICountrySpec>
	): Promise<countrySpecs.ICountrySpec>;
		retrieve(
		id: string, data: IDataOptions, response?: IResponseFn<countrySpecs.ICountrySpec>
	): Promise<countrySpecs.ICountrySpec>;
		retrieve(
		id: string, options: HeaderOptions, response?: IResponseFn<countrySpecs.ICountrySpec>
	): Promise<countrySpecs.ICountrySpec>;
		retrieve(
		id: string, response?: IResponseFn<countrySpecs.ICountrySpec>
	): Promise<countrySpecs.ICountrySpec>
	}

	declare class Orders  {
		create(
		data: orders.IOrderCreationOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		create(
		data: orders.IOrderCreationOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		retrieve(
		orderId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		retrieve(
		orderId: string, data: IDataOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		retrieve(
		orderId: string, options: HeaderOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		retrieve(orderId: string, response?: IResponseFn<orders.IOrder>): Promise<orders.IOrder>;
		update(
		orderId: string, data: orders.IOrderUpdateOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		update(
		orderId: string, data: orders.IOrderUpdateOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		pay(
		orderId: string, data: orders.IOrderPayOptions, options: HeaderOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		pay(
		orderId: string, data: orders.IOrderPayOptions, response?: IResponseFn<orders.IOrder>
	): Promise<orders.IOrder>;
		list(
		data: orders.IOrderListOptions, options: HeaderOptions, response?: IResponseFn<IList<orders.IOrder>>
	): Promise<IList<orders.IOrder>>;
		list(
		data: orders.IOrderListOptions, response?: IResponseFn<IList<orders.IOrder>>
	): Promise<IList<orders.IOrder>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<orders.IOrder>>
	): Promise<IList<orders.IOrder>>;
		list(response?: IResponseFn<IList<orders.IOrder>>): Promise<IList<orders.IOrder>>
	}

	declare class Products  {
		create(
		data: products.IProductCreationOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		create(
		data: products.IProductCreationOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		retrieve(
		productId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		retrieve(
		productId: string, data: IDataOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		retrieve(
		productId: string, options: HeaderOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		retrieve(
		productId: string, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		update(
		productId: string, data: products.IProductUpdateOptions, options: HeaderOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		update(
		productId: string, data: products.IProductUpdateOptions, response?: IResponseFn<products.IProduct>
	): Promise<products.IProduct>;
		list(
		data: products.IProductListOptions, options: HeaderOptions, response?: IResponseFn<IList<products.IProduct>>
	): Promise<IList<products.IProduct>>;
		list(
		data: products.IProductListOptions, response?: IResponseFn<IList<products.IProduct>>
	): Promise<IList<products.IProduct>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<products.IProduct>>
	): Promise<IList<products.IProduct>>;
		list(
		response?: IResponseFn<IList<products.IProduct>>
	): Promise<IList<products.IProduct>>;
		del(
		productId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		productId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>
	}

	declare class SKUs  {
		create(
		data: skus.ISkuCreationOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		create(
		data: skus.ISkuCreationOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		retrieve(
		skuId: string, data: IDataOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		retrieve(
		skuId: string, data: IDataOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		retrieve(
		skuId: string, options: HeaderOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		retrieve(skuId: string, response?: IResponseFn<skus.ISku>): Promise<skus.ISku>;
		update(
		skuId: string, data: skus.ISkuUpdateOptions, options: HeaderOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		update(
		skuId: string, data: skus.ISkuUpdateOptions, response?: IResponseFn<skus.ISku>
	): Promise<skus.ISku>;
		list(
		data: skus.ISkuListOptions, options: HeaderOptions, response?: IResponseFn<IList<skus.ISku>>
	): Promise<IList<skus.ISku>>;
		list(
		data: skus.ISkuListOptions, response?: IResponseFn<IList<skus.ISku>>
	): Promise<IList<skus.ISku>>;
		list(
		options: HeaderOptions, response?: IResponseFn<IList<skus.ISku>>
	): Promise<IList<skus.ISku>>;
		list(response?: IResponseFn<IList<skus.ISku>>): Promise<IList<skus.ISku>>;
		del(
		skuId: string, options: HeaderOptions, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>;
		del(
		skuId: string, response?: IResponseFn<IDeleteConfirmation>
	): Promise<IDeleteConfirmation>
	}

	
}