import type { TagCloudClass, DefaultRendererFactory } from 'npm$namespace$ReactTagCloud'

declare module 'react-tagcloud' {
					declare module.exports: undefined


}

declare module 'npm$namespace$ReactTagCloud' {
		declare interface TagCloudProps {
		tags: any[],
		maxSize: number,
		minSize: number,
		shuffle?: boolean,
		renderer?: Function,
		className?: string,
		onClick?: Function
	}

	declare interface TagCloudClass {
		
	}

	declare interface DefaultRendererFactoryOptions {
		tagRenderer?: Function,
		colorOptions?: any,
		props?: any
	}

	declare interface RendererFunction {
		(tag: any, size: number, key: string | number, handlers: any): any
	}

	declare interface DefaultRendererFactory {
		new (_ref?: DefaultRendererFactoryOptions): RendererFunction,
		(_ref?: DefaultRendererFactoryOptions): RendererFunction
	}

			
}

declare module 'reactTagCloud' {
					
}