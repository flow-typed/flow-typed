declare module 'es6-error' {
	declare class ExtendableError extends Error {}

	declare var exports: Class<ExtendableError>;
}
