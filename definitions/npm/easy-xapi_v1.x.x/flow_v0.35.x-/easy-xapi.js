

declare module 'easy-xapi' {
		declare interface InitConfig {
		jSend?: {
		partial: boolean
	}
	}

	declare interface Config {
		root: string,
		port: number,
		name: string,
		xHeaderDefaults?: Object,
		log: {
		name: string,
		level: string
	},
		mount: (app: express.Application) => void
	}

	declare interface Result {
		express: any,
		app: express.Application,
		server: http.Server,
		log: bunyan.Logger,
		listen: () => void
	}

	declare export function init(conf: InitConfig): void

	declare export function create(conf: Config): Result

		
}

declare module 'npm$namespace$Express' {
		declare export interface Request {
		log: any
	}

			
}