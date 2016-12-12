

declare module 'ionic' {
		declare interface IonicStatic {
		version: string,
		Platform: {
		ready(callback: () => any): void,
		setGrade(grade: string): void,
		device(): any,
		is(platformName: string): boolean,
		isWebView(): boolean,
		isIPad(): boolean,
		isIOS(): boolean,
		isAndroid(): boolean,
		isWindowsPhone(): boolean,
		platform(): string,
		version(): number,
		exitApp(): void,
		showStatusBar(shouldShow: boolean): void,
		fullScreen(showFullScreen?: boolean, showStatusBar?: boolean): void,
		isReady: boolean,
		isFullScreen: boolean,
		platforms: Array<string>,
		grade: string
	}
	}

			declare module.exports: IonicStatic


}

declare module 'actionSheet' {
		declare interface IonicActionSheetService {
		show(options: IonicActionSheetOptions): () => void
	}

	declare interface IonicActionSheetButton {
		text: string
	}

	declare interface IonicActionSheetOptions {
		buttons?: Array<IonicActionSheetButton>,
		titleText?: string,
		cancelText?: string,
		destructiveText?: string,
		cancel?: () => any,
		buttonClicked?: (index: number) => boolean,
		destructiveButtonClicked?: () => boolean,
		cancelOnStateChange?: boolean,
		cssClass?: string
	}

			
}

declare module 'backdrop' {
		declare interface IonicBackdropService {
		retain(): void,
		release(): void
	}

			
}

declare module 'gestures' {
		declare interface IonicGestureService {
		on(
		eventType: string, callback: (e: any) => any, $element: angular.IAugmentedJQuery, options: any
	): IonicGesture,
		off(gesture: IonicGesture, eventType: string, callback: (e: any) => any): void
	}

	declare interface IonicGesture {
		element: Element,
		enabled: boolean,
		options: {
		stop_browser_behavior: string
	},
		on(gesture: string, handler: Function): IonicGesture,
		off(gesture: string, handler: Function): IonicGesture,
		trigger(gesture: string, eventData: any): IonicGesture,
		enable(state: boolean): IonicGesture
	}

			
}

declare module 'list' {
		declare interface IonicListDelegate {
		showReorder(showReorder?: boolean): boolean,
		showDelete(showDelete?: boolean): boolean,
		canSwipeItems(canSwipeItems?: boolean): boolean,
		closeOptionButtons(): void,
		$getByHandle(handle: string): IonicListDelegate
	}

			
}

declare module 'loading' {
		declare interface IonicLoadingService {
		show(opts?: IonicLoadingOptions): void,
		hide(): void
	}

	declare interface IonicLoadingOptions {
		template?: string,
		templateUrl?: string,
		scope?: any,
		noBackdrop?: boolean,
		hideOnStateChange?: boolean,
		delay?: number,
		duration?: number
	}

			
}

declare module 'modal' {
		declare interface IonicModalService {
		fromTemplate(templateString: string, options?: IonicModalOptions): IonicModalController,
		fromTemplateUrl(
		templateUrl: string, options?: IonicModalOptions
	): angular.IPromise<IonicModalController>
	}

	declare interface IonicModalController {
		initialize(options: IonicModalOptions): void,
		show(): angular.IPromise<void>,
		hide(): angular.IPromise<void>,
		remove(): angular.IPromise<void>,
		isShown(): boolean
	}

	declare interface IonicModalOptions {
		scope?: any,
		animation?: string,
		focusFirstInput?: boolean,
		backdropClickToClose?: boolean,
		hardwareBackButtonClose?: boolean
	}

			
}

declare module 'navigation' {
		declare interface IonicNavBarDelegate {
		align(direction?: string): void,
		showBackButton(show?: boolean): boolean,
		showBar(show?: boolean): boolean,
		title(title: string): void
	}

	declare interface IonicHistoryService {
		viewHistory(): any,
		currentView(): any,
		currentHistoryId(): string,
		currentTitle(val?: string): string,
		backView(): any,
		backTitle(): string,
		forwardView(): any,
		currentStateName(): string,
		goBack(backCount?: number): void,
		removeBackView(): void,
		clearHistory(): void,
		clearCache(): angular.IPromise<any>,
		nextViewOptions(options: IonicHistoryNextViewOptions): void
	}

	declare interface IonicHistoryNextViewOptions {
		disableAnimate?: boolean,
		disableBack?: boolean,
		historyRoot?: boolean
	}

			
}

declare module 'platform' {
		declare interface IonicPlatformService {
		onHardwareBackButton(callback: Function): void,
		offHardwareBackButton(callback: Function): void,
		registerBackButtonAction(callback: Function, priority: number, actionId?: any): Function,
		on(type: string, callback: Function): Function,
		ready(callback?: Function): angular.IPromise<any>
	}

			
}

declare module 'popover' {
		declare interface IonicPopoverService {
		fromTemplate(templateString: string, options: IonicPopoverOptions): IonicPopoverController,
		fromTemplateUrl(
		templateUrl: string, options: IonicPopoverOptions
	): angular.IPromise<IonicPopoverController>
	}

