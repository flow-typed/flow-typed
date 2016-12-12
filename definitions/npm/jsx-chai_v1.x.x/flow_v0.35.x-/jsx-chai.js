

declare module 'jsx-chai' {
		declare interface JsxChaiStatic {
		jsxChai: jsxChaiFunction
	}

	declare interface jsxChaiFunction {
		(chai: any, utils: any): void
	}

			declare module.exports: JsxChaiStatic


}