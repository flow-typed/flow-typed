

declare module 'blazy' {
		declare interface Blazy {
		new (options: BlazyOptions): BlazyInstance
	}

	declare interface BlazyOptions {
		breakpoints?: Breakpoint[],
		container?: string,
		error?: (ele: Element | HTMLElement, msg: string) => void,
		errorClass?: string,
		loadInvisible?: boolean,
		offset?: number,
		saveViewportOffsetDelay?: number,
		selector?: string,
		separator?: string,
		src?: string,
		success?: (ele: Element | HTMLElement) => void,
		successClass?: string,
		validateDelay?: number
	}

	declare interface BlazyInstance {
		revalidate(): void,
		load(
		elements: Element | Element[] | HTMLElement | HTMLElement[] | NodeList, force: boolean
	): void,
		destroy(): void
	}

	declare interface Breakpoint {
		width: number,
		src: string
	}

			
}

declare module 'Blazy' {
					declare module.exports: undefined


}