	declare interface IonicPopoverController {
		initialize(options: IonicPopoverOptions): void,
		show($event?: any): angular.IPromise<any>,
		hide(): angular.IPromise<any>,
		isShown(): boolean,
		remove(): angular.IPromise<any>
	}

	declare interface IonicPopoverOptions {
		scope?: any,
		focusFirstInput?: boolean,
		backdropClickToClose?: boolean,
		hardwareBackButtonClose?: boolean
	}

			
}

declare module 'popup' {
		declare interface IonicPopupService {
		show(options: IonicPopupFullOptions): IonicPopupPromise,
		alert(options: IonicPopupAlertOptions): IonicPopupPromise,
		confirm(options: IonicPopupConfirmOptions): IonicPopupConfirmPromise,
		prompt(options: IonicPopupPromptOptions): IonicPopupPromise
	}

	declare interface IonicPopupConfirmPromise {
		close(value?: boolean): void
	}

	declare interface IonicPopupPromise {
		close(value?: any): any
	}

	declare interface IonicPopupBaseOptions {
		title?: string,
		cssClass?: string,
		subTitle?: string,
		template?: string,
		templateUrl?: string
	}

	declare interface IonicPopupFullOptions {
		scope?: any,
		buttons?: Array<IonicPopupButton>
	}

	declare interface IonicPopupButton {
		text: string,
		type?: string,
		onTap(event?: any): void
	}

	declare interface IonicPopupAlertOptions {
		okText?: string,
		okType?: string
	}

	declare interface IonicPopupConfirmOptions {
		cancelText?: string,
		cancelType?: string,
		okText?: string,
		okType?: string
	}

	declare interface IonicPopupPromptOptions {
		inputType?: string,
		inputPlaceholder?: string,
		cancelText?: string,
		cancelType?: string,
		okText?: string,
		okType?: string
	}

			
}

declare module 'scroll' {
		declare interface IonicScrollDelegate {
		resize(): void,
		scrollTop(shouldAnimate?: boolean): void,
		scrollBottom(shouldAnimate?: boolean): void,
		scrollTo(left: number, top: number, shouldAnimate?: boolean): void,
		scrollBy(left: number, top: number, shouldAnimate?: boolean): void,
		zoomTo(
		level: number, animate?: boolean, originLeft?: number, originTop?: number
	): void,
		zoomBy(
		factor: number, animate?: boolean, originLeft?: number, originTop?: number
	): void,
		getScrollPosition(): {
		left: number,
		top: number
	},
		anchorScroll(shouldAnimate?: boolean): void,
		freezeScroll(shouldFreeze?: boolean): boolean,
		freezeAllScrolls(shouldFreeze?: boolean): boolean,
		getScrollView(): any,
		$getByHandle(handle: string): IonicScrollDelegate
	}

			
}

declare module 'sideMenu' {
		declare interface IonicSideMenuDelegate {
		toggleLeft(isOpen?: boolean): void,
		toggleRight(isOpen?: boolean): void,
		getOpenRatio(): number,
		isOpen(): boolean,
		isOpenLeft(): boolean,
		isOpenRight(): boolean,
		canDragContent(canDrag?: boolean): boolean,
		edgeDragThreshold(value?: boolean | number): boolean,
		$getByHandle(handle: string): IonicSideMenuDelegate
	}

			
}

declare module 'slideBox' {
		declare interface IonicSlideBoxDelegate {
		update(): void,
		slide(to: number, speed?: number): void,
		enableSlide(shouldEnable?: boolean): boolean,
		previous(speed?: number): void,
		next(speed?: number): void,
		stop(): void,
		start(): void,
		currentIndex(): number,
		slidesCount(): number,
		$getByHandle(handle: string): IonicSlideBoxDelegate
	}

			
}

declare module 'tabs' {
		declare interface IonicTabsDelegate {
		select(index: number): void,
		selectedIndex(): number,
		$getByHandle(handle: string): IonicTabsDelegate,
		showBar(show?: boolean): boolean
	}

			
}

declare module 'utility' {
		declare interface IonicConfigProvider {
		views: {
		transition(transition?: string): string,
		maxCache(maxNumber?: number): number,
		forwardCache(value?: boolean): boolean,
		swipeBackEnabled(value?: boolean): boolean
	},
		scrolling: {
		jsScrolling(value?: boolean): boolean
	},
		backButton: {
		icon(value?: string): string,
		text(value?: string): string,
		previousTitleText(value?: boolean): boolean
	},
		form: {
		checkbox(value?: string): string,
		toggle(value?: string): string
	},
		spinner: {
		icon(value?: string): string
	},
		tabs: {
		style(value?: string): string,
		position(value?: string): string
	},
		templates: {
		maxPrefetch(value?: number): number
	},
		navBar: {
		alignTitle(value?: string): string,
		positionPrimaryButtons(value?: string): string,
		positionSecondaryButtons(value?: string): string
	}
	}

	declare interface IonicPositionService {
		position(
		element: any
	): {
		top: number,
		left: number,
		width: number,
		height: number
	},
		offset(
		element: any
	): {
		top: number,
		left: number,
		width: number,
		height: number
	}
	}

			
}