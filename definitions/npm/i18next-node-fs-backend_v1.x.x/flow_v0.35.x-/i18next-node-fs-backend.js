

declare module 'i18next-node-fs-backend' {
				declare class BackEnd  {
		constructor(services?: any, options?: Object): this;
		init(options?: Object): void
	}

	declare module.exports: undefined


}

declare module 'npm$namespace$I18next' {
		declare interface I18nextOptions {
		
	}

			
}

declare module 'npm$namespace$i18nextNodeFsBackEnd' {
		declare interface i18nextNodeFsBackEndOptions {
		loadPath: string,
		addPath: string,
		jsonIndent: number
	}

	declare interface I18nextOptions {
		backend?: i18nextNodeFsBackEndOptions
	}

			
}