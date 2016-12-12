

declare module 'aws-sdk' {
		declare export interface Logger {
		write?: (chunk: any, encoding?: string, callback?: () => void) => void,
		log?: (...messages: any[]) => void
	}

	declare export interface HttpOptions {
		proxy?: string,
		agent?: any,
		timeout?: number,
		xhrAsync?: boolean,
		xhrWithCredentials?: boolean
	}

	declare interface AwsError {
		stack: string
	}

	declare export interface RetryDelayOption {
		base?: number,
		customBackoff?: (retryCount: number) => number
	}

	declare export interface Ebs {
		SnapshotId?: string,
		VolumeSize?: number,
		VolumeType?: string,
		DeleteOnTermination?: boolean,
		Iops?: number,
		Encrypted?: boolean
	}

	declare export interface BlockDeviceMapping {
		VirtualName?: string,
		DeviceName: string,
		Ebs?: Ebs,
		NoDevice?: boolean
	}

	declare export interface InstanceMonitoring {
		SpotPrice?: string,
		Enabled?: boolean
	}

	declare export interface Filter {
		Name?: string,
		Values?: boolean
	}

	declare export interface StepAdjustment {
		scalingAdjustment: number,
		metricIntervalLowerBound?: number,
		metricIntervalUpperBound?: number
	}

	declare export interface Tags {
		resourceId?: string,
		resourceType?: string,
		key: string,
		value?: string,
		propagateAtLaunch?: boolean
	}

	declare export interface Services {
		autoscaling?: any,
		cloudformation?: any,
		cloudfront?: any,
		cloudsearch?: any,
		cloudsearchdomain?: any,
		cloudtrail?: any,
		cloudwatch?: any,
		cloudwatchlogs?: any,
		cognitoidentity?: any,
		cognitosync?: any,
		datapipeline?: any,
		directconnect?: any,
		dynamodb?: any,
		ec2?: any,
		ecs?: any,
		elasticache?: any,
		elasticbeanstalk?: any,
		elastictranscoder?: any,
		elb?: any,
		emr?: any,
		glacier?: any,
		httpOptions?: HttpOptions,
		iam?: any,
		importexport?: any,
		kinesis?: any,
		opsworks?: any,
		rds?: any,
		redshift?: any,
		route53?: any,
		route53domains?: any,
		s3?: any,
		ses?: any,
		simpledb?: any,
		sns?: any,
		sqs?: any,
		storagegateway?: any,
		sts?: any,
		support?: any,
		swf?: any
	}

	declare export interface ClientConfigPartial {
		credentials?: Credentials,
		region?: string,
		accessKeyId?: string,
		secretAccessKey?: string,
		computeChecksums?: boolean,
		convertResponseTypes?: boolean,
		logger?: Logger,
		maxRedirects?: number,
		maxRetries?: number,
		paramValidation?: boolean,
		s3ForcePathStyle?: boolean,
		apiVersion?: any,
		apiVersions?: Services,
		signatureVersion?: string,
		sslEnabled?: boolean,
		systemClockOffset?: number
	}

	declare export interface ClientConfig {
		update?: (options: ClientConfigPartial, allUnknownKeys?: boolean) => void,
		getCredentials?: (callback: (err?: any) => void) => void,
		loadFromPath?: (path: string) => void,
		credentials: Credentials,
		region: string
	}

	declare export function Config(json: any): void

	declare export class Credentials  {
		constructor(accessKeyId: string, secretAccessKey: string, sessionToken?: string): this;
		accessKeyId: string
	}

	declare export class EnvironmentCredentials extends Credentials {
		constructor(profile: string): this
	}

	declare export class CognitoIdentityCredentials extends Credentials {
		constructor(params: CognitoIdentity.CognitoIdentityCredentialsParams): this
	}

	declare export class Endpoint  {
		constructor(endpoint: string): this;
		host: string;
		hostname: string;
		href: string;
		port: number;
		protocol: string
	}

