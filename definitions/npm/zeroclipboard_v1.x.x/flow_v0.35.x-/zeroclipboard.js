// @flow
/**
 * Flowtype definitions for zeroclipboard
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ZC$List<T>{
    [index: number]: T,
    length: number
}

declare interface ZC$Dictionary<T>{
    [key: string]: T
}

declare interface ZC$EventListener<T>{
    (ev: T): void
}

declare interface ZC$EventListenerObject<T>{
    handleEvent(ev: T): void
}

declare type ZC$EventListenerOrEventListenerObject<T>= ZC$EventListener<T>| ZC$EventListenerObject<T>;

declare export type ZC$ZeroClipboardStatic = {
    new(elements?: Element | ZC$List<Element>): ZC$ZeroClipboardClient,

    /**
     * The version of the ZeroClipboard library being used, e.g. "2.0.0".
     * @type  
     */
    version: string,

    /**
     * Get a copy of the active configuration for ZeroClipboard.
     * @return  
     */
    config(): ZC$ZeroClipboardConfig,

    /**
     * Get a copy of the actively configured value for this configuration property for ZeroClipboard.
     * @param  
     * @return  
     */
    config(propName: string): any,
    config(propName: "swfPath"): string,
    config(propName: "trustedDomains"): string[],
    config(propName: "cacheBust"): boolean,
    config(propName: "forceEnhancedClipboard"): boolean,
    config(propName: "flashLoadTimeout"): number,
    config(propName: "autoActivate"): boolean,
    config(propName: "bubbleEvents"): boolean,
    config(propName: "fixLineEndings"): boolean,
    config(propName: "containerId"): string,
    config(propName: "containerClass"): string,
    config(propName: "swfObjectId"): string,
    config(propName: "hoverClass"): string,
    config(propName: "activeClass"): string,
    config(propName: "forceHandCursor"): boolean,
    config(propName: "title"): string,
    config(propName: "zIndex"): number,

    /**
     * Set the active configuration for ZeroClipboard. Returns a copy of the updated active configuration.
     * @param  
     * @return  
     */
    config(config: ZC$ZeroClipboardConfig): ZC$ZeroClipboardConfig,

    /**
     * Create the Flash bridge SWF object.
     * IMPORTANT: This method should be considered private.
     * @private  
     */
    create(): void,

    /**
     * Emit the "destroy" event, remove all event handlers, and destroy the Flash bridge.
     */
    destroy(): void,

    /**
     * Focus/"activate" the provided element by moving the Flash SWF object in front of it.
     * @param  
     * @since  2.1.0
     */
    focus(element: Element): void,

    /**
     * Focus/"activate" the provided element by moving the Flash SWF object in front of it.
     * @param  
     * @deprecated  : The preferred method to use is focus but the alias activate is available for backward compatibility's sake.
     */
    activate(element: Element): void,

    /**
     * Blur/"deactivate" the currently focused/"activated" element, moving the Flash SWF object off the screen.
     * @since  2.1.0
     */
    blur(): void,

    /**
     * Blur/"deactivate" the currently focused/"activated" element, moving the Flash SWF object off the screen.
     * @deprecated  : The preferred method to use is blur but the alias deactivate is available for backward compatibility's sake.
     */
    deactivate(): void,

    /**
     * Return the currently "activated" element that the Flash SWF object is in front of it.
     * @return  or {null}
     */
    activeElement(): HTMLElement,

    /**
     * Diagnostic method that describes the state of the browser, Flash Player, and ZeroClipboard.
     * @return  
     */
    state(): Object,

    /**
     * Indicates if Flash Player is definitely unusable (disabled, outdated, unavailable, or deactivated).
     * IMPORTANT: This method should be considered private.
     * @return  * 
     * @private  
     */
    isFlashUnusable(): boolean
} & ZC$ZeroClipboardCommon


