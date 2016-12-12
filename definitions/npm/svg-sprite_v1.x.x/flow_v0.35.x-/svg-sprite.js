

declare module 'svg-sprite' {
					declare module.exports: SVGSpriterConstructor


}

declare module 'sprite' {
		declare interface SVGSpriterConstructor {
		new (config: Config): SVGSpriter
	}

	declare interface SVGSpriter {
		add(file: string | File, name: string, svg: string): SVGSpriter,
		add(file: File): SVGSpriter,
		compile(config: Config, callback: CompileCallback): SVGSpriter,
		compile(callback: CompileCallback): void,
		getShapes(dest: string, callback: GetShapesCallback): void
	}

	declare interface Config {
		dest?: string,
		log?: string | winston.LoggerInstance,
		shape?: Shape,
		svg?: Svg,
		variables?: any,
		mode?: Mode
	}

	declare interface Shape {
		id?: {
		separator?: string,
		generator?: string | ((svg: string) => string),
		pseudo?: string,
		whitespace?: string
	},
		dimension?: {
		maxWidth?: number,
		maxHeight?: number,
		precision?: number,
		attributes?: boolean
	},
		spacing?: {
		padding?: number | number[],
		box?: string
	},
		transform?: (string | CustomConfigurationTransform | CustomCallbackTransform)[],
		meta?: string,
		align?: string,
		dest?: string
	}

	declare interface CustomConfigurationTransform {
		[transformationName: string]: {
		plugins?: {
		[transformationName: string]: boolean
	}[]
	}
	}

	declare interface CustomCallbackTransform {
		[transformationName: string]: {
		(shape: any, sprite: SVGSpriter, callback: Function): any
	}
	}

	declare interface Svg {
		xmlDeclaration?: boolean | string,
		doctypeDeclaration?: boolean | string,
		namespaceIDs?: boolean,
		namespaceClassnames?: boolean,
		dimensionAttributes?: boolean,
		rootAttributes?: any,
		precision?: number,
		transform?: SvgTransformer | SvgTransformer[]
	}

	declare interface SvgTransformer {
		(svg: string): string
	}

	declare interface Mode {
		css?: CssAndViewSpecificModeConfig | boolean,
		view?: CssAndViewSpecificModeConfig | boolean,
		defs?: DefsAndSymbolSpecificModeConfig | boolean,
		symbol?: DefsAndSymbolSpecificModeConfig | boolean,
		stack?: ModeConfig | boolean,
		[customConfigName: string]: ModeConfig
	}

	declare interface ModeConfig {
		dest?: string,
		prefix?: string,
		dimensions?: string | boolean,
		sprite?: string,
		bust?: boolean,
		render?: {
		[key: string]: RenderingConfiguration | boolean
	},
		example?: RenderingConfiguration | boolean,
		mode?: string
	}

	declare interface RenderingConfiguration {
		template?: string,
		dest?: string
	}

	declare interface CssAndViewSpecificModeConfig {
		layout?: string,
		common?: string,
		mixin?: string
	}

	declare interface DefsAndSymbolSpecificModeConfig {
		inline?: boolean
	}

	declare interface CompileCallback {
		(error: Error, result: any, data: any): any
	}

	declare interface GetShapesCallback {
		(error: Error, result: File[]): any
	}

			
}