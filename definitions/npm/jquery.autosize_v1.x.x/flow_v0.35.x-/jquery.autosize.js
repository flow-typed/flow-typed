import type { AutosizeStatic } from 'npm$namespace$autosize'

declare module 'jquery.autosize' {
					
}

declare module 'npm$namespace$autosize' {
		declare interface AutosizeStatic {
		(el: Element): void,
		(el: NodeList): void,
		(el: JQuery): void
	}

			
}

declare module 'autosize' {
					declare module.exports: undefined


}