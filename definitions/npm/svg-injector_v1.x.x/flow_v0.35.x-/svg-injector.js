

declare module 'svg-injector' {
		declare interface SVGInjector {
		(elements: Node | NodeList | Array<Node>, options?: SVGInjectorOptions, done?: (elementCount: number) => void): void
	}

	declare interface SVGInjectorOptions {
		evalScripts?: string,
		pngFallback?: string,
		each?: (svg: SVGElement | string) => void
	}

			declare module.exports: SVGInjector


}