

declare module 'twilio' {
		declare interface twilio {
		(sid?: string, tkn?: string, options?: twilio.ClientOptions): twilio.RestClient
	}

			declare module.exports: undefined


}

declare module 'npm$namespace$twilio' {
		declare export interface GrantPayload {
		
	}

	declare export interface Grant {
		toPayload(): GrantPayload
	}

	declare export interface RequestCallback {
		(err: any, data: any, response: Http.ClientResponse): void
	}

	declare export interface BaseRequestCallback {
		(err: any, data: any): void
	}

	declare export interface RestMethod {
		(args: any | BaseRequestCallback, callback?: RequestCallback): Q.Promise<any>
	}

	declare export interface BaseMappedResource<T> {
		(resourceSid: string): T
	}

	declare export interface Resource {
		get: RestMethod
	}

	declare export interface DeletableResource {
		delete: RestMethod
	}

	declare export interface ListableResource {
		list: RestMethod
	}

	declare export interface MappedResource<T> {
		
	}

	declare export interface PostableResource {
		post: RestMethod
	}

	declare export interface InstanceResource {
		update: RestMethod
	}

	declare export interface CreatableMappedResource<T> {
		create: RestMethod
	}

	declare export interface ListMappedResource<T> {
		
	}

	declare export interface IpMessagingGrantOptions {
		serviceSid: string,
		endpointId: string,
		deploymentRoleSid: string,
		pushCredentialSid: string
	}

	declare export interface IpMessagingGrantPayload {
		service_sid: string,
		endpoint_id: string,
		deployment_role_sid: string,
		push_credential_sid: string
	}

	declare export interface ConversationsGrantOptions {
		configurationProfileSid: string
	}

	declare export interface ConversationsGrantPayload {
		configuration_profile_sid: string
	}

	declare export interface AccessTokenOptions {
		ttl: number,
		identity: string,
		nbf: number
	}

	declare export interface ClientOptions {
		host?: string,
		apiVersion?: string,
		timeout?: number
	}

	declare export interface ClientRequestOptions {
		url: string,
		method?: string,
		form?: any
	}

	declare export interface Policy {
		url: string,
		method: string,
		query_filter?: any,
		post_filter?: any,
		allow: boolean
	}

	declare export interface NodeOptions {
		name: string,
		attributes?: any,
		text?: string,
		topLevel?: boolean,
		legalNodes: Array<string>
	}

	declare export interface TwimlMethod {
		(): Node,
		(arg1: TwimlCallback | string, arg2?: any): Node,
		(arg1: any, arg2?: TwimlCallback | string): Node
	}

	declare export interface TwimlCallback {
		(node: Node): void
	}

	declare export interface WebhookOptions {
		validate?: boolean,
		includeHelpers?: boolean,
		host?: string,
		protocol?: string
	}

	declare export interface WebhookExpressOptions {
		url?: string,
		host?: string,
		protocol?: string
	}

	declare export interface MiddlewareFunction {
		(request: Http.ServerRequest, response: Http.ServerResponse, next: Express.NextFunction): void
	}

	declare export interface OutgoingCallerIdInstance {
		put: RestMethod
	}

	declare export interface OutgoingCallerIdResource {
		
	}

	declare export interface SMSMessageInstance {
		
	}

	declare export interface SMSMessageResource {
		
	}

	declare export interface SMSShortCodeInstance {
		update: RestMethod
	}

	declare export interface SMSShortCodeResource {
		
	}

	declare export interface SMSIntermediary {
		messages: SMSMessageResource,
		shortCodes: SMSShortCodeResource
	}

	declare export interface ApplicationInstance {
		
	}

	declare export interface ApplicationResource {
		
	}

	declare export interface ConnectAppInstance {
		update: RestMethod
	}

	declare export interface ConnectAppResource {
		
	}

	declare export interface AuthorizedConnectAppInstance {
		
	}

	declare export interface AuthorizedConnectAppResource {
		
	}

	declare export interface TokenInstance {
		
	}

	declare export interface TokenResource {
		post: RestMethod,
		create: RestMethod
	}

	declare export interface TranscriptionInstance {
		
	}

	declare export interface TranscriptionResource {
		
	}

	declare export interface NotificationInstance {
		
	}

	declare export interface NotificationResource {
		
	}

	declare export interface UsageTriggerInstance {
		
	}

	declare export interface UsageTriggerResource {
		
	}

	declare export interface UsageIntermediary {
		records: UsageRecordResource,
		triggers: UsageTriggerResource
	}

