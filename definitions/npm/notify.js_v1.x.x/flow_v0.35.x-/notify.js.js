/**
 * Flowtype definitions for notify.js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface NotifyJS$NotificationOptions {
    clickToHide: boolean,
        autoHide: boolean,
        autoHideDelay: number,
        arrowShow: boolean,
        arrowSize: number,
        position: string,
        elementPosition: string,
        globalPosition: string,
        style: string,
        className: string,
        showAnimation: string,
        showDuration: number,
        hideAnimation: string,
        hideDuration: number,
        gap: number
}

declare interface NotifyJS$JQueryStaticNotify {

    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (element?: any, notificationdata?: any, options?: NotifyJS$NotificationOptions): NotifyJS$JQueryStatic,

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any,

        /**
         * Remove style
         * @param styleName style name
         */
        removeStyle(styleName: string): any,

        /**
         * Get style
         * @param styleName style name
         */
        getStyle(styleName: string): any,

        /**
         * Insert css
         * @param cssText css text to insert
         */
        insertCSS(cssText: string): any,

        /**
         * Set defaults for notifications
         * @param options notification iptions
         */
        defaults(options: NotifyJS$NotificationOptions): any
}

declare interface NotifyJS$JQueryStatic {
    notify: NotifyJS$JQueryStaticNotify
}

declare interface NotifyJS$JQueryNotify {

    /**
     * notify user
     * @param element a jquery element
     * @param notificationdata global notification data
     * @param options notification options
     */
    (element?: any, notificationdata?: any, options?: NotifyJS$NotificationOptions): NotifyJS$JQuery,

    /**
     * Add style
     * @param styleName style name
     * @param styleDefinition style definition object
     */
    addStyle(styleName: string, styleDefinition: any): any,

        /**
         * Remove style
         * @param styleName style name
         */
        removeStyle(styleName: string): any,

        /**
         * Get style
         * @param styleName style name
         */
        getStyle(styleName: string): any,

        /**
         * Insert css
         * @param cssText css text to insert
         */
        insertCSS(cssText: string): any,

        /**
         * Set defaults for notifications
         * @param options notification iptions
         */
        defaults(options: NotifyJS$NotificationOptions): any
}

declare interface NotifyJS$JQuery {
    notify: NotifyJS$JQueryStaticNotify
}