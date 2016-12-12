

declare module 'inversify-express-utils' {
		declare export interface Controller {
		
	}

	declare interface ServiceIdentifiers {
		Controller: Symbol
	}

			
}

declare module 'interfaces' {
		declare export interface InversifyExpressServerConstructor {
		new (kernel: inversify.interfaces.Kernel): InversifyExpressServer
	}

	declare export interface InversifyExpressServer {
		setConfig(fn: ConfigFunction): InversifyExpressServer,
		setErrorConfig(fn: ConfigFunction): InversifyExpressServer,
		build(): express.Application
	}

	declare export interface ConfigFunction {
		(app: express.Application): void
	}

	declare export interface HandlerDecoratorFactory {
		(path: string, ...middleware: express.RequestHandler[]): HandlerDecorator
	}

	declare export interface HandlerDecorator {
		(target: any, key: string, value: any): void
	}

			
}