	declare export interface SIPIntermediary {
		domains: DomainResource,
		ipAccessControlLists: IPAccessControlListResource,
		credentialLists: CredentialListResource
	}

	declare export interface KeyInstance {
		
	}

	declare export interface KeyResource {
		
	}

	declare export interface AccountInstance {
		update: RestMethod,
		put: RestMethod,
		availablePhoneNumbers: AvailablePhoneNumberResource,
		outgoingCallerIds: OutgoingCallerIdResource,
		incomingPhoneNumbers: IncomingPhoneNumberResource,
		messages: MessageResource,
		sms: SMSIntermediary,
		applications: ApplicationResource,
		connectApps: ConnectAppResource,
		authorizedConnectApps: AuthorizedConnectAppResource,
		calls: CallResource,
		conferences: ConferenceResource,
		queues: QueueResource,
		recordings: RecordingResource,
		tokens: TokenResource,
		transcriptions: TranscriptionResource,
		notifications: NotificationResource,
		usage: UsageIntermediary,
		sip: SIPIntermediary,
		addresses: AddressResource,
		keys: KeyResource
	}

	declare export interface AccountResource {
		
	}

	declare export interface DependentPhoneNumberResource {
		
	}

	declare export interface AddressInstance {
		dependentPhoneNumbers: DependentPhoneNumberResource
	}

	declare export interface AddressResource {
		
	}

	declare export interface AvailablePhoneNumberResourceGroup {
		search: RestMethod
	}

	declare export interface AvailablePhoneNumberInstance {
		local: AvailablePhoneNumberResourceGroup,
		tollFree: AvailablePhoneNumberResourceGroup,
		mobile: AvailablePhoneNumberResourceGroup
	}

	declare export interface AvailablePhoneNumberResource {
		
	}

	declare export interface CallRecordingResource {
		
	}

	declare export interface CallNotificationResource {
		
	}

	declare export interface CallFeedbackResource {
		create: RestMethod
	}

	declare export interface CallInstance {
		recordings: CallRecordingResource,
		notifications: CallNotificationResource,
		feedback: CallFeedbackResource
	}

	declare export interface CallFeedbackSummaryInstance {
		
	}

	declare export interface CallFeedbackSummaryResource {
		post: RestMethod,
		create: RestMethod
	}

	declare export interface CallResource {
		feedbackSummary: CallFeedbackSummaryResource
	}

	declare export interface ConferenceParticipantInstance {
		kick: RestMethod
	}

	declare export interface ConferenceParticipantResource {
		
	}

	declare export interface ConferenceInstance {
		participants: ConferenceParticipantResource
	}

	declare export interface ConferenceResource {
		
	}

	declare export interface IncomingPhoneNumberResourceGroup {
		create: RestMethod
	}

	declare export interface IncomingPhoneNumberInstance {
		put: RestMethod
	}

	declare export interface IncomingPhoneNumberResource {
		local: IncomingPhoneNumberResourceGroup,
		tollFree: IncomingPhoneNumberResourceGroup,
		mobile: IncomingPhoneNumberResourceGroup
	}

	declare export interface MessageMediaInstance {
		
	}

	declare export interface MessageMediaResource {
		
	}

	declare export interface MessageInstance {
		media: MessageMediaResource
	}

	declare export interface MessageResource {
		
	}

	declare export interface QueueMemberInstance {
		update: RestMethod
	}

	declare export interface QueueMemberResource {
		front: QueueMemberInstance
	}

	declare export interface QueueInstance {
		members: QueueMemberResource
	}

	declare export interface QueueResource {
		
	}

	declare export interface RecordingTranscriptionResource {
		
	}

	declare export interface RecordingInstance {
		transcriptions: RecordingTranscriptionResource
	}

	declare export interface RecordingResource {
		
	}

	declare export interface UsageRecordInstance {
		
	}

	declare export interface UsageRecordRange {
		
	}

	declare export interface UsageRecordResource {
		daily: UsageRecordRange,
		monthly: UsageRecordRange,
		yearly: UsageRecordRange,
		allTime: UsageRecordRange,
		today: UsageRecordRange,
		yesterday: UsageRecordRange,
		thisMonth: UsageRecordRange,
		lastMonth: UsageRecordRange
	}

	declare export interface CredentialInstance {
		
	}

	declare export interface CredentialResource {
		
	}

	declare export interface ServiceUserInstance {
		
	}

	declare export interface ServiceUserResource {
		
	}

	declare export interface ServiceRoleInstance {
		
	}

	declare export interface ServiceRoleResource {
		
	}

	declare export interface ServiceChannelMessageInstance {
		
	}

