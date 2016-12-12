

declare module 'Keyboard' {
		declare interface Keyboard {
		shrinkView(shrink: boolean): void,
		hideFormAccessoryBar(hide: boolean): void,
		disableScrollingInShrinkView(disable: boolean): void,
		isVisible: boolean,
		automaticScrollToTopOnHiding: boolean,
		onshow(): void,
		onhide(): void,
		onshowing(): void,
		onhiding(): void
	}

			
}