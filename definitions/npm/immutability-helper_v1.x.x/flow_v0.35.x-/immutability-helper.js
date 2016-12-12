

declare module 'immutability-helper' {
	declare type UpdateSpec = UpdateSpecCommand | UpdateSpecPath;

	declare type CommandHandler = (specValue: any, originalValue: any) => any;

	declare interface UpdateSpecCommand {
		$set?: any,
		$merge?: {
		
	},
		$apply(value: any): any,
		[customCommand: string]: any
	}

	declare interface UpdateSpecPath {
		[pathPart: string]: UpdateSpec
	}

	declare interface UpdateArraySpec {
		$push?: any[],
		$unshift?: any[],
		$splice?: any[][],
		[customCommand: string]: any
	}

	declare interface UpdateFunction {
		(value: any[], spec: UpdateArraySpec): any[],
		(value: {
		
	}, spec: UpdateSpec): any,
		extend: (commandName: string, handler: CommandHandler) => any
	}

	declare interface Update {
		newContext(): UpdateFunction
	}

			declare module.exports: Update


}