	declare export interface ServiceChannelMessageResource {
		
	}

	declare export interface ServiceChannelMemberInstance {
		
	}

	declare export interface ServiceChannelMemberResource {
		
	}

	declare export interface ServiceChannelInstance {
		messages: ServiceChannelMessageResource,
		members: ServiceChannelMemberResource
	}

	declare export interface ServiceChannelResource {
		
	}

	declare export interface ServiceInstance {
		users: ServiceUserResource,
		roles: ServiceRoleResource,
		channels: ServiceChannelResource
	}

	declare export interface ServiceResource {
		
	}

	declare export interface PhoneNumberInstance {
		
	}

	declare export interface PhoneNumberResource {
		
	}

	declare export interface AlertInstance {
		
	}

	declare export interface AlertResource {
		
	}

	declare export interface EventInstance {
		
	}

	declare export interface EventResource {
		
	}

	declare export interface CountryInstance {
		
	}

	declare export interface CountryResource {
		
	}

	declare export interface PricingMessagingResource {
		countries: CountryResource
	}

	declare export interface PricingPhoneNumberResource {
		countries: CountryResource
	}

	declare export interface NumberInstance {
		
	}

	declare export interface NumberResource {
		
	}

	declare export interface PricingVoiceResource {
		countries: CountryResource,
		numbers: NumberResource
	}

	declare export interface CredentialListInstance {
		credentials: CredentialResource
	}

	declare export interface CredentialListResource {
		
	}

	declare export interface IPAccessControlListMappingInstance {
		
	}

	declare export interface IPAccessControlListMappingResource {
		
	}

	declare export interface CredentialListMappingInstance {
		
	}

	declare export interface CredentialListMappingResource {
		
	}

	declare export interface DomainInstance {
		ipAccessControlListMappings: IPAccessControlListMappingResource,
		credentialListMappings: CredentialListMappingResource
	}

	declare export interface DomainResource {
		
	}

	declare export interface IPAddressInstance {
		
	}

	declare export interface IPAddressResource {
		
	}

	declare export interface IPAccessControlListInstance {
		ipAddresses: IPAddressResource
	}

	declare export interface IPAccessControlListResource {
		
	}

	declare export interface WorkflowRuleTargetOptions {
		queue: string,
		expression?: string,
		priority?: number,
		timeout?: number
	}

	declare export interface WorkflowRuleOptions {
		expression: string,
		targets: Array<WorkflowRuleTargetOptions>,
		friendly_name?: string,
		friendlyName?: string,
		filter_friendly_name?: string
	}

	declare export interface TaskRoutingConfigurationOptions {
		filters: Array<WorkflowRuleOptions>,
		default_filter?: WorkflowRuleOptions,
		defaultFilter?: WorkflowRuleOptions
	}

	declare export interface WorkflowConfigurationOptions {
		task_routing?: TaskRoutingConfigurationOptions,
		taskRouting?: TaskRoutingConfigurationOptions
	}

	declare export interface WorkspaceActivityInstance {
		
	}

	declare export interface WorkspaceActivityResource {
		
	}

	declare export interface WorkspaceEventInstance {
		
	}

	declare export interface WorkspaceEventResource {
		
	}

	declare export interface WorkspaceTaskReservationInstance {
		update: RestMethod
	}

	declare export interface WorkspaceTaskReservationResource {
		
	}

	declare export interface WorkspaceTaskInstance {
		reservations: WorkspaceTaskReservationResource
	}

	declare export interface WorkspaceTaskResource {
		
	}

	declare export interface WorkspaceInstanceStatisticResource {
		
	}

	declare export interface WorkspaceStatisticResource {
		
	}

	declare export interface WorkspaceTaskQueueInstance {
		statistics: WorkspaceInstanceStatisticResource
	}

	declare export interface WorkspaceTaskQueueResource {
		statistics: WorkspaceStatisticResource
	}

	declare export interface WorkspaceWorkerReservationInstance {
		update: RestMethod
	}

	declare export interface WorkspaceWorkerReservationResource {
		
	}

	declare export interface WorkspaceWorkerInstance {
		statistics: WorkspaceInstanceStatisticResource,
		reservations: WorkspaceWorkerReservationResource
	}

	declare export interface WorkspaceWorkerResource {
		statistics: WorkspaceStatisticResource
	}

	declare export interface WorkspaceWorkflowInstance {
		statistics: WorkspaceInstanceStatisticResource
	}

	declare export interface WorkspaceWorkflowResource {
		statistics: WorkspaceStatisticResource
	}

