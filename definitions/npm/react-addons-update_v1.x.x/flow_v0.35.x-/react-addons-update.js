

declare module 'react-addons-update' {
					


}

declare module 'npm$namespace$___React' {
	declare type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

	declare interface UpdateSpecCommand {
		$set?: any,
		$merge?: {
		
	},
		$apply(value: any): any
	}

	declare interface UpdateSpecPath {
		[key: string]: UpdateSpec
	}

	declare interface UpdateArraySpec {
		$push?: any[],
		$unshift?: any[],
		$splice?: any[][]
	}

			
}

declare module '___Addons' {
			declare export function update(value: any[], spec: UpdateArraySpec): any[]

	declare export function update(value: {
		
	}, spec: UpdateSpec): any

		
}