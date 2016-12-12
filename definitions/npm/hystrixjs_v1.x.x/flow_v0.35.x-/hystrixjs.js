

declare module 'hystrixjs' {
					declare module.exports: undefined


}

declare module 'npm$namespace$HystrixJS' {
		declare interface HystrixProperties {
		hystrix.force.circuit.open?: boolean,
		hystrix.force.circuit.closed?: boolean,
		hystrix.circuit.sleepWindowInMilliseconds?: number,
		hystrix.circuit.errorThresholdPercentage?: number,
		hystrix.circuit.volumeThreshold?: number,
		hystrix.circuit.volumeThreshold.forceOverride?: boolean,
		hystrix.circuit.volumeThreshold.override?: number,
		hystrix.execution.timeoutInMilliseconds?: number,
		hystrix.metrics.statistical.window.timeInMilliseconds?: number,
		hystrix.metrics.statistical.window.bucketsNumber?: number,
		hystrix.metrics.percentile.window.timeInMilliseconds?: number,
		hystrix.metrics.percentile.window.bucketsNumber?: number,
		hystrix.request.volume.rejectionThreshold?: number
	}

	declare interface HystrixConfig {
		metricsPercentileWindowBuckets(): number,
		circuitBreakerForceClosed(): boolean,
		circuitBreakerForceOpened(): boolean,
		circuitBreakerSleepWindowInMilliseconds(): number,
		circuitBreakerErrorThresholdPercentage(): number,
		circuitBreakerRequestVolumeThreshold(): number,
		circuitBreakerRequestVolumeThresholdForceOverride(): boolean,
		circuitBreakerRequestVolumeThresholdOverride(): number,
		executionTimeoutInMilliseconds(): number,
		metricsStatisticalWindowBuckets(): number,
		metricsStatisticalWindowInMilliseconds(): number,
		metricsPercentileWindowInMilliseconds(): number,
		metricsPercentileWindowBuckets(): number,
		requestVolumeRejectionThreshold(): number,
		resetProperties(): void,
		init(properties: HystrixProperties): void
	}

	declare interface Command {
		execute(...args: any[]): Q.Promise<any>
	}

	declare interface CommandBuilder {
		circuitBreakerSleepWindowInMilliseconds(value: number): CommandBuilder,
		errorHandler(value: (error: any) => boolean): CommandBuilder,
		timeout(value: number): CommandBuilder,
		circuitBreakerRequestVolumeThreshold(value: number): CommandBuilder,
		requestVolumeRejectionThreshold(value: number): CommandBuilder,
		circuitBreakerForceOpened(value: boolean): CommandBuilder,
		circuitBreakerForceClosed(value: boolean): CommandBuilder,
		statisticalWindowNumberOfBuckets(value: number): CommandBuilder,
		statisticalWindowLength(value: number): CommandBuilder,
		percentileWindowNumberOfBuckets(value: number): CommandBuilder,
		percentileWindowLength(value: number): CommandBuilder,
		circuitBreakerErrorThresholdPercentage(value: number): CommandBuilder,
		run(value: (args: any) => Q.Promise<any>): CommandBuilder,
		fallbackTo(value: (...args: any[]) => Q.Promise<any>): CommandBuilder,
		context(value: any): CommandBuilder,
		build(): Command
	}

	declare interface CommandFactory {
		getOrCreate(commandKey: string, commandGroup?: string): CommandBuilder,
		resetCache(): void
	}

	declare interface HealthCounts {
		totalCount: number,
		errorCount: number,
		errorPercentage: number
	}

	declare interface CommandMetrics {
		markSuccess(): void,
		markRejected(): void,
		markFailure(): void,
		markTimeout(): void,
		markShortCircuited(): void,
		incrementExecutionCount(): void,
		decrementExecutionCount(): void,
		getCurrentExecutionCount(): number,
		addExecutionTime(value: number): void,
		getRollingCount(type: any): number,
		getExecutionTime(percentile: any): number,
		getHealthCounts(): HealthCounts,
		reset(): void
	}

	declare interface MetricsProperties {
		commandKey: string,
		commandGroup: string,
		statisticalWindowTimeInMilliSeconds?: number,
		statisticalWindowNumberOfBuckets?: number,
		percentileWindowTimeInMilliSeconds?: number,
		percentileWindowNumberOfBuckets?: number
	}

	declare interface MetricsFactory {
		getOrCreate(config: MetricsProperties): CommandMetrics,
		resetCache(): void,
		getAllMetrics(): Array<CommandMetrics>
	}

	declare interface CirctuiBreakerConfig {
		circuitBreakerSleepWindowInMilliseconds: number,
		commandKey: string,
		circuitBreakerErrorThresholdPercentage: number,
		circuitBreakerRequestVolumeThreshold: number,
		commandGroup: string,
		circuitBreakerForceClosed: boolean,
		circuitBreakerForceOpened: boolean
	}

	declare interface CircuitBreaker {
		allowRequest(): boolean,
		allowSingleTest(): boolean,
		isOpen(): boolean,
		markSuccess(): void
	}

	declare interface CircuitFactory {
		getOrCreate(config: CirctuiBreakerConfig): CircuitBreaker,
		getCache(): Array<CircuitBreaker>,
		resetCache(): void
	}

	declare interface HystrixSSEStream {
		toObservable(): Rx.Observable<any>
	}

			
}