	declare export class CloudFormation  {
		constructor(options?: CloudFormation.Options): this;
		endpoint: Endpoint;
		cancelUpdateStack(
		params: CloudFormation.CancelUpdateStackParams, callback: (err: AwsError, data: any) => void
	): void;
		continueUpdateRollback(
		params: CloudFormation.ContinueUpdateRollbackParams, callback: (err: AwsError, data: any) => void
	): void;
		createChangeSet(
		params: CloudFormation.CreateChangeSetParams, callback: (err: AwsError, data: any) => void
	): void;
		createStack(
		params: CloudFormation.CreateStackParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteChangeSet(
		params: CloudFormation.DeleteChangeSetParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteStack(
		params: CloudFormation.DeleteStackParams, callback: (err: AwsError, data: any) => void
	): void;
		describeAccountLimits(
		params: CloudFormation.DescribeAccountLimitsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeChangeSet(
		params: CloudFormation.DescribeChangeSetParams, callback: (err: AwsError, data: any) => void
	): void;
		describeStackEvents(
		params: CloudFormation.DescribeStackEventsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeStackResource(
		params: CloudFormation.DescribeStackResourceParams, callback: (err: AwsError, data: any) => void
	): void;
		describeStackResources(
		params: CloudFormation.DescribeStackResourcesParams, callback: (err: AwsError, data: any) => void
	): void;
		describeStacks(
		params: CloudFormation.DescribeStacksParams, callback: (err: AwsError, data: any) => void
	): void;
		estimateTemplateCost(
		params: CloudFormation.EstimateTemplateCostParams, callback: (err: AwsError, data: any) => void
	): void;
		executeChangeSet(
		params: CloudFormation.ExecuteChangeSetParams, callback: (err: AwsError, data: any) => void
	): void;
		getStackPolicy(
		params: CloudFormation.GetStackPolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		getTemplate(
		params: CloudFormation.GetTemplateParams, callback: (err: AwsError, data: any) => void
	): void;
		getTemplateSummary(
		params: CloudFormation.GetTemplateSummaryParams, callback: (err: AwsError, data: any) => void
	): void;
		listChangeSets(
		params: CloudFormation.ListChangeSetsParams, callback: (err: AwsError, data: any) => void
	): void;
		listStackResources(
		params: CloudFormation.ListStackResourcesParams, callback: (err: AwsError, data: any) => void
	): void;
		listStacks(
		params: CloudFormation.ListStacksParams, callback: (err: AwsError, data: any) => void
	): void;
		setStackPolicy(
		params: CloudFormation.SetStackPolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		signalResource(
		params: CloudFormation.SignalResourceParams, callback: (err: AwsError, data: any) => void
	): void;
		updateStack(
		params: CloudFormation.UpdateStackParams, callback: (err: AwsError, data: any) => void
	): void;
		validateTemplate(
		params: CloudFormation.ValidateTemplateParams, callback: (err: AwsError, data: any) => void
	): void;
		waitFor(
		state: string, params: CloudFormation.WaitForParams, callback: (err: AwsError, data: any) => void
	): void
	}

	declare export class Lambda  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		addPermission(
		params: Lambda.AddPermissionParams, callback: (err: AwsError, data: any) => void
	): void;
		createAlias(
		params: Lambda.CreateAliasParams, callback: (err: AwsError, data: any) => void
	): void;
		createEventSourceMapping(
		params: Lambda.CreateEventSourceMappingParams, callback: (err: AwsError, data: any) => void
	): void;
		createFunction(
		params: Lambda.CreateFunctionParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteAlias(
		params: Lambda.DeleteAliasParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteEventSourceMapping(
		params: Lambda.DeleteEventSourceMappingParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteFunction(
		params: Lambda.DeleteFunctionParams, callback: (err: AwsError, data: any) => void
	): void;
		getAlias(
		params: Lambda.GetAliasParams, callback: (err: AwsError, data: any) => void
	): void;
		getEventSourceMapping(
		params: Lambda.GetEventSourceMappingParams, callback: (err: AwsError, data: any) => void
	): void;
		getFunction(
		params: Lambda.GetFunctionParams, callback: (err: AwsError, data: any) => void
	): void;
		getFunctionConfiguration(
		params: Lambda.GetFunctionConfigurationParams, callback: (err: AwsError, data: any) => void
	): void;
		getPolicy(
		params: Lambda.GetPolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		invoke(
		params: Lambda.InvokeParams, callback: (err: AwsError, data: any) => void
	): void;
		listAliases(
		params: Lambda.ListAliasesParams, callback: (err: AwsError, data: any) => void
	): void;
		listEventSourceMappings(
		params: Lambda.ListEventSourceMappingsParams, callback: (err: AwsError, data: any) => void
	): void;
		listFunctions(
		params: Lambda.ListFunctionsParams, callback: (err: AwsError, data: any) => void
	): void;
		listVersionsByFunction(
		params: Lambda.ListVersionsByFunctionParams, callback: (err: AwsError, data: any) => void
	): void;
		publishVersion(
		params: Lambda.PublishVersionParams, callback: (err: AwsError, data: any) => void
	): void;
		removePermission(
		params: Lambda.RemovePermissionParams, callback: (err: AwsError, data: any) => void
	): void;
		updateAlias(
		params: Lambda.UpdateAliasParams, callback: (err: AwsError, data: any) => void
	): void;
		updateEventSourceMapping(
		params: Lambda.UpdateEventSourceMappingParams, callback: (err: AwsError, data: any) => void
	): void;
		updateFunctionCode(
		params: Lambda.UpdateFunctionCodeParams, callback: (err: AwsError, data: any) => void
	): void;
		updateFunctionConfiguration(
		params: Lambda.UpdateFunctionConfigurationParams, callback: (err: AwsError, data: any) => void
	): void
	}

	declare export class AutoScaling  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		attachInstances(
		params: AutoScaling.AttachInstancesParams, callback: (err: AwsError, data: any) => void
	): void;
		attachLoadBalancers(
		params: AutoScaling.AttachLoadBalancersParams, callback: (err: AwsError, data: any) => void
	): void;
		attachLoadBalancerTargetGroups(
		param: AutoScaling.AttachLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void
	): void;
		completeLifecycleAction(
		param: AutoScaling.CompleteLifecycleActionParams, callback: (err: AwsError, data: any) => void
	): void;
		createAutoScalingGroup(
		param: AutoScaling.CreateAutoScalingGroupParams, callback: (err: AwsError, data: any) => void
	): void;
		createLaunchConfiguration(
		param: AutoScaling.CreateLaunchConfigurationParams, callback: (err: AwsError, data: any) => void
	): void;
		createOrUpdateTags(
		param: AutoScaling.CreateOrUpdateTagsParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteAutoScalingGroup(
		param: AutoScaling.DeleteAutoScalingGroupParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteLaunchConfiguration(
		param: AutoScaling.DeleteLaunchConfigurationParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteLifecycleHook(
		param: AutoScaling.DeleteLifecycleHookParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteNotificationConfiguration(
		param: AutoScaling.DeleteNotificationConfigurationParams, callback: (err: AwsError, data: any) => void
	): void;
		deletePolicy(
		param: AutoScaling.DeletePolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteScheduledAction(
		param: AutoScaling.DeleteScheduledActionParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteTags(
		param: AutoScaling.DeleteTagsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeAccountLimits(callback: (err: AwsError, data: any) => void): void;
		describeAdjustmentTypes(callback: (err: AwsError, data: any) => void): void;
		describeAutoScalingGroups(
		param: AutoScaling.DescribeAutoScalingGroupsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeAutoScalingInstances(
		param: AutoScaling.DescribeAutoScalingInstancesParams, callback: (err: AwsError, data: any) => void
	): void;
		describeAutoScalingNotificationTypes(callback: (err: AwsError, data: any) => void): void;
		describeLaunchConfigurations(
		param: AutoScaling.DescribeLaunchConfigurationsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeLifecycleHooks(
		param: AutoScaling.DescribeLifecycleHooksParams, callback: (err: AwsError, data: any) => void
	): void;
		describeLifecycleHookTypes(callback: (err: AwsError, data: any) => void): void;
		describeLoadBalancers(
		param: AutoScaling.DescribeLoadBalancersParams, callback: (err: AwsError, data: any) => void
	): void;
		describeLoadBalancerTargetGroups(
		param: AutoScaling.DescribeLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeMetricCollectionTypes(callback: (err: AwsError, data: any) => void): void;
		describeNotificationConfigurations(
		param: AutoScaling.DescribeNotificationConfigurationsParams, callback: (err: AwsError, data: any) => void
	): void;
		describePolicies(
		param: AutoScaling.DescribePoliciesParams, callback: (err: AwsError, data: any) => void
	): void;
		describeScalingActivities(
		param: AutoScaling.DescribeScalingActivitiesParams, callback: (err: AwsError, data: any) => void
	): void;
		describeScalingProcessTypes(callback: (err: AwsError, data: any) => void): void;
		describeScheduledActions(
		param: AutoScaling.DescribeScheduledActionsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeTags(
		param: AutoScaling.DescribeTagsParams, callback: (err: AwsError, data: any) => void
	): void;
		describeTerminationPolicyTypes(callback: (err: AwsError, data: any) => void): void;
		detachInstances(
		param: AutoScaling.DetachInstancesParams, callback: (err: AwsError, data: any) => void
	): void;
		detachLoadBalancers(
		param: AutoScaling.DetachLoadBalancersParams, callback: (err: AwsError, data: any) => void
	): void;
		detachLoadBalancerTargetGroups(
		param: AutoScaling.DetachLoadBalancerTargetGroupsParams, callback: (err: AwsError, data: any) => void
	): void;
		disableMetricsCollection(
		param: AutoScaling.DisableMetricsCollectionParams, callback: (err: AwsError, data: any) => void
	): void;
		enableMetricsCollection(
		param: AutoScaling.EnableMetricsCollectionParams, callback: (err: AwsError, data: any) => void
	): void;
		enterStandby(
		param: AutoScaling.EnterStandbyParams, callback: (err: AwsError, data: any) => void
	): void;
		executePolicy(
		param: AutoScaling.ExecutePolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		exitStandby(
		param: AutoScaling.ExitStandbyParams, callback: (err: AwsError, data: any) => void
	): void;
		putLifecycleHook(
		param: AutoScaling.PutLifecycleHookParams, callback: (err: AwsError, data: any) => void
	): void;
		putNotificationConfiguration(
		param: AutoScaling.PutNotificationConfigurationParams, callback: (err: AwsError, data: any) => void
	): void;
		putScalingPolicy(
		param: AutoScaling.PutScalingPolicyParams, callback: (err: AwsError, data: any) => void
	): void;
		putScheduledUpdateGroupAction(
		param: AutoScaling.PutScheduledUpdateGroupActionParams, callback: (err: AwsError, data: any) => void
	): void;
		recordLifecycleActionHeartbeat(
		params: AutoScaling.RecordLifecycleActionHeartbeatParams, callback: (err: AwsError, data: any) => void
	): void;
		resumeProcesses(
		params: AutoScaling.ResumeProcessesParams, callback: (err: AwsError, data: any) => void
	): void;
		setDesiredCapacity(
		params: AutoScaling.SetDesiredCapacityParams, callback: (err: AwsError, data: any) => void
	): void;
		setInstanceHealth(
		params: AutoScaling.SetInstanceHealthParams, callback: (err: AwsError, data: any) => void
	): void;
		setInstanceProtection(
		params: AutoScaling.SetInstanceProtectionParams, callback: (err: AwsError, data: any) => void
	): void;
		suspendProcesses(
		params: AutoScaling.SuspendProcessesParams, callback: (err: AwsError, data: any) => void
	): void;
		terminateInstanceInAutoScalingGroup(
		params: AutoScaling.TerminateInstanceInAutoScalingGroupParams, callback: (err: AwsError, data: any) => void
	): void;
		updateAutoScalingGroup(
		params: AutoScaling.UpdateAutoScalingGroupParams, callback: (err: AwsError, data: any) => void
	): void
	}

	declare export class SQS  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		addPermission(
		params: SQS.AddPermissionParams, callback: (err: AwsError, data: any) => void
	): void;
		changeMessageVisibility(
		params: SQS.ChangeMessageVisibilityParams, callback: (err: AwsError, data: any) => void
	): void;
		changeMessageVisibilityBatch(
		params: SQS.ChangeMessageVisibilityBatchParams, callback: (err: AwsError, data: SQS.ChangeMessageVisibilityBatchResponse) => void
	): void;
		createQueue(
		params: SQS.CreateQueueParams, callback: (err: AwsError, data: SQS.CreateQueueResult) => void
	): void;
		deleteMessage(
		params: SQS.DeleteMessageParams, callback: (err: AwsError, data: any) => void
	): void;
		deleteMessageBatch(
		params: SQS.DeleteMessageBatchParams, callback: (err: AwsError, data: SQS.DeleteMessageBatchResult) => void
	): void;
		deleteQueue(
		params: {
		QueueUrl: string
	}, callback: (err: AwsError, data: any) => void
	): void;
		getQueueAttributes(
		params: SQS.GetQueueAttributesParams, callback: (err: AwsError, data: SQS.GetQueueAttributesResult) => void
	): void;
		getQueueUrl(
		params: SQS.GetQueueUrlParams, callback: (err: AwsError, data: {
		QueueUrl: string
	}) => void
	): void;
		listDeadLetterSourceQueues(
		params: {
		QueueUrl: string
	}, callback: (err: AwsError, data: {
		queueUrls: string[]
	}) => void
	): void;
		listQueues(
		params: {
		QueueNamePrefix?: string
	}, callback: (err: AwsError, data: {
		QueueUrls: string[]
	}) => void
	): void;
		purgeQueue(
		params: {
		QueueUrl: string
	}, callback: (err: AwsError, data: any) => void
	): void;
		receiveMessage(
		params: SQS.ReceiveMessageParams, callback: (err: AwsError, data: SQS.ReceiveMessageResult) => void
	): void;
		removePermission(
		params: {
		QueueUrl: string,
		Label: string
	}, callback: (err: AwsError, data: any) => void
	): void;
		sendMessage(
		params: SQS.SendMessageParams, callback: (err: AwsError, data: SQS.SendMessageResult) => void
	): void;
		sendMessageBatch(
		params: SQS.SendMessageBatchParams, callback: (err: AwsError, data: SQS.SendMessageBatchResult) => void
	): void;
		setQueueAttributes(
		params: SQS.SetQueueAttributesParams, callback: (err: AwsError, data: any) => void
	): void
	}

	declare export class SES  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		sendEmail(params: any, callback: (err: any, data: SES.SendEmailResult) => void): void
	}

	declare export class SNS  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		publish(request: Sns.PublishRequest, callback: (err: any, data: any) => void): void
	}

	declare export class SWF  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		countClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
		countOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
		countPendingActivityTasks(params: any, callback: (err: any, data: any) => void): void;
		countPendingDecisionTasks(params: any, callback: (err: any, data: any) => void): void;
		deprecateActivityType(params: any, callback: (err: any, data: any) => void): void;
		deprecateDomain(params: any, callback: (err: any, data: any) => void): void;
		deprecateWorkflowType(params: any, callback: (err: any, data: any) => void): void;
		describeActivityType(params: any, callback: (err: any, data: any) => void): void;
		describeDomain(params: any, callback: (err: any, data: any) => void): void;
		describeWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
		describeWorkflowType(params: any, callback: (err: any, data: any) => void): void;
		getWorkflowExecutionHistory(params: any, callback: (err: any, data: any) => void): void;
		listActivityTypes(params: any, callback: (err: any, data: any) => void): void;
		listClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
		listDomains(params: any, callback: (err: any, data: any) => void): void;
		listOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void;
		listWorkflowTypes(params: any, callback: (err: any, data: any) => void): void;
		pollForActivityTask(params: any, callback: (err: any, data: Swf.ActivityTask) => void): void;
		pollForDecisionTask(params: any, callback: (err: any, data: Swf.DecisionTask) => void): void;
		recordActivityTaskHeartbeat(params: any, callback: (err: any, data: any) => void): void;
		registerActivityType(params: any, callback: (err: any, data: any) => void): void;
		registerDomain(params: any, callback: (err: any, data: any) => void): void;
		registerWorkflowType(params: any, callback: (err: any, data: any) => void): void;
		requestCancelWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
		respondActivityTaskCanceled(
		params: Swf.RespondActivityTaskCanceledRequest, callback: (err: any, data: any) => void
	): void;
		respondActivityTaskCompleted(
		params: Swf.RespondActivityTaskCompletedRequest, callback: (err: any, data: any) => void
	): void;
		respondActivityTaskFailed(
		params: Swf.RespondActivityTaskFailedRequest, callback: (err: any, data: any) => void
	): void;
		respondDecisionTaskCompleted(
		params: Swf.RespondDecisionTaskCompletedRequest, callback: (err: any, data: any) => void
	): void;
		signalWorkflowExecution(params: any, callback: (err: any, data: any) => void): void;
		startWorkflowExecution(
		params: any, callback: (err: any, data: Swf.StartWorkflowExecutionResult) => void
	): void;
		terminateWorkflowExecution(params: any, callback: (err: any, data: any) => void): void
	}

	declare export class S3  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		getObject(params: s3.GetObjectRequest, callback?: (err: Error, data: any) => void): any;
		putObject(params: s3.PutObjectRequest, callback?: (err: Error, data: any) => void): any;
		copyObject(params: s3.CopyObjectRequest, callback?: (err: Error, data: any) => void): any;
		deleteObject(
		params: s3.DeleteObjectRequest, callback: (err: Error, data: any) => void
	): void;
		headObject(params: s3.HeadObjectRequest, callback: (err: Error, data: any) => void): void;
		getSignedUrl(operation: string, params: any): string;
		getSignedUrl(
		operation: string, params: any, callback: (err: Error, url: string) => void
	): void;
		upload(
		params?: s3.PutObjectRequest, options?: s3.UploadOptions, callback?: (err: Error, data: any) => void
	): void;
		listObjects(
		params: s3.ListObjectRequest, callback: (err: Error, data: s3.ListObjectResponse) => void
	): void;
		listObjectsV2(
		params: s3.ListObjectV2Request, callback: (err: Error, data: s3.ListObjectV2Response) => void
	): void;
		waitFor(
		state: string, params: s3.HeadObjectRequest, callback: (err: Error, data: any) => void
	): void;
		createMultipartUpload(params: any, callback: (err: Error, data: any) => void): void;
		uploadPart(params: any, callback: (err: Error, data: any) => void): void;
		listParts(params: any, callback: (err: Error, data: any) => void): void;
		completeMultipartUpload(params: any, callback: (err: Error, data: any) => void): void
	}

	declare export class STS  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		assumeRole(
		params: sts.AssumeRoleParams, callback: (err: any, data: sts.AssumeRoleCallbackData) => void
	): void;
		assumeRoleWithSAML(
		params: sts.AssumeRoleWithSAMLParams, callback: (err: any, data: any) => void
	): void;
		assumeRoleWithWebIdentity(
		params: sts.AssumeRoleWithWebIdentityParams, callback: (err: any, data: any) => void
	): void;
		credentialsFrom(
		params: sts.CredentialsFromParams, callback: (err: any, data: any) => void
	): void;
		decodeAuthorizationMessage(
		params: sts.DecodeAuthorizationMessageParams, callback: (err: any, data: any) => void
	): void;
		getCallerIdentity(params: {
		
	}, callback: (err: any, data: any) => void): void;
		getFederationToken(
		params: sts.GetFederationTokenParams, callback: (err: any, data: any) => void
	): void;
		getSessionToken(
		params: sts.GetSessionTokenParams, callback: (err: any, data: any) => void
	): void
	}

	declare export class ECS  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		createService(
		params: ecs.CreateServicesParams, callback: (err: any, data: any) => void
	): void;
		describeClusters(
		params: ecs.DescribeClustersParams, callback: (err: any, data: any) => void
	): void;
		describeServices(
		params: ecs.DescribeServicesParams, callback: (err: any, data: any) => void
	): void;
		describeTasks(params: ecs.DescribeTasksParams, callback: (err: any, data: any) => void): void;
		describeTaskDefinition(
		params: ecs.DescribeTaskDefinitionParams, callback: (err: any, data: any) => void
	): void;
		registerTaskDefinition(
		params: ecs.RegisterTaskDefinitionParams, callback: (err: any, data: any) => void
	): void;
		updateService(params: ecs.UpdateServiceParams, callback: (err: any, data: any) => void): void
	}

	declare export class DynamoDB  {
		constructor(options?: any): this;
		endpoint: Endpoint;
		createTable(params: any, next: (err: any, data: any) => void): void;
		deleteTable(params: any, next: (err: any, data: any) => void): void
	}

	
}

declare module 'CognitoIdentity' {
		declare export interface CognitoIdentityCredentialsParams {
		IdentityPoolId?: string,
		AccountId?: string,
		Logins?: {
		[k: string]: any
	},
		RoleArn?: string,
		RoleSessionName?: string,
		WebIdentityToken?: string,
		ProviderId?: string,
		Policy?: string,
		DurationSeconds?: number,
		IdentityId?: string
	}

			
}

declare module 'DynamoDB' {
	declare type _DDBDC_ComparisonOperator = "EQ" | "NE" | "IN" | "LE" | "LT" | "GE" | "GT" | "BETWEEN" | "NOT_NULL" | "NULL" | "CONTAINS" | "NOT_CONTAINS" | "BEGINS_WITH";

	declare type _DDBDC_Keys = {
		[someKey: string]: any
	};

	declare type _DDBDC_KeyComparison = {
		[someKey: string]: {
		AttributeValueList: any[],
		ComparisonOperator: _DDBDC_ComparisonOperator
	}
	};

	declare interface _DDBDC_Generic {
		TableName: string,
		ExpressionAttributeNames?: {
		[someKey: string]: string
	},
		ReturnConsumedCapacity?: "INDEXES" | "TOTAL" | "NONE"
	}

	declare interface _DDBDC_Reader {
		ConsistentRead?: boolean,
		ProjectionExpression?: string,
		AttributesToGet?: string[]
	}

	declare interface _DDBDC_Writer {
		ExpressionAttributeValues?: _DDBDC_Keys,
		ReturnItemCollectionMetrics?: "SIZE" | "NONE",
		ReturnValues?: "NONE" | "ALL_OLD" | "UPDATED_OLD" | "ALL_NEW" | "UPDATED_NEW",
		ConditionExpression?: string,
		ConditionalOperator?: "AND" | "OR",
		Expected?: {
		[someKey: string]: {
		AttributeValueList?: any[],
		ComparisonOperator?: _DDBDC_ComparisonOperator,
		Exists: boolean,
		Value?: any
	}
	}
	}

	declare interface UpdateParam {
		Key: _DDBDC_Keys,
		UpdateExpression?: string,
		AttributeUpdates?: {
		[someKey: string]: {
		Action: "PUT" | "ADD" | "DELETE",
		Value: any
	}
	}
	}

	declare interface QueryParam {
		ConditionalOperator?: "AND" | "OR",
		ExclusiveStartKey?: _DDBDC_Keys,
		ExpressionAttributeValues?: _DDBDC_Keys,
		FilterExpression?: string,
		IndexName?: string,
		KeyConditionExpression?: string,
		KeyConditions?: _DDBDC_KeyComparison,
		Limit?: number,
		QueryFilter?: _DDBDC_KeyComparison,
		ScanIndexForward?: boolean,
		Select?: "ALL_ATTRIBUTES" | "ALL_PROJECTED_ATTRIBUTES" | "SPECIFIC_ATTRIBUTES" | "COUNT"
	}

	declare interface ScanParam {
		Segment?: number,
		ScanFilter?: _DDBDC_KeyComparison,
		TotalSegments?: number
	}

	declare interface GetParam {
		Key: _DDBDC_Keys
	}

	declare interface PutParam {
		Item: _DDBDC_Keys
	}

	declare interface DeleteParam {
		Key: _DDBDC_Keys
	}

		declare export class DocumentClient  {
		constructor(options?: any): this;
		get(params: GetParam, next: (err: any, data: any) => void): void;
		put(params: PutParam, next: (err: any, data: any) => void): void;
		delete(params: DeleteParam, next: (err: any, data: any) => void): void;
		query(params: QueryParam, next: (err: any, data: any) => void): void;
		scan(params: ScanParam, next: (err: any, data: any) => void): void;
		update(params: UpdateParam, next: (err: any, data: any) => void): void;
		createSet(
		list: any[], options?: {
		validate?: boolean
	}
	): {
		values: any[],
		type: string
	};
		batchGet(params: any, next: (err: any, data: any) => void): void;
		batchWrite(params: any, next: (err: any, data: any) => void): void
	}

	
}

declare module 'CloudFormation' {
		declare export interface CancelUpdateStackParams {
		StackName: string
	}

	declare export interface ContinueUpdateRollbackParams {
		StackName: string
	}

	declare export interface CreateChangeSetParams {
		StackName: string,
		TemplateBody?: string,
		TemplateURL?: string,
		UsePreviousTemplate?: boolean,
		Parameters?: CloudFormation.Parameter[],
		Capabilities?: string[],
		ResourceTypes?: string[],
		NotificationARNs?: string[],
		Tags?: CloudFormation.Tag[],
		ChangeSetName: string,
		ClientToken?: string,
		Description?: string
	}

	declare export interface CreateStackParams {
		StackName: string,
		TemplateBody?: string,
		TemplateURL?: string,
		Parameters?: CloudFormation.Parameter[],
		DisableRollback?: boolean,
		TimeoutInMinutes?: number,
		NotificationARNs?: string[],
		Capabilities?: string[],
		ResourceTypes?: string[],
		OnFailure?: string[],
		StackPolicyBody?: string[],
		StackPolicyURL?: string[],
		Tags?: CloudFormation.Tag[]
	}

	declare export interface DeleteChangeSetParams {
		ChangeSetName: string,
		StackName?: string
	}

	declare export interface DeleteStackParams {
		StackName: string,
		RetainResources?: string[]
	}

	declare export interface DescribeAccountLimitsParams {
		NextToken?: string
	}

	declare export interface DescribeChangeSetParams {
		ChangeSetName: string,
		StackName?: string,
		NextToken?: string
	}

	declare export interface DescribeStackEventsParams {
		StackName?: string,
		NextToken?: string
	}

	declare export interface DescribeStackResourceParams {
		StackName: string,
		LogicalResourceId: string
	}

	declare export interface DescribeStackResourcesParams {
		StackName?: string,
		LogicalResourceId?: string,
		PhysicalResourceId?: string
	}

	declare export interface DescribeStacksParams {
		StackName?: string,
		NextToken?: string
	}

	declare export interface EstimateTemplateCostParams {
		TemplateBody?: string,
		TemplateURL?: string,
		Parameters?: CloudFormation.Parameter[]
	}

	declare export interface ExecuteChangeSetParams {
		ChangeSetName: string,
		StackName?: string
	}

	declare export interface GetStackPolicyParams {
		StackName: string
	}

	declare export interface GetTemplateParams {
		StackName: string
	}

	declare export interface GetTemplateSummaryParams {
		TemplateBody?: string,
		TemplateURL?: string,
		StackName?: string
	}

	declare export interface ListChangeSetsParams {
		StackName: string,
		NextToken?: string
	}

	declare export interface ListStackResourcesParams {
		StackName: string,
		NextToken?: string
	}

	declare export interface ListStacksParams {
		NextToken?: string,
		StackStatusFilter?: string[]
	}

	declare export interface SetStackPolicyParams {
		StackName: string,
		StackPolicyBody?: string,
		StackPolicyURL?: string
	}

	declare export interface SignalResourceParams {
		StackName: string,
		LogicalResourceId: string,
		UniqueId: string,
		Status: string
	}

	declare export interface UpdateStackParams {
		StackName: string,
		TemplateBody?: string,
		TemplateURL?: string,
		UsePreviousTemplate?: boolean,
		StackPolicyDuringUpdateBody?: string,
		StackPolicyDuringUpdateURL?: string,
		Parameters?: CloudFormation.Parameter[],
		Capabilities?: string[],
		ResourceTypes?: string[],
		StackPolicyBody?: string,
		StackPolicyURL?: string,
		NotificationARNs?: string[],
		Tags?: CloudFormation.Tag[]
	}

	declare export interface ValidateTemplateParams {
		TemplateBody?: string,
		TemplateURL?: string
	}

	declare export interface WaitForParams {
		StackName: string,
		NextToken?: string
	}

	declare export interface Options {
		params?: any,
		endpoint?: string,
		accessKeyId?: string,
		secretAccessKey?: string,
		sessionToken?: any,
		credentials?: any,
		credentialProvider?: any,
		region?: string,
		maxRetries?: number,
		maxRedirects?: number,
		sslEnabled?: boolean,
		paramValidation?: any,
		computeChecksums?: boolean,
		convertResponseTypes?: boolean,
		correctClockSkew?: boolean,
		s3ForcePathStyle?: boolean,
		s3BucketEndpoint?: boolean,
		s3DisableBodySigning?: boolean,
		retryDelayOptions?: any,
		httpOptions?: any,
		apiVersion?: any,
		apiVersions?: any,
		logger?: any,
		systemClockOffset?: number,
		signatureVersion?: string,
		signatureCache?: boolean
	}

	declare export interface Parameter {
		ParameterKey: string,
		ParameterValue: string,
		UsePreviousValue?: boolean
	}

	declare export interface Tag {
		Key: string,
		Value: string
	}

			
}

declare module 'Lambda' {
		declare export interface AddPermissionParams {
		Action: string,
		FunctionName: string,
		Principal: string,
		StatementId: string,
		Qualifier?: string,
		SourceAccount?: string,
		SourceArn?: string
	}

	declare export interface CreateAliasParams {
		FunctionName: string,
		FunctionVersion: string,
		Name: string,
		Description?: string
	}

	declare export interface CreateEventSourceMappingParams {
		EventSourceArn: string,
		FunctionName: string,
		StartingPosition: string,
		BatchSize?: number,
		Enabled?: boolean
	}

	declare export interface CreateFunctionParams {
		Code: {
		S3Bucket?: string,
		S3Key?: string,
		S3ObjectVersion?: string,
		ZipFile?: any
	},
		FunctionName: string,
		Handler: string,
		Role: string,
		Runtime: string,
		Description?: string,
		MemorySize?: number,
		Publish?: boolean,
		Timeout?: number,
		VpcConfig?: {
		SecurityGroupIds?: string[],
		SubnetIds?: string[]
	}
	}

	declare export interface DeleteAliasParams {
		FunctionName: string,
		Name: string
	}

	declare export interface DeleteEventSourceMappingParams {
		UUID: string
	}

	declare export interface DeleteFunctionParams {
		FunctionName: string,
		Qualifier?: string
	}

	declare export interface GetAliasParams {
		FunctionName: string,
		Name: string
	}

	declare export interface GetEventSourceMappingParams {
		UUID: string
	}

	declare export interface GetFunctionParams {
		FunctionName: string,
		Qualifier?: string
	}

	declare export interface GetFunctionConfigurationParams {
		FunctionName: string,
		Qualifier?: string
	}

	declare export interface GetPolicyParams {
		FunctionName: string,
		Qualifier?: string
	}

	declare export interface InvokeParams {
		FunctionName: string,
		ClientContext?: string,
		InvocationType?: string,
		LogType?: string,
		Payload?: any,
		Qualifier?: string
	}

	declare export interface ListAliasesParams {
		FunctionName: string,
		FunctionVersion?: string,
		Marker?: string,
		MaxItems?: number
	}

	declare export interface ListEventSourceMappingsParams {
		EventSourceArn?: string,
		FunctionName?: string,
		Marker?: string,
		MaxItems?: number
	}

	declare export interface ListFunctionsParams {
		Marker?: string,
		MaxItems?: number
	}

	declare export interface ListVersionsByFunctionParams {
		FunctionName: string,
		Marker?: string,
		MaxItems?: number
	}

	declare export interface PublishVersionParams {
		FunctionName: string,
		CodeSha256?: string,
		Description?: string
	}

	declare export interface RemovePermissionParams {
		FunctionName: string,
		StatementId: string,
		Qualifier?: string
	}

	declare export interface UpdateAliasParams {
		FunctionName: string,
		Name: string,
		Description?: string,
		FunctionVersion?: string
	}

	declare export interface UpdateEventSourceMappingParams {
		UUID: string,
		BatchSize?: number,
		Enabled?: boolean,
		FunctionName?: string
	}

	declare export interface UpdateFunctionCodeParams {
		FunctionName: string,
		Publish?: boolean,
		S3Bucket?: string,
		S3Key?: string,
		S3ObjectVersion?: string,
		ZipFile?: any
	}

	declare export interface UpdateFunctionConfigurationParams {
		FunctionName: string,
		Description?: string,
		Handler?: string,
		MemorySize?: number,
		Role?: string,
		Timeout?: number,
		VpcConfig?: {
		SecurityGroupIds?: string[],
		SubnetIds?: string[]
	}
	}

			
}

declare module 'AutoScaling' {
		declare export interface AutoScalingOptions {
		params?: any,
		endpoint?: string,
		accessKeyId?: string,
		secretAccessKey?: string,
		sessionToken?: Credentials,
		credentials?: Credentials,
		credentialProvider?: any,
		region?: string,
		maxRetries?: number,
		maxRedirects?: number,
		sslEnabled?: boolean,
		paramValidation?: boolean,
		computeChecksums?: boolean,
		convertResponseTypes?: boolean,
		correctClockSkew?: boolean,
		s3ForcePathStyle?: boolean,
		s3BucketEndpoint?: boolean,
		s3DisableBodySigning?: boolean,
		retryDelayOptions?: RetryDelayOption,
		httpOptions?: HttpOptions,
		apiVersion?: string,
		apiVersions?: {
		[serviceName: string]: string
	},
		logger?: Logger,
		systemClockOffset?: number,
		signatureVersion?: string,
		signatureCache?: boolean
	}

	declare export interface AttachInstancesParams {
		AutoScalingGroupName: string,
		InstanceIds: string[]
	}

	declare export interface AttachLoadBalancersParams {
		AutoScalingGroupName: string,
		LoadBalancerNames: string[]
	}

	declare export interface AttachLoadBalancerTargetGroupsParams {
		AutoScalingGroupName: string,
		TargetGroupARNs: string[]
	}

	declare export interface CompleteLifecycleActionParams {
		AutoScalingGroupName: string,
		LifecycleActionResult: string,
		LifecycleHookName: string,
		lifecycleActionToken?: string,
		InstanceId?: string
	}

	declare export interface CreateAutoScalingGroupParams {
		AutoScalingGroupName: string,
		MinSize: number,
		MaxSize: number,
		LaunchConfigurationName?: string,
		InstanceId?: string,
		DesiredCapacity?: number,
		DefaultCooldown?: number,
		AvailabilityZones?: string[],
		LoadBalancerNames?: string[],
		TargetGroupARNs?: string[],
		HealthCheckType?: string,
		HealthCheckGracePeriod?: number,
		PlacementGroup?: string,
		VPCZoneIdentifier?: string,
		TerminationPolicies?: string,
		NewInstancesProtectedFromScaleIn?: boolean,
		Tags?: Tags
	}

	declare export interface CreateLaunchConfigurationParams {
		LaunchConfigurationName: string,
		AssociatePublicIpAddress?: boolean,
		ImageId?: string,
		KeyName?: string,
		SecurityGroups?: string[],
		ClassicLinkVPCId?: string,
		ClassicLinkVPCSecurityGroups?: string[],
		UserData?: string,
		InstanceId?: string,
		InstanceType?: string,
		KernelId?: string,
		RamdiskId?: string,
		BlockDeviceMappings?: BlockDeviceMapping[],
		InstanceMonitoring?: InstanceMonitoring,
		SpotPrice?: string,
		IamInstanceProfile?: string,
		EbsOptimized?: boolean,
		PlacementTenancy?: string
	}

	declare export interface CreateOrUpdateTagsParams {
		Tags: Tags[]
	}

	declare export interface DeleteAutoScalingGroupParams {
		AutoScalingGroupName: string,
		ForceDelete?: boolean
	}

	declare export interface DeleteLaunchConfigurationParams {
		LaunchConfigurationName: string
	}

	declare export interface DeleteLifecycleHookParams {
		AutoScalingGroupName: string,
		LifecycleHookName: string
	}

	declare export interface DeleteNotificationConfigurationParams {
		AutoScalingGroupName: string,
		TopicARN: string
	}

	declare export interface DeletePolicyParams {
		PolicyName: string,
		AutoScalingGroupName?: string
	}

	declare export interface DeleteScheduledActionParams {
		AutoScalingGroupName: string,
		ScheduledActionName: string
	}

	declare export interface DeleteTagsParams {
		Tags: Tags[]
	}

	declare export interface DescribeAutoScalingGroupsParams {
		AutoScalingGroupName?: string,
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeAutoScalingInstancesParams {
		InstanceIds?: string[],
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeLaunchConfigurationsParams {
		LaunchConfigurationNames?: string[],
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeLifecycleHooksParams {
		AutoScalingGroupName: string,
		LifecycleHookNames?: string[]
	}

	declare export interface DescribeLoadBalancersParams {
		AutoScalingGroupName: string,
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeLoadBalancerTargetGroupsParams {
		AutoScalingGroupName: string,
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeNotificationConfigurationsParams {
		AutoScalingGroupName?: string,
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribePoliciesParams {
		AutoScalingGroupName?: string,
		PolicyNames?: string[],
		PolicyTypes?: string[],
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeScalingActivitiesParams {
		AutoScalingGroupName?: string,
		ActivityIds?: string[],
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeScheduledActionsParams {
		AutoScalingGroupName?: string,
		ScheduledActionNames?: string[],
		StartTime?: Date,
		EndTime?: Date,
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DescribeTagsParams {
		Filters?: Filter[],
		NextToken?: string,
		MaxRecords?: number
	}

	declare export interface DetachInstancesParams {
		AutoScalingGroupName: string,
		ShouldDecrementDesiredCapacity: boolean,
		InstanceIds?: string[]
	}

	declare export interface DetachLoadBalancersParams {
		AutoScalingGroupName: string,
		LoadBalancerNames: string
	}

	declare export interface DetachLoadBalancerTargetGroupsParams {
		AutoScalingGroupName: string,
		TargetGroupARNs: string[]
	}

	declare export interface DisableMetricsCollectionParams {
		AutoScalingGroupName: string,
		Metrics?: string[]
	}

	declare export interface EnableMetricsCollectionParams {
		AutoScalingGroupName: string,
		Granularity: string,
		Metrics?: string[]
	}

	declare export interface EnterStandbyParams {
		AutoScalingGroupName: string,
		ShouldDecrementDesiredCapacity: boolean,
		InstanceIds?: string[]
	}

	declare export interface ExecutePolicyParams {
		PolicyName: string,
		AutoScalingGroupName?: string,
		HonorCooldown?: boolean,
		MetricValue?: number,
		BreachThreshold?: number
	}

	declare export interface ExitStandbyParams {
		AutoScalingGroupName: string,
		InstanceIds?: string[]
	}

	declare export interface PutLifecycleHookParams {
		AutoScalingGroupName: string,
		LifecycleHookName: string,
		LifecycleTransition?: string,
		RoleARN?: string,
		NotificationTargetARN?: string,
		NotificationMetadata?: string,
		HeartbeatTimeout?: number,
		DefaultResult?: string
	}

	declare export interface PutNotificationConfigurationParams {
		AutoScalingGroupName: string,
		NotificationTypes: string[],
		TopicARN: string
	}

	declare export interface PutScalingPolicyParams {
		AutoScalingGroupName: string,
		AdjustmentType: string,
		PolicyName: string,
		PolicyType?: string,
		MinAdjustmentStep?: number,
		MinAdjustmentMagnitude?: number,
		ScalingAdjustment?: number,
		Cooldown?: number,
		MetricAggregationType?: string,
		StepAdjustments?: StepAdjustment[],
		EstimatedInstanceWarmup: number
	}

	declare export interface PutScheduledUpdateGroupActionParams {
		AutoScalingGroupName: string,
		ScheduledActionName: string,
		Time?: Date,
		StartTime?: Date,
		EndTime?: Date,
		Recurrence?: string,
		MinSize?: number,
		MaxSize?: number,
		DesiredCapacity?: number
	}

	declare export interface RecordLifecycleActionHeartbeatParams {
		AutoScalingGroupName: string,
		LifecycleHookName: string,
		LifecycleActionToken?: string,
		InstanceId?: string
	}

	declare export interface ResumeProcessesParams {
		AutoScalingGroupName: string,
		ScalingProcesses?: string[]
	}

	declare export interface SetDesiredCapacityParams {
		AutoScalingGroupName: string,
		DesiredCapacity: number,
		HonorCooldown?: boolean
	}

	declare export interface SetInstanceHealthParams {
		HealthStatus: string,
		InstanceId: string,
		ShouldRespectGracePeriod?: boolean
	}

	declare export interface SetInstanceProtectionParams {
		AutoScalingGroupName: string,
		InstanceIds: string[],
		ProtectedFromScaleIn: boolean
	}

	declare export interface SuspendProcessesParams {
		AutoScalingGroupName: string,
		ScalingProcesses?: string[]
	}

	declare export interface TerminateInstanceInAutoScalingGroupParams {
		InstanceId: string,
		ShouldDecrementDesiredCapacity: boolean
	}

	declare export interface UpdateAutoScalingGroupParams {
		AutoScalingGroupName: string,
		LaunchConfigurationName: string,
		MinSize: number,
		MaxSize: number,
		DesiredCapacity: number,
		DefaultCooldown: number,
		AvailabilityZones: string[],
		HealthCheckType: string,
		HealthCheckGracePeriod: number,
		PlacementGroup: string,
		VPCZoneIdentifier: string,
		TerminationPolicies: string[],
		NewInstancesProtectedFromScaleIn?: boolean
	}

			
}

declare module 'SQS' {
		declare export interface SqsOptions {
		params?: any,
		endpoint?: string,
		accessKeyId?: string,
		secretAccessKey?: string,
		sessionToken?: Credentials,
		credentials?: Credentials,
		credentialProvider?: any,
		region?: string,
		maxRetries?: number,
		maxRedirects?: number,
		sslEnabled?: boolean,
		paramValidation?: boolean,
		computeChecksums?: boolean,
		convertResponseTypes?: boolean,
		correctClockSkew?: boolean,
		s3ForcePathStyle?: boolean,
		s3BucketEndpoint?: boolean,
		httpOptions?: HttpOptions,
		apiVersion?: string,
		apiVersions?: {
		[serviceName: string]: string
	},
		logger?: Logger,
		systemClockOffset?: number,
		signatureVersion?: string,
		signatureCache?: boolean
	}

	declare export interface AddPermissionParams {
		QueueUrl: string,
		Label: string,
		AWSAccountIds: string[],
		Actions: string[]
	}

	declare export interface ChangeMessageVisibilityParams {
		QueueUrl: string,
		ReceiptHandle: string,
		VisibilityTimeout: number
	}

	declare export interface ChangeMessageVisibilityBatchParams {
		QueueUrl: string,
		Entries: {
		Id: string,
		ReceiptHandle: string,
		VisibilityTimeout?: number
	}[]
	}

	declare export interface ChangeMessageVisibilityBatchResponse {
		Successful: {
		Id: string
	}[],
		Failed: BatchResultErrorEntry[]
	}

	declare export interface SendMessageParams {
		QueueUrl?: string,
		MessageBody: string,
		DelaySeconds?: number,
		MessageAttributes?: {
		[name: string]: MessageAttribute
	}
	}

	declare export interface ReceiveMessageParams {
		QueueUrl: string,
		MaxNumberOfMessages?: number,
		VisibilityTimeout?: number,
		AttributeNames?: string[],
		MessageAttributeNames?: string[],
		WaitTimeSeconds?: number
	}

	declare export interface DeleteMessageBatchParams {
		QueueUrl: string,
		Entries: DeleteMessageBatchRequestEntry[]
	}

	declare export interface DeleteMessageBatchRequestEntry {
		Id: string,
		ReceiptHandle: string
	}

	declare export interface DeleteMessageParams {
		QueueUrl: string,
		ReceiptHandle: string
	}

	declare export interface SendMessageBatchParams {
		QueueUrl: string,
		Entries: SendMessageBatchRequestEntry[]
	}

	declare export interface SendMessageBatchRequestEntry {
		Id: string,
		MessageBody: string,
		DelaySeconds?: number,
		MessageAttributes?: {
		[name: string]: MessageAttribute
	}
	}

	declare export interface CreateQueueParams {
		QueueName: string,
		Attributes: QueueAttributes
	}

	declare export interface QueueAttributes {
		[name: string]: any,
		DelaySeconds?: number,
		MaximumMessageSize?: number,
		MessageRetentionPeriod?: number,
		Policy?: any,
		ReceiveMessageWaitTimeSeconds?: number,
		VisibilityTimeout?: number,
		RedrivePolicy?: any
	}

	declare export interface GetQueueAttributesParams {
		QueueUrl: string,
		AttributeNames: string[]
	}

	declare export interface GetQueueAttributesResult {
		Attributes: {
		[name: string]: string
	}
	}

	declare export interface GetQueueUrlParams {
		QueueName: string,
		QueueOwnerAWSAccountId?: string
	}

	declare export interface SendMessageResult {
		MessageId: string,
		MD5OfMessageBody: string,
		MD5OfMessageAttributes: string
	}

	declare export interface ReceiveMessageResult {
		Messages: Message[]
	}

	declare export interface Message {
		MessageId: string,
		ReceiptHandle: string,
		MD5OfBody: string,
		Body: string,
		Attributes: {
		[name: string]: any
	},
		MD5OfMessageAttributes: string,
		MessageAttributes: {
		[name: string]: MessageAttribute
	}
	}

	declare export interface MessageAttribute {
		StringValue?: string,
		BinaryValue?: any,
		StringListValues?: string[],
		BinaryListValues?: any[],
		DataType: string
	}

	declare export interface DeleteMessageBatchResult {
		Successful: DeleteMessageBatchResultEntry[],
		Failed: BatchResultErrorEntry[]
	}

	declare export interface DeleteMessageBatchResultEntry {
		Id: string
	}

	declare export interface BatchResultErrorEntry {
		Id: string,
		Code: string,
		Message?: string,
		SenderFault: boolean
	}

	declare export interface SendMessageBatchResult {
		Successful: SendMessageBatchResultEntry[],
		Failed: BatchResultErrorEntry[]
	}

	declare export interface SendMessageBatchResultEntry {
		Id: string,
		MessageId: string,
		MD5OfMessageBody: string,
		MD5OfMessageAttributes: string
	}

	declare export interface CreateQueueResult {
		QueueUrl: string
	}

	declare export interface SetQueueAttributesParams {
		QueueUrl: string,
		Attributes: QueueAttributes
	}

			
}

declare module 'SES' {
		declare export interface Client {
		config: ClientConfig,
		sendEmail(params: any, callback: (err: any, data: SendEmailResult) => void): void
	}

	declare export interface SendEmailRequest {
		Source: string,
		Destination: Destination,
		Message: Message,
		ReplyToAddresses: string[],
		ReturnPath: string
	}

		declare export class Destination  {
		ToAddresses: string[];
		CcAddresses: string[];
		BccAddresses: string[]
	}

	declare export class Message  {
		Subject: Content;
		Body: Body
	}

	declare export class Content  {
		Data: string;
		Charset: string
	}

	declare export class Body  {
		Text: Content;
		Html: Content
	}

	declare export class SendEmailResult  {
		MessageId: string
	}

	
}

declare module 'Swf' {
		declare export interface Client {
		config: ClientConfig,
		countClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void,
		countOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void,
		countPendingActivityTasks(params: any, callback: (err: any, data: any) => void): void,
		countPendingDecisionTasks(params: any, callback: (err: any, data: any) => void): void,
		deprecateActivityType(params: any, callback: (err: any, data: any) => void): void,
		deprecateDomain(params: any, callback: (err: any, data: any) => void): void,
		deprecateWorkflowType(params: any, callback: (err: any, data: any) => void): void,
		describeActivityType(params: any, callback: (err: any, data: any) => void): void,
		describeDomain(params: any, callback: (err: any, data: any) => void): void,
		describeWorkflowExecution(params: any, callback: (err: any, data: any) => void): void,
		describeWorkflowType(params: any, callback: (err: any, data: any) => void): void,
		getWorkflowExecutionHistory(params: any, callback: (err: any, data: any) => void): void,
		listActivityTypes(params: any, callback: (err: any, data: any) => void): void,
		listClosedWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void,
		listDomains(params: any, callback: (err: any, data: any) => void): void,
		listOpenWorkflowExecutions(params: any, callback: (err: any, data: any) => void): void,
		listWorkflowTypes(params: any, callback: (err: any, data: any) => void): void,
		pollForActivityTask(params: any, callback: (err: any, data: ActivityTask) => void): void,
		pollForDecisionTask(params: any, callback: (err: any, data: DecisionTask) => void): void,
		recordActivityTaskHeartbeat(params: any, callback: (err: any, data: any) => void): void,
		registerActivityType(params: any, callback: (err: any, data: any) => void): void,
		registerDomain(params: any, callback: (err: any, data: any) => void): void,
		registerWorkflowType(params: any, callback: (err: any, data: any) => void): void,
		requestCancelWorkflowExecution(params: any, callback: (err: any, data: any) => void): void,
		respondActivityTaskCanceled(
		params: RespondActivityTaskCanceledRequest, callback: (err: any, data: any) => void
	): void,
		respondActivityTaskCompleted(
		params: RespondActivityTaskCompletedRequest, callback: (err: any, data: any) => void
	): void,
		respondActivityTaskFailed(
		params: RespondActivityTaskFailedRequest, callback: (err: any, data: any) => void
	): void,
		respondDecisionTaskCompleted(
		params: RespondDecisionTaskCompletedRequest, callback: (err: any, data: any) => void
	): void,
		signalWorkflowExecution(params: any, callback: (err: any, data: any) => void): void,
		startWorkflowExecution(
		params: any, callback: (err: any, data: StartWorkflowExecutionResult) => void
	): void,
		terminateWorkflowExecution(params: any, callback: (err: any, data: any) => void): void
	}

	declare export interface PollForActivityTaskRequest {
		domain?: string,
		taskList?: TaskList,
		identity?: string
	}

	declare export interface TaskList {
		name?: string
	}

	declare export interface PollForDecisionTaskRequest {
		domain?: string,
		taskList?: TaskList,
		identity?: string,
		nextPageToken?: string,
		maximumPageSize?: number,
		reverseOrder?: Boolean
	}

	declare export interface StartWorkflowExecutionRequest {
		domain?: string,
		workflowId?: string,
		workflowType?: WorkflowType,
		taskList?: TaskList,
		input?: string,
		executionStartToCloseTimeout?: string,
		tagList?: string[],
		taskStartToCloseTimeout?: string,
		childPolicy?: string
	}

	declare export interface WorkflowType {
		name?: string,
		version?: string
	}

	declare export interface RespondDecisionTaskCompletedRequest {
		taskToken?: string,
		decisions?: Decision[],
		executionContext?: string
	}

	declare export interface Decision {
		decisionType?: string,
		scheduleActivityTaskDecisionAttributes?: ScheduleActivityTaskDecisionAttributes,
		requestCancelActivityTaskDecisionAttributes?: RequestCancelActivityTaskDecisionAttributes,
		completeWorkflowExecutionDecisionAttributes?: CompleteWorkflowExecutionDecisionAttributes,
		failWorkflowExecutionDecisionAttributes?: FailWorkflowExecutionDecisionAttributes,
		cancelWorkflowExecutionDecisionAttributes?: CancelWorkflowExecutionDecisionAttributes,
		continueAsNewWorkflowExecutionDecisionAttributes?: ContinueAsNewWorkflowExecutionDecisionAttributes,
		recordMarkerDecisionAttributes?: RecordMarkerDecisionAttributes,
		startTimerDecisionAttributes?: StartTimerDecisionAttributes,
		cancelTimerDecisionAttributes?: CancelTimerDecisionAttributes,
		signalExternalWorkflowExecutionDecisionAttributes?: SignalExternalWorkflowExecutionDecisionAttributes,
		requestCancelExternalWorkflowExecutionDecisionAttributes?: RequestCancelExternalWorkflowExecutionDecisionAttributes,
		startChildWorkflowExecutionDecisionAttributes?: StartChildWorkflowExecutionDecisionAttributes
	}

	declare export interface ScheduleActivityTaskDecisionAttributes {
		activityType?: ActivityType,
		activityId?: string,
		control?: string,
		input?: string,
		scheduleToCloseTimeout?: string,
		taskList?: TaskList,
		scheduleToStartTimeout?: string,
		startToCloseTimeout?: string,
		heartbeatTimeout?: string
	}

	declare export interface ActivityType {
		name?: string,
		version?: string
	}

	declare export interface RequestCancelActivityTaskDecisionAttributes {
		activityId?: string
	}

	declare export interface CompleteWorkflowExecutionDecisionAttributes {
		result?: string
	}

	declare export interface FailWorkflowExecutionDecisionAttributes {
		reason?: string,
		details?: string
	}

	declare export interface CancelWorkflowExecutionDecisionAttributes {
		details?: string
	}

	declare export interface ContinueAsNewWorkflowExecutionDecisionAttributes {
		input?: string,
		executionStartToCloseTimeout?: string,
		taskList?: TaskList,
		taskStartToCloseTimeout?: string,
		childPolicy?: string,
		tagList?: string[],
		workflowTypeVersion?: string
	}

	declare export interface RecordMarkerDecisionAttributes {
		markerName?: string,
		details?: string
	}

	declare export interface StartTimerDecisionAttributes {
		timerId?: string,
		control?: string,
		startToFireTimeout?: string
	}

	declare export interface CancelTimerDecisionAttributes {
		timerId?: string
	}

	declare export interface SignalExternalWorkflowExecutionDecisionAttributes {
		workflowId?: string,
		runId?: string,
		signalName?: string,
		input?: string,
		control?: string
	}

	declare export interface RequestCancelExternalWorkflowExecutionDecisionAttributes {
		workflowId?: string,
		runId?: string,
		control?: string
	}

	declare export interface StartChildWorkflowExecutionDecisionAttributes {
		workflowType?: WorkflowType,
		workflowId?: string,
		control?: string,
		input?: string,
		executionStartToCloseTimeout?: string,
		taskList?: TaskList,
		taskStartToCloseTimeout?: string,
		childPolicy?: string,
		tagList?: string[]
	}

	declare export interface RespondActivityTaskCompletedRequest {
		taskToken?: string,
		result?: string
	}

	declare export interface RespondActivityTaskFailedRequest {
		taskToken?: string,
		reason?: string,
		details?: string
	}

	declare export interface RespondActivityTaskCanceledRequest {
		taskToken?: string,
		details?: string
	}

	declare export interface DecisionTask {
		taskToken?: string,
		startedEventId?: number,
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		events?: HistoryEvent[],
		nextPageToken?: string,
		previousStartedEventId?: number
	}

	declare export interface WorkflowExecution {
		workflowId?: string,
		runId?: string
	}

	declare export interface HistoryEvent {
		eventTimestamp?: any,
		eventType?: string,
		eventId?: number,
		workflowExecutionStartedEventAttributes?: WorkflowExecutionStartedEventAttributes,
		workflowExecutionCompletedEventAttributes?: WorkflowExecutionCompletedEventAttributes,
		completeWorkflowExecutionFailedEventAttributes?: CompleteWorkflowExecutionFailedEventAttributes,
		workflowExecutionFailedEventAttributes?: WorkflowExecutionFailedEventAttributes,
		failWorkflowExecutionFailedEventAttributes?: FailWorkflowExecutionFailedEventAttributes,
		workflowExecutionTimedOutEventAttributes?: WorkflowExecutionTimedOutEventAttributes,
		workflowExecutionCanceledEventAttributes?: WorkflowExecutionCanceledEventAttributes,
		cancelWorkflowExecutionFailedEventAttributes?: CancelWorkflowExecutionFailedEventAttributes,
		workflowExecutionContinuedAsNewEventAttributes?: WorkflowExecutionContinuedAsNewEventAttributes,
		continueAsNewWorkflowExecutionFailedEventAttributes?: ContinueAsNewWorkflowExecutionFailedEventAttributes,
		workflowExecutionTerminatedEventAttributes?: WorkflowExecutionTerminatedEventAttributes,
		workflowExecutionCancelRequestedEventAttributes?: WorkflowExecutionCancelRequestedEventAttributes,
		decisionTaskScheduledEventAttributes?: DecisionTaskScheduledEventAttributes,
		decisionTaskStartedEventAttributes?: DecisionTaskStartedEventAttributes,
		decisionTaskCompletedEventAttributes?: DecisionTaskCompletedEventAttributes,
		decisionTaskTimedOutEventAttributes?: DecisionTaskTimedOutEventAttributes,
		activityTaskScheduledEventAttributes?: ActivityTaskScheduledEventAttributes,
		activityTaskStartedEventAttributes?: ActivityTaskStartedEventAttributes,
		activityTaskCompletedEventAttributes?: ActivityTaskCompletedEventAttributes,
		activityTaskFailedEventAttributes?: ActivityTaskFailedEventAttributes,
		activityTaskTimedOutEventAttributes?: ActivityTaskTimedOutEventAttributes,
		activityTaskCanceledEventAttributes?: ActivityTaskCanceledEventAttributes,
		activityTaskCancelRequestedEventAttributes?: ActivityTaskCancelRequestedEventAttributes,
		workflowExecutionSignaledEventAttributes?: WorkflowExecutionSignaledEventAttributes,
		markerRecordedEventAttributes?: MarkerRecordedEventAttributes,
		timerStartedEventAttributes?: TimerStartedEventAttributes,
		timerFiredEventAttributes?: TimerFiredEventAttributes,
		timerCanceledEventAttributes?: TimerCanceledEventAttributes,
		startChildWorkflowExecutionInitiatedEventAttributes?: StartChildWorkflowExecutionInitiatedEventAttributes,
		childWorkflowExecutionStartedEventAttributes?: ChildWorkflowExecutionStartedEventAttributes,
		childWorkflowExecutionCompletedEventAttributes?: ChildWorkflowExecutionCompletedEventAttributes,
		childWorkflowExecutionFailedEventAttributes?: ChildWorkflowExecutionFailedEventAttributes,
		childWorkflowExecutionTimedOutEventAttributes?: ChildWorkflowExecutionTimedOutEventAttributes,
		childWorkflowExecutionCanceledEventAttributes?: ChildWorkflowExecutionCanceledEventAttributes,
		childWorkflowExecutionTerminatedEventAttributes?: ChildWorkflowExecutionTerminatedEventAttributes,
		signalExternalWorkflowExecutionInitiatedEventAttributes?: SignalExternalWorkflowExecutionInitiatedEventAttributes,
		externalWorkflowExecutionSignaledEventAttributes?: ExternalWorkflowExecutionSignaledEventAttributes,
		signalExternalWorkflowExecutionFailedEventAttributes?: SignalExternalWorkflowExecutionFailedEventAttributes,
		externalWorkflowExecutionCancelRequestedEventAttributes?: ExternalWorkflowExecutionCancelRequestedEventAttributes,
		requestCancelExternalWorkflowExecutionInitiatedEventAttributes?: RequestCancelExternalWorkflowExecutionInitiatedEventAttributes,
		requestCancelExternalWorkflowExecutionFailedEventAttributes?: RequestCancelExternalWorkflowExecutionFailedEventAttributes,
		scheduleActivityTaskFailedEventAttributes?: ScheduleActivityTaskFailedEventAttributes,
		requestCancelActivityTaskFailedEventAttributes?: RequestCancelActivityTaskFailedEventAttributes,
		startTimerFailedEventAttributes?: StartTimerFailedEventAttributes,
		cancelTimerFailedEventAttributes?: CancelTimerFailedEventAttributes,
		startChildWorkflowExecutionFailedEventAttributes?: StartChildWorkflowExecutionFailedEventAttributes
	}

	declare export interface WorkflowExecutionStartedEventAttributes {
		input?: string,
		executionStartToCloseTimeout?: string,
		taskStartToCloseTimeout?: string,
		childPolicy?: string,
		taskList?: TaskList,
		workflowType?: WorkflowType,
		tagList?: string[],
		continuedExecutionRunId?: string,
		parentWorkflowExecution?: WorkflowExecution,
		parentInitiatedEventId?: number
	}

	declare export interface WorkflowExecutionCompletedEventAttributes {
		result?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface CompleteWorkflowExecutionFailedEventAttributes {
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface WorkflowExecutionFailedEventAttributes {
		reason?: string,
		details?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface FailWorkflowExecutionFailedEventAttributes {
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface WorkflowExecutionTimedOutEventAttributes {
		timeoutType?: string,
		childPolicy?: string
	}

	declare export interface WorkflowExecutionCanceledEventAttributes {
		details?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface CancelWorkflowExecutionFailedEventAttributes {
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface WorkflowExecutionContinuedAsNewEventAttributes {
		input?: string,
		decisionTaskCompletedEventId?: number,
		newExecutionRunId?: string,
		executionStartToCloseTimeout?: string,
		taskList?: TaskList,
		taskStartToCloseTimeout?: string,
		childPolicy?: string,
		tagList?: string[],
		workflowType?: WorkflowType
	}

	declare export interface ContinueAsNewWorkflowExecutionFailedEventAttributes {
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface WorkflowExecutionTerminatedEventAttributes {
		reason?: string,
		details?: string,
		childPolicy?: string,
		cause?: string
	}

	declare export interface WorkflowExecutionCancelRequestedEventAttributes {
		externalWorkflowExecution?: WorkflowExecution,
		externalInitiatedEventId?: number,
		cause?: string
	}

	declare export interface DecisionTaskScheduledEventAttributes {
		taskList?: TaskList,
		startToCloseTimeout?: string
	}

	declare export interface DecisionTaskStartedEventAttributes {
		identity?: string,
		scheduledEventId?: number
	}

	declare export interface DecisionTaskCompletedEventAttributes {
		executionContext?: string,
		scheduledEventId?: number,
		startedEventId?: number
	}

	declare export interface DecisionTaskTimedOutEventAttributes {
		timeoutType?: string,
		scheduledEventId?: number,
		startedEventId?: number
	}

	declare export interface ActivityTaskScheduledEventAttributes {
		activityType?: ActivityType,
		activityId?: string,
		input?: string,
		control?: string,
		scheduleToStartTimeout?: string,
		scheduleToCloseTimeout?: string,
		startToCloseTimeout?: string,
		taskList?: TaskList,
		decisionTaskCompletedEventId?: number,
		heartbeatTimeout?: string
	}

	declare export interface ActivityTaskStartedEventAttributes {
		identity?: string,
		scheduledEventId?: number
	}

	declare export interface ActivityTaskCompletedEventAttributes {
		result?: string,
		scheduledEventId?: number,
		startedEventId?: number
	}

	declare export interface ActivityTaskFailedEventAttributes {
		reason?: string,
		details?: string,
		scheduledEventId?: number,
		startedEventId?: number
	}

	declare export interface ActivityTaskTimedOutEventAttributes {
		timeoutType?: string,
		scheduledEventId?: number,
		startedEventId?: number,
		details?: string
	}

	declare export interface ActivityTaskCanceledEventAttributes {
		details?: string,
		scheduledEventId?: number,
		startedEventId?: number,
		latestCancelRequestedEventId?: number
	}

	declare export interface ActivityTaskCancelRequestedEventAttributes {
		decisionTaskCompletedEventId?: number,
		activityId?: string
	}

	declare export interface WorkflowExecutionSignaledEventAttributes {
		signalName?: string,
		input?: string,
		externalWorkflowExecution?: WorkflowExecution,
		externalInitiatedEventId?: number
	}

	declare export interface MarkerRecordedEventAttributes {
		markerName?: string,
		details?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface TimerStartedEventAttributes {
		timerId?: string,
		control?: string,
		startToFireTimeout?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface TimerFiredEventAttributes {
		timerId?: string,
		startedEventId?: number
	}

	declare export interface TimerCanceledEventAttributes {
		timerId?: string,
		startedEventId?: number,
		decisionTaskCompletedEventId?: number
	}

	declare export interface StartChildWorkflowExecutionInitiatedEventAttributes {
		workflowId?: string,
		workflowType?: WorkflowType,
		control?: string,
		input?: string,
		executionStartToCloseTimeout?: string,
		taskList?: TaskList,
		decisionTaskCompletedEventId?: number,
		childPolicy?: string,
		taskStartToCloseTimeout?: string,
		tagList?: string[]
	}

	declare export interface ChildWorkflowExecutionStartedEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		initiatedEventId?: number
	}

	declare export interface ChildWorkflowExecutionCompletedEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		result?: string,
		initiatedEventId?: number,
		startedEventId?: number
	}

	declare export interface ChildWorkflowExecutionFailedEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		reason?: string,
		details?: string,
		initiatedEventId?: number,
		startedEventId?: number
	}

	declare export interface ChildWorkflowExecutionTimedOutEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		timeoutType?: string,
		initiatedEventId?: number,
		startedEventId?: number
	}

	declare export interface ChildWorkflowExecutionCanceledEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		details?: string,
		initiatedEventId?: number,
		startedEventId?: number
	}

	declare export interface ChildWorkflowExecutionTerminatedEventAttributes {
		workflowExecution?: WorkflowExecution,
		workflowType?: WorkflowType,
		initiatedEventId?: number,
		startedEventId?: number
	}

	declare export interface SignalExternalWorkflowExecutionInitiatedEventAttributes {
		workflowId?: string,
		runId?: string,
		signalName?: string,
		input?: string,
		decisionTaskCompletedEventId?: number,
		control?: string
	}

	declare export interface ExternalWorkflowExecutionSignaledEventAttributes {
		workflowExecution?: WorkflowExecution,
		initiatedEventId?: number
	}

	declare export interface SignalExternalWorkflowExecutionFailedEventAttributes {
		workflowId?: string,
		runId?: string,
		cause?: string,
		initiatedEventId?: number,
		decisionTaskCompletedEventId?: number,
		control?: string
	}

	declare export interface ExternalWorkflowExecutionCancelRequestedEventAttributes {
		workflowExecution?: WorkflowExecution,
		initiatedEventId?: number
	}

	declare export interface RequestCancelExternalWorkflowExecutionInitiatedEventAttributes {
		workflowId?: string,
		runId?: string,
		decisionTaskCompletedEventId?: number,
		control?: string
	}

	declare export interface RequestCancelExternalWorkflowExecutionFailedEventAttributes {
		workflowId?: string,
		runId?: string,
		cause?: string,
		initiatedEventId?: number,
		decisionTaskCompletedEventId?: number,
		control?: string
	}

	declare export interface ScheduleActivityTaskFailedEventAttributes {
		activityType?: ActivityType,
		activityId?: string,
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface RequestCancelActivityTaskFailedEventAttributes {
		activityId?: string,
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface StartTimerFailedEventAttributes {
		timerId?: string,
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface CancelTimerFailedEventAttributes {
		timerId?: string,
		cause?: string,
		decisionTaskCompletedEventId?: number
	}

	declare export interface StartChildWorkflowExecutionFailedEventAttributes {
		workflowType?: WorkflowType,
		cause?: string,
		workflowId?: string,
		initiatedEventId?: number,
		decisionTaskCompletedEventId?: number,
		control?: string
	}

	declare export interface ActivityTask {
		taskToken?: string,
		activityId?: string,
		startedEventId?: number,
		workflowExecution?: WorkflowExecution,
		activityType?: ActivityType,
		input?: string
	}

	declare export interface PollForActivityTaskResult {
		activityTask?: ActivityTask
	}

	declare export interface PollForDecisionTaskResult {
		decisionTask?: DecisionTask
	}

	declare export interface StartWorkflowExecutionResult {
		run?: Run
	}

	declare export interface Run {
		runId?: string
	}

			
}

declare module 'Sns' {
		declare export interface Client {
		config: ClientConfig,
		publish(
		params: PublishRequest, callback: (err: any, data: PublishResult) => void
	): void,
		createTopic(
		params: CreateTopicRequest, callback: (err: any, data: CreateTopicResult) => void
	): void,
		deleteTopic(params: DeleteTopicRequest, callback: (err: any, data: any) => void): void
	}

	declare export interface PublishRequest {
		TopicArn?: string,
		TargetArn?: string,
		MessageAttributes?: {
		[name: string]: MessageAttribute
	},
		Message?: string,
		MessageStructure?: string,
		Subject?: string
	}

	declare export interface MessageAttribute {
		DataType: string,
		StringValue?: string,
		BinaryValue: any
	}

	declare export interface PublishResult {
		MessageId?: string
	}

	declare export interface CreateTopicRequest {
		Name?: string
	}

	declare export interface CreateTopicResult {
		TopicArn?: string
	}

	declare export interface DeleteTopicRequest {
		TopicArn?: string
	}

			
}

declare module 's3' {
		declare interface Owner {
		DisplayName: string,
		ID: string
	}

	declare interface ObjectKeyPrefix {
		Prefix: string
	}

	declare export interface ListObjectContent {
		Key: string,
		LastModified: Date,
		ETag: string,
		Size: number,
		StorageClass: "STANDARD" | "REDUCED_REDUNDANCY" | "GLACIER",
		Owner?: Owner
	}

	declare interface ListObjectRequestBase {
		Bucket: string,
		Delimiter?: string,
		EncodingType?: "url",
		MaxKeys?: number,
		Prefix?: string
	}

	declare interface ListObjectResponseBase {
		IsTruncated: boolean,
		Contents: ListObjectContent[],
		Name: string,
		Prefix?: string,
		Delimiter?: string,
		MaxKeys: number,
		CommonPrefixes?: ObjectKeyPrefix[],
		EncodingType?: "url"
	}

	declare export interface PutObjectRequest {
		ACL?: string,
		Body?: any,
		Bucket: string,
		CacheControl?: string,
		ContentDisposition?: string,
		ContentEncoding?: string,
		ContentLanguage?: string,
		ContentLength?: string,
		ContentMD5?: string,
		ContentType?: string,
		Expires?: any,
		GrantFullControl?: string,
		GrantRead?: string,
		GrantReadACP?: string,
		GrantWriteACP?: string,
		Key: string,
		Metadata?: {
		[key: string]: string
	},
		ServerSideEncryption?: string,
		StorageClass?: string,
		WebsiteRedirectLocation?: string
	}

	declare export interface CopyObjectRequest {
		Bucket: string,
		CopySource: string,
		Key: string,
		ACL?: string,
		CacheControl?: string,
		ContentDisposition?: string,
		ContentEncoding?: string,
		ContentLanguage?: string,
		ContentType?: string,
		CopySourceIfMatch?: string,
		CopySourceIfModifiedSince?: any,
		CopySourceIfNoneMatch?: string,
		CopySourceIfUnmodifiedSince?: any,
		CopySourceSSECustomerAlgorithm?: string,
		CopySourceSSECustomerKey?: any,
		CopySourceSSECustomerKeyMD5?: string,
		Expires?: any,
		GrantFullControl?: string,
		GrantRead?: string,
		GrantReadACP?: string,
		GrantWriteACP?: string,
		Metadata?: {
		[key: string]: string
	},
		MetadataDirective?: string,
		RequestPayer?: string,
		SSECustomerAlgorithm?: string,
		SSECustomerKey?: any,
		SSECustomerKeyMD5?: string,
		SSEKMSKeyId?: string,
		ServerSideEncryption?: string,
		StorageClass?: string,
		WebsiteRedirectLocation?: string
	}

	declare export interface GetObjectRequest {
		Bucket: string,
		IfMatch?: string,
		IfModifiedSince?: any,
		IfNoneMatch?: string,
		IfUnmodifiedSince?: any,
		Key: string,
		Range?: string,
		ResponseCacheControl?: string,
		ResponseContentDisposition?: string,
		ResponseContentEncoding?: string,
		ResponseContentLanguage?: string,
		ResponseContentType?: string,
		ResponseExpires?: any,
		VersionId?: string
	}

	declare export interface DeleteObjectRequest {
		Bucket: string,
		Key: string,
		MFA?: string,
		RequestPayer?: string,
		VersionId?: string
	}

	declare export interface HeadObjectRequest {
		Bucket: string,
		Key: string,
		IfMatch?: string,
		IfModifiedSince?: Date,
		IfNoneMatch?: string,
		IfUnmodifiedSince?: Date,
		Range?: string,
		RequestPayer?: string,
		SSECustomerAlgorithm?: string,
		SSECustomerKey?: Buffer | string,
		SSECustomerKeyMD5?: string,
		VersionId?: string
	}

	declare export interface UploadOptions {
		partSize?: number,
		queueSize?: number
	}

	declare export interface ListObjectRequest {
		Marker?: string
	}

	declare export interface ListObjectV2Request {
		ContinuationToken?: string,
		FetchOwner?: boolean,
		StartAfter?: string
	}

	declare export interface ListObjectResponse {
		Marker?: string,
		NextMarker?: string
	}

	declare export interface ListObjectV2Response {
		KeyCount: number,
		ContinuationToken?: string,
		NextContinuationToken?: string,
		StartAfter?: string
	}

			
}

declare module 'ecs' {
		declare export interface CreateServicesParams {
		desiredCount: number,
		serviceName: string,
		taskDefinition: string,
		clientToken?: string,
		cluster?: string,
		deploymentConfiguration?: {
		maximumPercent?: number,
		minimumHealthyPercent?: number
	},
		loadBalancers?: {
		containerName?: string,
		containerPort?: number,
		loadBalancerName?: string
	}[],
		role?: string
	}

	declare export interface DescribeServicesParams {
		services: string[],
		cluster?: string
	}

	declare export interface DescribeClustersParams {
		clusters?: string[]
	}

	declare export interface DescribeTasksParams {
		tasks: string[],
		cluster?: string
	}

	declare export interface DescribeTaskDefinitionParams {
		taskDefinition: string
	}

	declare export interface RegisterTaskDefinitionParams {
		containerDefinitions: {
		command?: string[],
		cpu?: number,
		disableNetworking?: boolean,
		dnsSearchDomains?: string[],
		dnsServers?: string[],
		dockerLabels?: any,
		dockerSecurityOptions?: string[],
		entryPoint?: string[],
		environment?: any[],
		essential?: boolean,
		extraHosts?: {
		hostName: string,
		ipAddress: string
	}[],
		hostname?: string,
		image?: string,
		links?: string[],
		logConfiguration?: {
		logDriver: string,
		options: any
	}[],
		memory?: number,
		mountPoints?: {
		containerPath: string,
		readOnly: boolean,
		sourceVolume: string
	}[],
		name?: string,
		portMappings?: {
		containerPort?: number,
		hostPort?: number,
		protocol: string
	}[],
		privileged?: boolean,
		readonlyRootFilesystem?: boolean,
		ulimits?: {
		hardLimit: number,
		name: string,
		softLimit: number
	}[],
		user?: string,
		volumesFrom?: {
		readOnly?: boolean,
		sourceContainer?: string
	}[],
		workingDirectory?: string
	}[],
		family: string,
		volumes?: {
		host: {
		sourcePath: string
	},
		name: string
	}[]
	}

	declare export interface UpdateServiceParams {
		service: string,
		cluster?: string,
		deploymentConfiguration?: {
		maximumPercent: number,
		minimumHealthyPercent: number
	},
		desiredCount?: number,
		taskDefinition: string
	}

			
}

declare module 'sts' {
		declare export interface AssumeRoleParams {
		RoleArn: string,
		RoleSessionName: string,
		DurationSeconds?: number,
		ExternalId?: string,
		Policy?: string,
		SerialNumber?: string,
		TokenCode?: string
	}

	declare export interface AssumeRoleCallbackData {
		Credentials: TemporaryCredentials,
		AssumedRoleUser: AssumedRoleUser,
		PackedPolicySize: number
	}

	declare export interface TemporaryCredentials {
		AccessKeyId: string,
		SecretAccessKey: string,
		SessionToken: string,
		Expiration: Date
	}

	declare export interface AssumedRoleUser {
		AssumedRoleId: string,
		Arn: string
	}

	declare export interface AssumeRoleWithSAMLParams {
		PrincipalArn: string,
		RoleArn: string,
		SAMLAssertion: string,
		DurationSeconds?: number,
		Policy?: string
	}

	declare export interface AssumeRoleWithWebIdentityParams {
		RoleArn: string,
		RoleSessionName: string,
		WebIdentityToken: string,
		DurationSeconds?: number,
		Policy?: string,
		ProviderId?: string
	}

	declare export interface CredentialsFromParams {
		Data: any,
		Credentials?: Credentials
	}

	declare export interface DecodeAuthorizationMessageParams {
		EncodedMessage: string
	}

	declare export interface GetFederationTokenParams {
		Name: string,
		DurationSeconds?: number,
		Policy?: string
	}

	declare export interface GetSessionTokenParams {
		DurationSeconds: number,
		SerialNumber: string,
		TokenCode: string
	}

			
}