declare type ZC$ZeroClipboardClient = {

    /**
     * A unique identifier for this ZeroClipboard client instance.
     * @type  
     */
    id: string,

    /**
     * Remove all event handlers and unclip all clipped elements.
     */
    destroy(): void,

    /**
     * Set the pending data of type "text/plain" for clipboard injection.
     * @param  
     */
    setText(data: string): void,

    /**
     * Set the pending data of type "text/html" for clipboard injection.
     * @param  
     */
    setHtml(data: string): void,

    /**
     * Set the pending data of type "application/rtf" for clipboard injection.
     * @param  
     */
    setRichText(data: string): void,

    /**
     * Register clipboard actions for new element(s) to the client. This includes automatically invoking
     * ZeroClipboard.focus on the current element when it is hovered over, unless the autoActivate configuration
    property is set to false.
     * @param  
     * @return  
    */
    clip(elements: ZC$List<Element>): ZC$ZeroClipboardClient,

    /**
     * Register clipboard actions for new element(s) to the client. This includes automatically invoking
     * ZeroClipboard.focus on the current element when it is hovered over, unless the autoActivate configuration
    property is set to false.
     * @param  
     * @return  
    */
    clip(element: Element): ZC$ZeroClipboardClient,

    /**
     * Unregister the clipboard actions of previously registered element(s) on the page. If no elements are provided,
     * ALL clipped/registered elements will be unregistered.
     * @param  
     * @return  
     */
    unclip(elements: ZC$List<Element>): ZC$ZeroClipboardClient,

    /**
     * Unregister the clipboard actions of previously registered element(s) on the page. If no elements are provided,
     * ALL clipped/registered elements will be unregistered.
     * @param  
     * @return  
     */
    unclip(elements?: Element): ZC$ZeroClipboardClient,

    /**
     * Get all of the elements to which this client is clipped/registered.
     * @return  
     */
    elements(): HTMLElement[]
} & ZC$ZeroClipboardCommon


declare interface ZC$ZeroClipboardEvent {
    client?: ZC$ZeroClipboardClient,
        type: string,
        target: HTMLElement,
        relatedTarget: HTMLElement,
        currentTarget: HTMLObjectElement,
        timeStamp: number
}

declare type ZC$ZeroClipboardReadyEvent = {
    message: string,
    version: string
} & ZC$ZeroClipboardEvent


declare type ZC$ZeroClipboardBeforeCopyEvent = {} & ZC$ZeroClipboardEvent


declare type ZC$ZeroClipboardCopyEvent = {
    clipboardData: {
        setData(format: string, data: string): void,
        setData(data: ZC$Dictionary<string>): void,
        clearData(mimeType?: string): void
    }
} & ZC$ZeroClipboardEvent


declare type ZC$ZeroClipboardAfterCopyEvent = {
    success: ZC$Dictionary<boolean>,
    data: ZC$Dictionary<string>,
    errors: any[]
} & ZC$ZeroClipboardEvent


declare type ZC$ZeroClipboardDestroyEvent = {
    success: ZC$Dictionary<boolean>,
    data: ZC$Dictionary<string >
} & ZC$ZeroClipboardEvent


declare type ZC$ZeroClipboardErrorEvent = {
    name: string,
    message: string,
    minimumVersion?: string,
    version?: string,
    jsVersion?: string,
    swfVersion?: string,
    property?: string,
    configuredValue?: string,
    actualValue?: string,
    data?: ZC$Dictionary<string>,
    errors?: any[]
} & ZC$ZeroClipboardEvent


declare interface ZC$ZeroClipboardCommon {

    /**
     * Set the pending data of type format for clipboard injection.
     * @param  
     * @param  
     */
    setData(format: string, data: string): void,

        /**
         * Set the pending data of various formats for clipboard injection. This particular function signature (passing in
         * an Object) will implicitly clear out any existing pending data.
         * @param  
         */
        setData(data: ZC$Dictionary<string>): void,

        /**
         * Clear the pending data of type format for clipboard injection.
         * @param  
         */
        clearData(mimeType: string): void,

        /**
         * Clear the pending data of ALL formats for clipboard injection.
         */
        clearData(): void,

        /**
         * Get the pending data of type format for clipboard injection.
         * @param  
         * @return  * 
         * @since  2.1.0
         */
        getData(format: string): string,

        /**
         * Get a copy of the pending data of ALL formats for clipboard injection.
         * @return  * 
         * @since  2.1.0
         */
        getData(): ZC$Dictionary<string>,

