

declare module 'onsenui' {
		declare interface stringArray {
		[index: number]: string
	}

	declare interface objectArray {
		[index: number]: any
	}

	declare interface PageView {
		getDeviceBackButtonHandler(): any
	}

	declare interface CarouselView {
		next(): void,
		prev(): void,
		first(): void,
		last(): void,
		setSwipeable(swipeable: boolean): void,
		isSwipeable(): boolean,
		setActiveCarouselItemIndex(index: number): void,
		getActiveCarouselItemIndex(): number,
		setAutoScrollEnabled(enabled: boolean): void,
		isAutoScrollEnabled(): boolean,
		setAutoScrollRatio(ratio: number): void,
		getAutoScrollRatio(): number,
		setOverscrollable(overscrollable: boolean): void,
		isOverscrollable(): boolean,
		refresh(): void,
		isDisabled(): boolean,
		setDisabled(disabled: boolean): void,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface PullHookView {
		setDisabled(disabled: boolean): void,
		isDisabled(): boolean,
		setHeight(height: number): void,
		setThresholdHeight(thresholdHeight: number): void,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface SplitView {
		setMainPage(pageUrl: string): void,
		setSecondaryPage(pageUrl: string): void,
		update(): void,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface dialogOptions {
		animation?: string,
		callback?: any
	}

	declare interface AlertDialogView {
		show(options?: dialogOptions): void,
		hide(options?: dialogOptions): void,
		isShown(): boolean,
		destroy(): void,
		setCancelable(cancelable: boolean): void,
		isCancelable(): boolean,
		setDisabled(disabled: boolean): void,
		isDisabled(): boolean,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface DialogView {
		show(options?: dialogOptions): void,
		hide(options?: dialogOptions): void,
		isShown(): boolean,
		destroy(): void,
		getDeviceBackButtonHandler(): any,
		setCancelable(cancelable: boolean): void,
		isCancelable(): boolean,
		setDisabled(disabled: boolean): void,
		isDisabled(): boolean,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface ButtonView {
		startSpin(): void,
		stopSpin(): void,
		isSpinning(): boolean,
		setSpinAnimation(animation: string): void,
		setDisabled(disabled: boolean): void,
		isDisabled(): boolean
	}

	declare interface SwitchView {
		isChecked(): boolean,
		setChecked(checked: boolean): void,
		getCheckboxElement(): HTMLElement,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface ModalView {
		toggle(): void,
		show(): void,
		hide(): void,
		getDeviceBackButtonHandler(): any
	}

	declare interface navigatorOptions {
		animation?: string,
		onTransitionEnd?: any
	}

	declare interface NavigatorView {
		pushPage(pageUrl: string, options?: navigatorOptions): void,
		insertPage(index: number, pageUrl: string, options?: navigatorOptions): void,
		popPage(options?: navigatorOptions): void,
		resetToPage(pageUrl: string, options?: navigatorOptions): void,
		getCurrentPage(): any,
		getPages(): objectArray,
		getDeviceBackButtonHandler(): any,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface slidingMenuOptions {
		closeMenu?: boolean,
		callback?: any
	}

	declare interface SlidingMenuView {
		setMainPage(pageUrl: string, options?: slidingMenuOptions): void,
		setMenuPage(pageUrl: string, options?: slidingMenuOptions): void,
		openMenu(options?: slidingMenuOptions): void,
		closeMenu(options?: slidingMenuOptions): void,
		toggleMenu(options?: slidingMenuOptions): void,
		isMenuOpened(): boolean,
		getDeviceBackButtonHandler(): any,
		setSwipeable(swipeable: boolean): void,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface tabbarOptions {
		keepPage?: boolean
	}

	declare interface TabbarView {
		setActiveTab(index: number, options?: tabbarOptions): boolean,
		getActiveTabIndex(): number,
		loadPage(url: string): void,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface popoverOptions {
		animation?: string
	}

	declare interface PopoverView {
		show(target: any, options?: popoverOptions): void,
		hide(options?: popoverOptions): void,
		isShown(): boolean,
		destroy(): void,
		setCancelable(cancelable: boolean): void,
		isCancelable(): boolean,
		setDisabled(disabled: boolean): void,
		isDisabled(): boolean,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface onsStatic {
		ready(callback: any): void,
		bootstrap(moduleName?: string, dependencies?: objectArray): any,
		enableAutoStatusBarFill(): void,
		disableAutoStatusBarFill(): void,
		findParentComponentUntil(name: string, dom?: any): any,
		findComponent(selector: string, dom?: HTMLElement): any,
		setDefaultDeviceBackButtonListener(listener: (eventObject: any) => any): void,
		disableDeviceBackButtonHandler(): void,
		enableDeviceBackButtonHandler(): void,
		isReady(): boolean,
		compile(dom: HTMLElement): void,
		isWebView(): boolean,
		createAlertDialog(page: string): any,
		createDialog(page: string): any,
		createPopover(page: string): any,
		notification: onsNotification,
		orientation: onsOrientation,
		platform: onsPlatform
	}

	declare interface alertOptions {
		message?: string,
		messageHTML?: string,
		buttonLabel?: string,
		buttonLabels?: stringArray,
		primaryButtonIndex?: number,
		cancelable?: boolean,
		animation?: string,
		title?: string,
		modifier?: string,
		callback?: any
	}

	declare interface onsNotification {
		alert(options: alertOptions): void,
		confirm(options: alertOptions): void,
		prompt(options: alertOptions): void
	}

	declare interface onsOrientation {
		isPortrait(): boolean,
		isLandscape(): boolean,
		on(eventName: string, listener: (eventObject: any) => any): void,
		once(eventName: string, listener: (eventObject: any) => any): void,
		off(eventName: string, listener?: (eventObject: any) => any): void
	}

	declare interface onsPlatform {
		isWebView(): boolean,
		isIOS(): boolean,
		isAndroid(): boolean,
		isIPhone(): boolean,
		isIPad(): boolean,
		isBlackBerry(): boolean,
		isOpera(): boolean,
		isFirefox(): boolean,
		isSafari(): boolean,
		isChrome(): boolean,
		isIE(): boolean,
		isIOS7above(): boolean
	}

			
}