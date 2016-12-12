

declare module 'roslib' {
					
}

declare module 'npm$namespace$ROSLIB' {
				declare export class Ros  {
		constructor(options: {
		url?: string
	}): this;
		on(eventName: string, callback: (event: any) => void): void;
		connect(url: string): void;
		close(): void;
		authenticate(
		mac: string, client: string, dest: string, rand: string, t: number, level: string, end: string
	): void;
		callOnConnection(message: any): void;
		getTopics(
		callback: (topics: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getTopicsForType(
		topicType: string, callback: (topics: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getServices(
		callback: (services: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getServicesForType(
		serviceType: string, callback: (services: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getNodes(
		callback: (nodes: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getParams(
		callback: (params: string[]) => void, failedCallback?: (error: any) => void
	): void;
		getTopicType(
		topic: string, callback: (type: string) => void, failedCallback?: (error: any) => void
	): void;
		getServiceType(
		service: string, callback: (type: string) => void, failedCallback?: (error: any) => void
	): void;
		getMessageDetails(
		message: Message, callback: (detail: any) => void, failedCallback?: (error: any) => void
	): void;
		decodeTypeDefs(defs: any): void
	}

	declare export class Message  {
		constructor(values: any): this
	}

	declare export class Param  {
		constructor(options: {
		ros: Ros,
		name: string
	}): this;
		get(callback: (response: any) => void): void;
		set(value: any, callback?: (response: any) => void): void;
		delete(callback: (response: any) => void): void
	}

	declare export class Service  {
		constructor(data: {
		ros: Ros,
		name: string,
		serviceType: string
	}): this;
		name: string;
		serviceType: string;
		callService(
		request: ServiceRequest, callback: (response: any) => void, failedCallback?: (error: any) => void
	): void;
		advertise(callback: (request: any, response: any) => void): void;
		unadvertise(): void
	}

	declare export class ServiceRequest  {
		constructor(values?: any): this
	}

	declare export class ServiceResponse  {
		constructor(values?: any): this
	}

	declare export class Topic  {
		constructor(options: {
		ros: Ros,
		name: string,
		messageType: string,
		compression?: string,
		throttle_rate?: number,
		queue_size?: number,
		latch?: boolean,
		queue_length?: number
	}): this;
		name: string;
		messageType: string;
		subscribe(callback: (message: Message) => void): void;
		unsubscribe(callback?: () => void): void;
		advertise(): void;
		unadvertise(): void;
		publish(message: Message): void
	}

	declare class ActionClient  {
		constructor(options: {
		ros: Ros,
		serverName: string,
		actionName: string,
		timeout: number
	}): this;
		cancel(): void
	}

	declare class Goal  {
		constructor(options: {
		actionClient: ActionClient,
		goalMessage: any
	}): this;
		send(timeout?: number): void;
		cancel(): void
	}

	
}

declare module 'ROSLIB' {
					declare module.exports: undefined


}