	declare export interface WorkspaceInstance {
		activities: WorkspaceActivityResource,
		events: WorkspaceEventResource,
		tasks: WorkspaceTaskResource,
		taskQueues: WorkspaceTaskQueueResource,
		workers: WorkspaceWorkerResource,
		workflows: WorkspaceWorkflowResource,
		statistics: WorkspaceInstanceStatisticResource
	}

	declare export interface WorkspaceResource {
		
	}

	declare export interface OriginationURLInstance {
		
	}

	declare export interface OriginationURLResource {
		
	}

	declare export interface TrunkInstance {
		ipAccessControlLists: IPAccessControlListResource,
		credentialLists: CredentialListResource,
		phoneNumbers: PhoneNumberResource,
		originationUrls: OriginationURLResource
	}

	declare export interface TrunkResource {
		
	}

	declare export function webhook(authToken: string, options?: WebhookOptions): MiddlewareFunction

	declare export function webhook(options?: WebhookOptions): MiddlewareFunction

	declare export function validateRequest(authToken: string, twilioHeader: string, url: string, params?: any): boolean

	declare export function validateExpressRequest(
		request: Express.Request, authToken: string, options?: WebhookExpressOptions
	): boolean

	declare export class IpMessagingGrant extends Grant {
		serviceSid: string;
		endpointId: string;
		deploymentRoleSid: string;
		pushCredentialSid: string;
		key: string;
		constructor(options?: IpMessagingGrantOptions): this;
		toPayload(): IpMessagingGrantPayload
	}

	declare export class ConversationsGrant extends Grant {
		configurationProfileSid: string;
		constructor(options?: ConversationsGrantOptions): this;
		toPayload(): ConversationsGrantPayload
	}

	declare export class AccessToken  {
		accountSid: string;
		keySid: string;
		secret: string;
		ttl: number;
		identity: string;
		nbf: number;
		grants: Array<Grant>;
		IpMessagingGrant: IpMessagingGrant;
		ConversationGrant: ConversationsGrant;
		DEFAULT_ALGORITHM: string;
		ALGORITHMS: Array<string>;
		constructor(accountSid: string, keySid: string, secret: string, opts?: AccessTokenOptions): this;
		addGrant(grant: Grant): void;
		toJwt(algorithm: string): any
	}

	declare export class Capability  {
		accountSid: string;
		authToken: string;
		capabilities: Array<string>;
		clientName: string;
		outgoingScopeParams: any;
		scopeParams: any;
		constructor(sid?: string, tkn?: string): this;
		allowClientIncoming(clientName: string): Capability;
		allowClientOutgoing(appSid: string, params?: any): Capability;
		allowEventStream(filters?: any): Capability;
		generate(timeout?: number): string
	}

	declare export class Client  {
		accountSid: string;
		authToken: string;
		host: string;
		apiVersion: string;
		timeout: number;
		constructor(sid?: string, tkn?: string, host?: string, api_version?: string, timeout?: number): this;
		getBaseUrl(): string;
		request(options: ClientRequestOptions, callback?: RequestCallback): Q.Promise<any>
	}

	declare export class IpMessagingClient extends Client {
		services: ServiceResource;
		credentials: CredentialResource;
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this
	}

	declare export class LookupsClient extends Client {
		phoneNumbers: PhoneNumberResource;
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this
	}

	declare export class MonitorClient extends Client {
		events: EventResource;
		alerts: AlertResource;
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this
	}

	declare export class PricingClient extends Client {
		voice: PricingVoiceResource;
		phoneNumbers: PricingPhoneNumberResource;
		messaging: PricingMessagingResource;
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this
	}

	declare export class RestClient extends Client {
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this;
		accounts: AccountResource;
		availablePhoneNumbers: AvailablePhoneNumberResource;
		outgoingCallerIds: OutgoingCallerIdResource;
		incomingPhoneNumbers: IncomingPhoneNumberResource;
		messages: MessageResource;
		sms: SMSIntermediary;
		applications: ApplicationResource;
		connectApps: ConnectAppResource;
		authorizedConnectApps: AuthorizedConnectAppResource;
		calls: CallResource;
		conferences: ConferenceResource;
		queues: QueueResource;
		recordings: RecordingResource;
		tokens: TokenResource;
		transcriptions: TranscriptionResource;
		notifications: NotificationResource;
		usage: UsageIntermediary;
		sip: SIPIntermediary;
		addresses: AddressResource;
		keys: KeyResource;
		put: RestMethod;
		post: RestMethod;
		get: RestMethod;
		update: RestMethod;
		list: RestMethod;
		sendSms: RestMethod;
		sendMms: RestMethod;
		sendMessage: RestMethod;
		listSms: RestMethod;
		listMessages: RestMethod;
		getSms(messageSid: string, callback?: RequestCallback): Q.Promise<any>;
		getMessage(messageSid: string, callback?: RequestCallback): Q.Promise<any>;
		makeCall: RestMethod;
		listCalls: RestMethod;
		getCall(callSid: string, callback?: RequestCallback): Q.Promise<any>;
		request(options: ClientRequestOptions, callback?: RequestCallback): Q.Promise<any>
	}

