

declare module 'apn' {
		declare export interface ConnectionOptions {
		cert?: string | Buffer,
		key?: string | Buffer,
		ca?: (string | Buffer)[],
		pfx?: string | Buffer,
		passphrase?: string,
		production?: boolean,
		voip?: boolean,
		port?: number,
		rejectUnauthorized?: boolean,
		cacheLength?: number,
		autoAdjustCache?: boolean,
		maxConnections?: number,
		connectTimeout?: number,
		connectionTimeout?: number,
		connectionRetryLimit?: number,
		buffersNotifications?: number,
		fastMode?: boolean
	}

	declare export interface NotificationAlertOptions {
		title?: string,
		subtitle?: string,
		body: string,
		title-loc-key?: string,
		title-loc-args?: string[],
		action-loc-key?: string,
		loc-key?: string,
		loc-args?: string[],
		launch-image?: string
	}

	declare export interface FeedbackOptions {
		cert?: string | Buffer,
		key?: string | Buffer,
		ca?: (string | Buffer)[],
		pfx?: string | Buffer,
		passphrase?: string,
		production?: boolean,
		port?: number,
		batchFeedback?: boolean,
		batchSize?: number,
		interval?: number
	}

	declare export interface FeedbackData {
		time: number,
		device: Device
	}

		declare export class Connection extends events$EventEmitter {
		constructor(options: ConnectionOptions): this;
		pushNotification(
		notification: Notification, recipient: Device | string | Buffer | (Device | string | Buffer)[]
	): void;
		setCacheLength(newLength: number): void;
		shutdown(): void;
		on(event: "error", listener: (error: Error) => void): this;
		on(event: "socketError", listener: (error: Error) => void): this;
		on(
		event: "transmitted", listener: (notification: Notification, decive: Device) => void
	): this;
		on(event: "completed", listener: () => void): this;
		on(event: "cacheTooSmall", listener: (sizeDifference: number) => void): this;
		on(event: "connected", listener: (openSockets: net.Socket[]) => void): this;
		on(event: "disconnected", listener: (openSockets: net.Socket[]) => void): this;
		on(event: "timeout", listener: () => void): this;
		on(
		event: "transmissionError", listener: (errorCode: number, notification: Notification, device: Device | Buffer) => void
	): this;
		on(event: string, listener: Function): this
	}

	declare export class Notification  {
		retryLimit: number;
		expiry: number;
		priority: number;
		encoding: string;
		payload: any;
		badge: number;
		sound: string;
		alert: string | NotificationAlertOptions;
		newsstandAvailable: boolean;
		contentAvailable: boolean;
		mdm: string | Object;
		urlArgs: string[];
		truncateAtWordEnd: boolean;
		constructor(payload?: any): this;
		setAlertText(alertText: string): Notification;
		setAlertTitle(alertTitle: string): Notification;
		setAlertAction(alertAction: string): Notification;
		setActionLocKey(key: string): Notification;
		setLocKey(key: string): Notification;
		setLocArgs(args: string[]): Notification;
		setLaunchImage(image: string): Notification;
		setMDM(mdm: string | Object): Notification;
		setNewsstandAvailable(available: boolean): Notification;
		setContentAvailable(available: boolean): Notification;
		setUrlArgs(urlArgs: string[]): Notification;
		trim(): number
	}

	declare export class Device  {
		token: Buffer;
		constructor(deviceToken: string | Buffer): this
	}

	declare export class Feedback  {
		constructor(options: FeedbackOptions): this;
		start(): void;
		cancel(): void;
		on(event: "error", listener: (error: Error) => void): Feedback;
		on(event: "feedbackError", listener: (error: Error) => void): Feedback;
		on(event: "feedback", listener: (feedbackData: FeedbackData[]) => void): Feedback;
		on(event: string, listener: Function): Feedback
	}

	
}