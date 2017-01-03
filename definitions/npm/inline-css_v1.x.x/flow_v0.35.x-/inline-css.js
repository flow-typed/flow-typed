// @flow
/**
 * Flowtype definitions for inline-css
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'inline-css' {
    declare     export interface InlineCss$Options {
        url: string,
            extraCss?: string,
            applyStyleTags?: boolean,
            applyLinkTags?: boolean,
            removeStyleTags?: boolean,
            removeLinkTags?: boolean,
            preserveMediaQueries?: boolean,
            applyWidthAttributes?: boolean,
            applyTableAttributes?: boolean
    }
    declare module.exports: typeof InlineCss
}