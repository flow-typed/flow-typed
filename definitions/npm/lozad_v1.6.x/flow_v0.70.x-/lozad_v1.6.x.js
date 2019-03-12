// @flow
declare module 'lozad' {
	declare type Selector = NodeList<HTMLElement> | HTMLElement | string

	declare type Options = {
		rootMargin?: string,
		treshold?: number,
		load?: (element: HTMLElement) => void,
		loaded?: (element: HTMLElement) => void,
	}

	declare type LozadInstance = {
		observe: () => void,
		triggerLoad: (element: HTMLElement) => void,
		observer: IntersectionObserver,
	}

	declare export default function lozad(selector?: Selector, options?: Options): LozadInstance
}