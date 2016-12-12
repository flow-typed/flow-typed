

declare module 'argv' {
	declare type args = {
		targets: string[],
		options: {
		[key: string]: any
	}
	};

	declare type helpOption = {
		name: string,
		type: string,
		short?: string,
		description?: string,
		example?: string
	};

	declare type module = {
		mod: string,
		description: string,
		options: {
		[key: string]: helpOption
	}
	};

	declare type typeFunction = (value: any, ...arglist: any[]) => any;

	declare type argv = {
		run: (argv?: string[]) => args,
		option: (mod: helpOption | helpOption[]) => argv,
		mod: (object: module | module[]) => argv,
		type: (
		name: string | {
		[key: string]: typeFunction
	}, callback?: typeFunction
	) => any,
		version: (v: string) => argv,
		info: (mod: string, description?: module) => argv,
		clear: () => argv,
		help: (mod?: string) => argv
	};

				declare module.exports: argv


}