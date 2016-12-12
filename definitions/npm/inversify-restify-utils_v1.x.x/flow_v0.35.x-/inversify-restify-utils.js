

declare module 'inversify-restify-utils' {
		declare export interface Controller {
		
	}

	declare interface ServiceIdentifiers {
		Controller: Symbol
	}

			
}

declare module 'interfaces' {
		declare export interface InversifyRestifyServerConstructor {
		new (kernel: inversify.interfaces.Kernel): InversifyRestifyServer
	}

	declare export interface InversifyRestifyServer {
		setConfig(fn: ConfigFunction): InversifyRestifyServer,
		build(): restify.Server
	}

	declare export interface ConfigFunction {
		(app: restify.Server): void
	}

	declare export interface HandlerDecoratorFactory {
		(path: string, ...middleware: restify.RequestHandler[]): HandlerDecorator
	}

	declare export interface HandlerDecorator {
		(target: any, key: string, value: any): void
	}

			
}