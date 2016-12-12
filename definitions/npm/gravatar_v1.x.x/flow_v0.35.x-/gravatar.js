

declare module 'gravatar' {
					declare module.exports: undefined


}

declare module 'npm$namespace$GravatarModule' {
	declare type Options = {
		d?: string,
		default?: string,
		f?: string,
		forcedefault?: string,
		r?: string,
		rating?: string,
		s?: string,
		size?: string
	};

		declare function url(email: string, options?: Options, forceProtocol?: boolean): string

		
}