        /**
         * Add a listener function/object for an eventType. If called as a client method will be within the client instance.
         * @param  
         * @param  
         */
        on(
            eventType: string,
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardEvent>): void,

        /**
         * The ready event is fired when the Flash SWF completes loading and is ready for action. Please note that you need
         * to set most configuration options [with ZeroClipboard.config(...)] before ZeroClipboard.create() is invoked.
         * @param  
         * @param  
         */
        on(
            eventType: "ready",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>): void,

        /**
         * On click, the Flash object will fire off a beforecopy event. This event is generally only used for "UI
         * preparation" if you want to alter anything before the copy event fires.
        IMPORTANT: Handlers of this event are expected to operate synchronously if they intend to be finished before
        the "copy" event is triggered.
         * @param  
         * @param  
        */
        on(
            eventType: "beforecopy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>): void,

        /**
         * On click (and after the beforecopy event), the Flash object will fire off a copy event. If the HTML object has
         * data-clipboard-text or data-clipboard-target, then ZeroClipboard will take care of getting an initial set of
        data. It will then invoke any copy event handlers, in which you can call event.clipboardData.setData to set the
        text, which will complete the loop.
        IMPORTANT: If a handler of this event intends to modify the pending data for clipboard injection, it MUST
        operate synchronously in order to maintain the temporarily elevated permissions granted by the user's click
        event. The most common "gotcha" for this restriction is if someone wants to make an asynchronous XMLHttpRequest
        in response to the copy event to get the data to inject - this won't work; make it a synchronous XMLHttpRequest
        instead, or do the work in advance before the copy event is fired.
         * @param  
         * @param  
        */
        on(
            eventType: "copy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>): void,

        /**
         * The aftercopy event is fired when the text is copied [or failed to copy] to the clipboard.
         * @param  
         * @param  
         */
        on(
            eventType: "aftercopy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>): void,

        /**
         * The destroy event is fired when ZeroClipboard.destroy() is invoked.
         * IMPORTANT: Handlers of this event are expected to operate synchronously if they intend to be finished before the
        destruction is complete.
         * @param  
         * @param  
        */
        on(
            eventType: "destroy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>): void,

        /**
         * The error event is fired under a number of conditions, which will be detailed as sub-sections. Some consumers
         * may not consider all error types to be critical, and thus ZeroClipboard does not take it upon itself to implode
        by calling ZeroClipboard.destroy() under error conditions. However, many consumers may want to do just that.
         * @param  
         * @param  
        */
        on(
            eventType: "error",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent>): void,

        /**
         * Add a set of eventType to listener function/object mappings.
         * @param  
         */
        on(
            listenerObj: {
                ready?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>,
                beforecopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>,
                copy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>,
                aftercopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>,
                destroy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>,
                error?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent >
            }): void,

        /**
         * Remove a listener function/object for an eventType.
         * @param  
         * @param  
         */
        off(
            eventType: string,
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardEvent>): void,
        off(
            eventType: "ready",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>): void,
        off(
            eventType: "beforecopy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>): void,
        off(
            eventType: "copy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>): void,
        off(
            eventType: "aftercopy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>): void,
        off(
            eventType: "destroy",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>): void,
        off(
            eventType: "error",
            listener: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent>): void,

        /**
         * Remove a set of eventType to listener function/object mappings.
         * @param  
         */
        off(
            listenerObj: {
                ready?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>,
                beforecopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>,
                copy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>,
                aftercopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>,
                destroy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>,
                error?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent >
            }): void,

        /**
         * Remove ALL listener functions/objects for ALL registered event types.
         */
        off(): void,

        /**
         * Dispatch an event to all registered listeners. The emission of some types of events will result in side effects.
         * @param  
         * @return  
         */
        emit(eventType: string): any,
        emit(eventType: "ready"): void,
        emit(eventType: "beforecopy"): void,
        emit(eventType: "copy"): any,
        emit(eventType: "aftercopy"): void,
        emit(eventType: "destroy"): void,
        emit(eventType: "error"): void,

        /**
         * Dispatch an event to all registered listeners. The emission of some types of events will result in side effects.
         * @param  
         * @param  
         * @return  
         */
        emit(data: {
            type: string,
            name: string
        }): any,

        /**
         * Retrieves a copy of the registered listener functions/objects for the given eventType.
         * @param  
         * @return  
         */
        handlers(
            eventType: string): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardEvent>[],
        handlers(
            eventType: "ready"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>[],
        handlers(
            eventType: "beforecopy"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>[],
        handlers(
            eventType: "copy"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>[],
        handlers(
            eventType: "aftercopy"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>[],
        handlers(
            eventType: "destroy"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>[],
        handlers(
            eventType: "error"): ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent>[],

        /**
         * Retrieves a copy of the map of registered listener functions/objects for ALL event types.
         * @return  
         */
        handlers(): {
            ready?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardReadyEvent>[],
            beforecopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardBeforeCopyEvent>[],
            copy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardCopyEvent>[],
            aftercopy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardAfterCopyEvent>[],
            destroy?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardDestroyEvent>[],
            error?: ZC$EventListenerOrEventListenerObject<ZC$ZeroClipboardErrorEvent>[]
        }
}

declare interface ZC$ZeroClipboardConfig {

    /**
     * SWF URL, relative to the page. Default value will be "ZeroClipboard.swf" under the same path as the ZeroClipboard JS file.
     * @type  
     */
    swfPath?: string,

        /**
         * SWF inbound scripting policy: page domains that the SWF should trust. (single string, or array of strings)
         * @type  
         */
        trustedDomains?: string[],

        /**
         * Include a "noCache" query parameter on requests for the SWF.
         * @type  
         */
        cacheBust?: boolean,

        /**
         * Enable use of the fancy "Desktop" clipboard, even on Linux where it is known to suck.
         * @type  
         */
        forceEnhancedClipboard?: boolean,

        /**
         * How many milliseconds to wait for the Flash SWF to load and respond before assuming that
         * Flash is deactivated (e.g. click-to-play) in the user's browser. If you don't care about
        how long it takes to load the SWF, you can set this to `null`.
         * @type  
        */
        flashLoadTimeout?: number,

        /**
         * Setting this to `false` would allow users to handle calling `ZeroClipboard.focus(...);`
         * themselves instead of relying on our per-element `mouseover` handler.
         * @type  
         */
        autoActivate?: boolean,

        /**
         * Bubble synthetic events in JavaScript after they are received by the Flash object.
         * @type  
         */
        bubbleEvents?: boolean,

        /**
         * Ensure OS-compliant line endings, i.e. "\r\n" on Windows, "\n" elsewhere
         * @type  
         */
        fixLineEndings?: boolean,

        /**
         * Sets the ID of the `div` encapsulating the Flash object.
         * Value is validated against the [HTML4 spec for `ID` tokens][valid_ids].
         * @type  
         */
        containerId?: string,

        /**
         * Sets the class of the `div` encapsulating the Flash object.
         * @type  
         */
        containerClass?: string,

        /**
         * Sets the ID and name of the Flash `object` element.
         * Value is validated against the [HTML4 spec for `ID` and `Name` tokens][valid_ids].
         * @type  
         */
        swfObjectId?: string,

        /**
         * The class used to indicate that a clipped element is being hovered over.
         * @type  
         */
        hoverClass?: string,

        /**
         * The class used to indicate that a clipped element is active (is being clicked).
         * @type  
         */
        activeClass?: string,

        /**
         * Forcibly set the hand cursor ("pointer") for all clipped elements.
         * IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
         * @type  
         */
        forceHandCursor?: boolean,

        /**
         * Sets the title of the `div` encapsulating the Flash object.
         * IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
         * @type  
         */
        title?: string,

        /**
         * The z-index used by the Flash object.
         * Max value (32-bit): 2147483647.
        IMPORTANT: This configuration value CAN be modified while a SWF is actively embedded.
         * @type  
        */
        zIndex?: number
}
declare var ZeroClipboard: ZC$ZeroClipboardStatic;
declare module 'zeroclipboard' {
    declare module.exports: typeof ZeroClipboard
}