

declare module 'emailComposer' {
					
}

declare module 'npm$namespace$ngCordova' {
		declare export interface IEmailComposerOptions {
		to: string | Array<string>,
		cc?: string | Array<string>,
		bcc?: string | Array<string>,
		attachments?: Array<any>,
		subject?: string,
		body?: string,
		isHtml?: boolean
	}

	declare export interface IEmailComposerService {
		isAvailable(): ng.IPromise<boolean>,
		open(properties: IEmailComposerOptions): ng.IPromise<any>,
		addAlias(app: string, schema: string): void
	}

			
}