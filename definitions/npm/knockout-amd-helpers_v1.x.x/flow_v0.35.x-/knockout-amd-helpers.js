

declare module 'knockout-amd-helpers' {
		declare interface KnockoutAMDModule {
		baseDir: string,
		initializer: string,
		disposeMethod: string,
		templateProperty: string
	}

	declare interface KnockoutAMDTemplate {
		defaultPath: string,
		defaultSuffix: string,
		defaultRequireTextPluginName: string
	}

	declare interface KnockoutBindingHandlers {
		module: KnockoutAMDModule
	}

	declare interface KnockoutStatic {
		amdTemplateEngine: KnockoutAMDTemplate
	}

			declare module.exports: KnockoutStatic


}