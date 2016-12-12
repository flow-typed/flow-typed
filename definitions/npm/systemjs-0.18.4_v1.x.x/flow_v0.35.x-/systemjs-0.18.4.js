

declare module 'systemjs-0.18.4' {
		declare interface System {
		import(name: string): any,
		defined: any,
		amdDefine: () => void,
		amdRequire: () => void,
		baseURL: string,
		paths: {
		[key: string]: string
	},
		meta: {
		[key: string]: Object
	},
		config: any,
		_nodeRequire: (name: string) => any
	}

			
}

declare module 'systemjs' {
					declare module.exports: undefined


}