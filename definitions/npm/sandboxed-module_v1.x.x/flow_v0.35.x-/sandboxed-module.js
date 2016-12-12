

declare module 'sandboxed-module' {
		declare interface SandboxOptions {
		requires?: Object,
		globals?: Object,
		locals?: Object,
		sourceTransformers?: Object,
		singleOnly?: boolean,
		sourceTransformersSingleOnly?: boolean
	}

		declare class SandboxedModule  {
		required: Object;
		globals: Object;
		locals: Object;
		sourceTransformers: Object;
		filename: string;
		module: string;
		exports: any;
		load(moduleId: string, options?: SandboxOptions): SandboxedModule;
		require(moduleId: string, options?: SandboxOptions): any;
		configure(options: SandboxOptions): void;
		registerBuiltInSourceTransformer(name: String): void
	}

	declare module.exports: undefined


}