	declare export class TaskRouterCapability  {
		accountSid: string;
		authToken: string;
		policies: Array<Policy>;
		workspaceSid: string;
		channelId: string;
		constructor(accountSid: string, authToken: string, workspaceSid: string, channelId: string): this;
		_setupResource(): void;
		allowFetchSubresources(): void;
		allowUpdates(): void;
		allowUpdatesSubresources(): void;
		allowDelete(): void;
		allowDeleteSubresources(): void;
		allowWorkerActivityUpdates(): void;
		allowWorkerFetchAttributes(): void;
		allowTaskReservationUpdates(): void;
		addPolicy(
		url: string, method: string, allowed?: boolean, queryFilter?: any, postFilter?: any
	): void;
		allow(url: string, method: string, queryFilter?: any, postFilter?: any): void;
		deny(url: string, method: string, queryFilter?: any, postFilter?: any): void;
		generate(ttl: number): string
	}

	declare export class TaskRouterClient extends Client {
		workspaces: WorkspaceResource;
		workspace: WorkspaceResource;
		constructor(sid?: string, tkn?: string, workspaceSid?: string, options?: ClientOptions): this
	}

	declare export class TaskRouterTaskQueueCapability extends TaskRouterCapability {
		constructor(accountSid: string, authToken: string, workspaceSid: string, taskQueueSid: string): this;
		_setupResource(): void
	}

	declare export class TaskRouterWorkerCapability extends TaskRouterCapability {
		reservationsUrl: string;
		activityUrl: string;
		workerReservationsUrl: string;
		constructor(accountSid: string, authToken: string, workspaceSid: string, workerSid: string): this;
		_setupResource(): void;
		allowActivityUpdates(): void;
		allowReservationUpdates(): void
	}

	declare export class TaskRouterWorkspaceCapability extends TaskRouterCapability {
		constructor(accountSid: string, authToken: string, workspaceSid: string): this;
		_setupResource(): void
	}

	declare export class TrunkingClient extends Client {
		trunks: TrunkResource;
		constructor(sid?: string, tkn?: string, options?: ClientOptions): this
	}

	declare export class Node extends NodeOptions {
		name: string;
		attributes: any;
		text: any;
		topLevel: boolean;
		legalNodes: Array<string>;
		constructor(config?: NodeOptions): this;
		gather: TwimlMethod;
		say: TwimlMethod;
		play: TwimlMethod;
		pause: TwimlMethod;
		dial: TwimlMethod;
		number: TwimlMethod;
		client: TwimlMethod;
		conference: TwimlMethod;
		queue: TwimlMethod;
		sip: TwimlMethod;
		message: TwimlMethod;
		media: TwimlMethod;
		body: TwimlMethod;
		enqueue: TwimlMethod;
		task: TwimlMethod;
		record: TwimlMethod;
		sms: TwimlMethod;
		hangup: TwimlMethod;
		redirect: TwimlMethod;
		reject: TwimlMethod;
		leave: TwimlMethod;
		toString(): string
	}

	declare export class TwimlResponse extends Node {
		
	}

	declare export class WorkflowRuleTarget  {
		queue: string;
		expression: string;
		priority: number;
		timeout: number;
		constructor(options?: WorkflowRuleTargetOptions): this
	}

	declare export class WorkflowRule  {
		friendly_name: string;
		expression: string;
		targets: Array<WorkflowRuleTarget>;
		friendlyName: string;
		constructor(options?: WorkflowRuleOptions): this
	}

	declare export class TaskRoutingConfiguration  {
		filters: Array<WorkflowRule>;
		default_filter: WorkflowRuleOptions;
		defaultFilter: WorkflowRuleOptions;
		constructor(options?: TaskRoutingConfigurationOptions): this
	}

	declare export class WorkflowConfiguration  {
		task_routing: TaskRoutingConfiguration;
		taskRouting: TaskRoutingConfiguration;
		constructor(options?: WorkflowConfigurationOptions): this;
		fromJSON(json: string): WorkflowConfiguration;
		toJSON(): string
	}

	
}