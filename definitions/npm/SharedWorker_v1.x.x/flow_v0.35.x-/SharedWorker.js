

declare module 'SharedWorker' {
					
}

declare module 'npm$namespace$SharedWorker' {
		declare interface AbstractWorker {
		onerror: (ev: ErrorEvent) => any
	}

	declare export interface SharedWorker {
		port: MessagePort
	}

			
}