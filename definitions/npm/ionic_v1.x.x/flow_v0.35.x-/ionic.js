// @flow
/**
 * Flowtype definitions for ionic
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface IonicStatic {

    /**
     * What Ionic package version is.
     */
    version: string,
        Platform: {

            /**
             * Trigger a callback once the device is ready, or immediately
             *  if the device is already ready. This method can be run from
             anywhere and does not need to be wrapped by any additonal methods.
             When the app is within a WebView (Cordova), it’ll fire
             the callback once the device is ready. If the app is within
             a web browser, it’ll fire the callback after window.load.
             Please remember that Cordova features (Camera, FileSystem, etc) still
             will not work in a web browser.
            */
            ready(callback: () => any): void,

            /**
             * Set the grade of the device: ‘a’, ‘b’, or ‘c’. ‘a’ is the best
             * (most css features enabled), ‘c’ is the worst. By default, sets the grade
            depending on the current device.
            */
            setGrade(grade: string): void,

            /**
             * Return the current device (given by cordova).
             */
            device(): any,

            /**
             * Check if the platform name provided is detected.
             */
            is(platformName: string): boolean,

            /**
             * Check if we are running within a WebView (such as Cordova).
             */
            isWebView(): boolean,

            /**
             * Whether we are running on iPad.
             */
            isIPad(): boolean,

            /**
             * Whether we are running on iOS.
             */
            isIOS(): boolean,

            /**
             * Whether we are running on Android.
             */
            isAndroid(): boolean,

            /**
             * Whether we are running on Windows Phone.
             */
            isWindowsPhone(): boolean,

            /**
             * The name of the current platform.
             */
            platform(): string,

            /**
             * The version of the current device platform.
             */
            version(): number,

            /**
             * Exit the app.
             */
            exitApp(): void,

            /**
             * Shows or hides the device status bar (in Cordova). Requires cordova plugin add org.apache.cordova.statusbar
             */
            showStatusBar(shouldShow: boolean): void,

            /**
             * Sets whether the app is fullscreen or not (in Cordova).
             */
            fullScreen(showFullScreen?: boolean, showStatusBar?: boolean): void,

            /**
             * Whether the device is ready.
             */
            isReady: boolean,

            /**
             * Whether the device is fullscreen.
             */
            isFullScreen: boolean,

            /**
             * An array of all platforms found.
             */
            platforms: Array<string>,

            /**
             * What grade the current platform is.
             */
            grade: string
        }
}
declare var ionic: IonicStatic;
declare module 'ionic' {
    declare module.exports: typeof ionic
}
declare interface actionSheet$IonicActionSheetService {
    show(options: actionSheet$IonicActionSheetOptions): () => void
}

declare interface actionSheet$IonicActionSheetButton {
    text: string
}

declare interface actionSheet$IonicActionSheetOptions {
    buttons?: Array<actionSheet$IonicActionSheetButton>,
        titleText?: string,
        cancelText?: string,
        destructiveText?: string,
        cancel?: () => any,
        buttonClicked?: (index: number) => boolean,
        destructiveButtonClicked?: () => boolean,
        cancelOnStateChange?: boolean,
        cssClass?: string
}

declare interface backdrop$IonicBackdropService {
    retain(): void,
        release(): void
}

declare interface gestures$IonicGestureService {
    on(
            eventType: string,
            callback: (e: any) => any,
            $element: angular.IAugmentedJQuery,
            options: any): gestures$IonicGesture,
        off(
            gesture: gestures$IonicGesture,
            eventType: string,
            callback: (e: any) => any): void
}

declare interface gestures$IonicGesture {
    element: Element,
        enabled: boolean,
        options: {
            stop_browser_behavior: string
        },
        on(gesture: string, handler: Function): gestures$IonicGesture,
        off(gesture: string, handler: Function): gestures$IonicGesture,
        trigger(gesture: string, eventData: any): gestures$IonicGesture,
        enable(state: boolean): gestures$IonicGesture
}

declare interface list$IonicListDelegate {
    showReorder(showReorder?: boolean): boolean,
        showDelete(showDelete?: boolean): boolean,
        canSwipeItems(canSwipeItems?: boolean): boolean,
        closeOptionButtons(): void,
        $getByHandle(handle: string): list$IonicListDelegate
}

declare interface loading$IonicLoadingService {
    show(opts?: loading$IonicLoadingOptions): void,
        hide(): void
}

declare interface loading$IonicLoadingOptions {
    template?: string,
        templateUrl?: string,
        scope?: any,
        noBackdrop?: boolean,
        hideOnStateChange?: boolean,
        delay?: number,
        duration?: number
}

declare interface modal$IonicModalService {
    fromTemplate(
            templateString: string,
            options?: modal$IonicModalOptions): modal$IonicModalController,
        fromTemplateUrl(
            templateUrl: string,
            options?: modal$IonicModalOptions): angular.IPromise<modal$IonicModalController >
}

declare interface modal$IonicModalController {
    initialize(options: modal$IonicModalOptions): void,
        show(): angular.IPromise<void>,
        hide(): angular.IPromise<void>,
        remove(): angular.IPromise<void>,
        isShown(): boolean
}

declare interface modal$IonicModalOptions {
    scope?: any,
        animation?: string,
        focusFirstInput?: boolean,
        backdropClickToClose?: boolean,
        hardwareBackButtonClose?: boolean
}

