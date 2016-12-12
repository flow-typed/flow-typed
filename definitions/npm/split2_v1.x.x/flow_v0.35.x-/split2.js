

declare module 'split2' {
	declare type Matcher = string | RegExp;

	declare type Mapper = split.Mapper;

	declare type Options = split.Options;

		declare function split(): Transform

	declare function split(matcher: Matcher): Transform

	declare function split(mapper: Mapper): Transform

	declare function split(options: Options): Transform

	declare function split(matcher: Matcher, mapper: Mapper): Transform

	declare function split(matcher: Matcher, options: Options): Transform

	declare function split(mapper: Mapper, options: Options): Transform

	declare function split(matcher: Matcher, mapper: Mapper, options: Options): Transform

		declare module.exports: undefined


}

declare module 'split' {
		declare export interface Mapper {
		(line: string): any
	}

	declare export interface Options {
		maxLength?: number
	}

			
}