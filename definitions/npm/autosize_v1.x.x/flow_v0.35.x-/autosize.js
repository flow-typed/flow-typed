import type { AutosizeStatic } from 'npm$namespace$autosize'

declare module 'autosize' {
					declare module.exports: AutosizeStatic


}

declare module 'npm$namespace$autosize' {
		declare interface AutosizeStatic {
		(el: Element): void,
		(el: NodeList): void
	}

			
}