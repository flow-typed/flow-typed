

declare module 'webpack-validator' {
		declare interface ValidationOptions {
		no-root-files-node-modules-nameclash?: boolean,
		loader-enforce-include-or-exclude?: boolean,
		loader-prefer-include?: boolean
	}

	declare function Validate(config: Configuration): Configuration

	declare function Validate(config: Configuration, options: ValidationOptions): Configuration

		declare module.exports: undefined


}