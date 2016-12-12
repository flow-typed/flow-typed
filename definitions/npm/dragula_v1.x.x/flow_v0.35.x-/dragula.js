import type { Dragula } from 'npm$namespace$dragula'

declare module 'dragula' {
					declare module.exports: Dragula


}

declare module 'npm$namespace$dragula' {
		declare interface DragulaOptions {
		containers?: Element[],
		isContainer?: (el?: Element) => boolean,
		moves?: (el?: Element, container?: Element, handle?: Element) => boolean,
		accepts?: (el?: Element, target?: Element, source?: Element, sibling?: Element) => boolean,
		invalid?: (el?: Element, target?: Element) => boolean,
		direction?: string,
		copy?: boolean,
		revertOnSpill?: boolean,
		removeOnSpill?: boolean,
		delay?: boolean | number,
		mirrorContainer?: Element
	}

	declare interface Drake {
		containers: Element[],
		dragging: boolean,
		start(item: Element): void,
		end(): void,
		cancel(revert: boolean): void,
		cancel(): void,
		remove(): void,
		on(events: string, callback: Function): void,
		destroy(): void
	}

	declare interface Dragula {
		(containers: Element[], options: DragulaOptions): Drake,
		(containers: Element, options: DragulaOptions): Drake,
		(containers: Element[]): Drake,
		(options: DragulaOptions): Drake,
		(): Drake
	}

			
}