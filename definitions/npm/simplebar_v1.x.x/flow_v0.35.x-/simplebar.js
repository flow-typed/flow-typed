// @flow
/**
 * Flowtype definitions for simplebar
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SimplebarOptions {
    autoHide?: boolean,
        wrapContent?: boolean
}
declare interface JQuery {

    /**
     * Enables simplebar on calling element.
     */
    simplebar: {

        /**
         * Define if scrollbar should be faded out automatically
         * @param indicator if scrollbar should be faded out automatically.
         */
        (options?: SimplebarOptions): JQuery
    }
}
declare interface JQueryStatic {

    /**
     * Enables simplebar on calling element.
     */
    simplebar: {

        /**
         * Define if scrollbar should be faded out automatically
         * @param indicator if scrollbar should be faded out automatically.
         */
        (options?: SimplebarOptions): JQuery
    }
}