declare interface navigation$IonicNavBarDelegate {
    align(direction?: string): void,
        showBackButton(show?: boolean): boolean,
        showBar(show?: boolean): boolean,
        title(title: string): void
}

declare interface navigation$IonicHistoryService {
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
        nextViewOptions(options: navigation$IonicHistoryNextViewOptions): void
}

declare interface navigation$IonicHistoryNextViewOptions {
    disableAnimate?: boolean,
        disableBack?: boolean,
        historyRoot?: boolean
}

declare interface platform$IonicPlatformService {
    onHardwareBackButton(callback: Function): void,
        offHardwareBackButton(callback: Function): void,
        registerBackButtonAction(callback: Function, priority: number, actionId?: any): Function,
        on(type: string, callback: Function): Function,
        ready(callback?: Function): angular.IPromise<any >
}

declare interface popover$IonicPopoverService {
    fromTemplate(
            templateString: string,
            options: popover$IonicPopoverOptions): popover$IonicPopoverController,
        fromTemplateUrl(
            templateUrl: string,
            options: popover$IonicPopoverOptions): angular.IPromise<popover$IonicPopoverController >
}

declare interface popover$IonicPopoverController {
    initialize(options: popover$IonicPopoverOptions): void,
        show($event?: any): angular.IPromise<any>,
        hide(): angular.IPromise<any>,
        isShown(): boolean,
        remove(): angular.IPromise<any >
}

declare interface popover$IonicPopoverOptions {
    scope?: any,
        focusFirstInput?: boolean,
        backdropClickToClose?: boolean,
        hardwareBackButtonClose?: boolean
}

declare interface popup$IonicPopupService {
    show(options: popup$IonicPopupFullOptions): popup$IonicPopupPromise,
        alert(options: popup$IonicPopupAlertOptions): popup$IonicPopupPromise,
        confirm(options: popup$IonicPopupConfirmOptions): popup$IonicPopupConfirmPromise,
        prompt(options: popup$IonicPopupPromptOptions): popup$IonicPopupPromise
}

declare type popup$IonicPopupConfirmPromise = {
    close(value?: boolean): void
}

declare type popup$IonicPopupPromise = {
    close(value?: any): any
}

declare interface popup$IonicPopupBaseOptions {
    title?: string,
        cssClass?: string,
        subTitle?: string,
        template?: string,
        templateUrl?: string
}

declare type popup$IonicPopupFullOptions = {
    scope?: any,
    buttons?: Array<popup$IonicPopupButton >
} & popup$IonicPopupBaseOptions


declare interface popup$IonicPopupButton {
    text: string,
        type?: string,
        onTap(event?: any): void
}

declare type popup$IonicPopupAlertOptions = {
    okText?: string,
    okType?: string
} & popup$IonicPopupBaseOptions


declare type popup$IonicPopupConfirmOptions = {
    cancelText?: string,
    cancelType?: string,
    okText?: string,
    okType?: string
} & popup$IonicPopupBaseOptions


declare type popup$IonicPopupPromptOptions = {
    inputType?: string,
    inputPlaceholder?: string,
    cancelText?: string,
    cancelType?: string,
    okText?: string,
    okType?: string
} & popup$IonicPopupBaseOptions


declare interface scroll$IonicScrollDelegate {
    resize(): void,
        scrollTop(shouldAnimate?: boolean): void,
        scrollBottom(shouldAnimate?: boolean): void,
        scrollTo(left: number, top: number, shouldAnimate?: boolean): void,
        scrollBy(left: number, top: number, shouldAnimate?: boolean): void,
        zoomTo(
            level: number,
            animate?: boolean,
            originLeft?: number,
            originTop?: number): void,
        zoomBy(
            factor: number,
            animate?: boolean,
            originLeft?: number,
            originTop?: number): void,
        getScrollPosition(): {
            left: number,
            top: number
        },
        anchorScroll(shouldAnimate?: boolean): void,
        freezeScroll(shouldFreeze?: boolean): boolean,
        freezeAllScrolls(shouldFreeze?: boolean): boolean,
        getScrollView(): any,
        $getByHandle(handle: string): scroll$IonicScrollDelegate
}

declare interface sideMenu$IonicSideMenuDelegate {
    toggleLeft(isOpen?: boolean): void,
        toggleRight(isOpen?: boolean): void,
        getOpenRatio(): number,
        isOpen(): boolean,
        isOpenLeft(): boolean,
        isOpenRight(): boolean,
        canDragContent(canDrag?: boolean): boolean,
        edgeDragThreshold(value?: boolean | number): boolean,
        $getByHandle(handle: string): sideMenu$IonicSideMenuDelegate
}

declare interface slideBox$IonicSlideBoxDelegate {
    update(): void,
        slide(to: number, speed?: number): void,
        enableSlide(shouldEnable?: boolean): boolean,
        previous(speed?: number): void,
        next(speed?: number): void,
        stop(): void,
        start(): void,
        currentIndex(): number,
        slidesCount(): number,
        $getByHandle(handle: string): slideBox$IonicSlideBoxDelegate
}

declare interface tabs$IonicTabsDelegate {
    select(index: number): void,
        selectedIndex(): number,
        $getByHandle(handle: string): tabs$IonicTabsDelegate,
        showBar(show?: boolean): boolean
}

declare interface utility$IonicConfigProvider {
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

declare interface utility$IonicPositionService {
    position(element: any): {
            top: number,
            left: number,
            width: number,
            height: number
        },
        offset(element: any): {
            top: number,
            left: number,
            width: number,
            height: number
        }
}