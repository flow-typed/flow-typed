

declare module 'babel-template' {
	declare type Node = t.Node;

	declare type UseTemplate = (nodes?: {
		[placeholder: string]: Node
	}) => Node;

		declare function template(code: string, opts?: BabylonOptions): UseTemplate

		declare module.exports: undefined


}