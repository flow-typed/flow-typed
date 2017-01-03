// @flow
/**
 * Flowtype definitions for helmet
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'helmet' {
    declare     export interface helmet$IHelmetConfiguration {
        contentSecurityPolicy?: boolean | helmet$IHelmetContentSecurityPolicyConfiguration,
            dnsPrefetchControl?: boolean | helmet$IHelmetDnsPrefetchControlConfiguration,
            frameguard?: boolean | helmet$IHelmetFrameguardConfiguration,
            hidePoweredBy?: boolean | helmet$IHelmetHidePoweredByConfiguration,
            hpkp?: boolean | helmet$IHelmetHpkpConfiguration,
            hsts?: boolean | helmet$IHelmetHstsConfiguration,
            ieNoOpen?: boolean,
            noCache?: boolean,
            noSniff?: boolean,
            xssFilter?: boolean | helmet$IHelmetXssFilterConfiguration
    }

    declare     export interface helmet$IHelmetContentSecurityPolicyDirectiveFunction {
        (req: express.Request, res: express.Response): string
    }

    declare     export type helmet$HelmetCspDirectiveValue = string | helmet$IHelmetContentSecurityPolicyDirectiveFunction;

    declare     export interface helmet$IHelmetContentSecurityPolicyDirectives {
        baseUri?: helmet$HelmetCspDirectiveValue[],
            childSrc?: helmet$HelmetCspDirectiveValue[],
            connectSrc?: helmet$HelmetCspDirectiveValue[],
            defaultSrc?: helmet$HelmetCspDirectiveValue[],
            fontSrc?: helmet$HelmetCspDirectiveValue[],
            formAction?: helmet$HelmetCspDirectiveValue[],
            frameAncestors?: helmet$HelmetCspDirectiveValue[],
            frameSrc?: helmet$HelmetCspDirectiveValue[],
            imgSrc?: helmet$HelmetCspDirectiveValue[],
            mediaSrc?: helmet$HelmetCspDirectiveValue[],
            objectSrc?: helmet$HelmetCspDirectiveValue[],
            pluginTypes?: helmet$HelmetCspDirectiveValue[],
            reportUri?: string,
            sandbox?: helmet$HelmetCspDirectiveValue[],
            scriptSrc?: helmet$HelmetCspDirectiveValue[],
            styleSrc?: helmet$HelmetCspDirectiveValue[]
    }

    declare     export interface helmet$IHelmetContentSecurityPolicyConfiguration {
        reportOnly?: boolean,
            setAllHeaders?: boolean,
            disableAndroid?: boolean,
            browserSniff?: boolean,
            directives?: helmet$IHelmetContentSecurityPolicyDirectives
    }

    declare     export interface helmet$IHelmetDnsPrefetchControlConfiguration {
        allow?: boolean
    }

    declare     export interface helmet$IHelmetFrameguardConfiguration {
        action?: string,
            domain?: string
    }

    declare     export interface helmet$IHelmetHidePoweredByConfiguration {
        setTo?: string
    }

    declare     export interface helmet$IHelmetSetIfFunction {
        (req: express.Request, res: express.Response): boolean
    }

    declare     export interface helmet$IHelmetHpkpConfiguration {
        maxAge: number,
            sha256s: string[],
            includeSubdomains?: boolean,
            reportUri?: string,
            reportOnly?: boolean,
            setIf?: helmet$IHelmetSetIfFunction
    }

    declare     export interface helmet$IHelmetHstsConfiguration {
        maxAge: number,
            includeSubdomains?: boolean,
            preload?: boolean,
            setIf?: helmet$IHelmetSetIfFunction,
            force?: boolean
    }

    declare     export interface helmet$IHelmetXssFilterConfiguration {
        setOnOldIE?: boolean
    }


    /**
     * 
     * @summary  Interface for helmet class.
     * @interface  
     */
    declare     export interface helmet$Helmet {

        /**
         * 
         * @summary  Constructor.
         * @return  The Request handler.
         */
        (options?: helmet$IHelmetConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Set policy around third-party content via headers
             * @param  The options
             * @return  The Request handler
             */
            contentSecurityPolicy(
                options?: helmet$IHelmetContentSecurityPolicyConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Stop browsers from doing DNS prefetching.
             * @param  The options
             * @return  The Request handler
             */
            dnsPrefetchControl(
                options?: helmet$IHelmetDnsPrefetchControlConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Prevent clickjacking.
             * @param  The options
             * @return  The Request handler
             */
            frameguard(options?: helmet$IHelmetFrameguardConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Hide "X-Powered-By" header.
             * @param  The options
             * @return  The Request handler.
             */
            hidePoweredBy(options?: helmet$IHelmetHidePoweredByConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Adds the "Public-Key-Pins" header.
             * @param  The options
             * @return  The Request handler.
             */
            hpkp(options?: helmet$IHelmetHpkpConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Adds the "Strict-Transport-Security" header.
             * @param  The options
             * @return  The Request handler.
             */
            hsts(options?: helmet$IHelmetHstsConfiguration): express.RequestHandler,

            /**
             * 
             * @summary  Add the "X-Download-Options" header.
             * @return  The Request handler.
             */
            ieNoOpen(): express.RequestHandler,

            /**
             * 
             * @summary  Add the "Cache-Control" and "Pragma" headers to stop caching.
             * @return  The Request handler.
             */
            noCache(options?: Object): express.RequestHandler,

            /**
             * 
             * @summary  Adds the "X-Content-Type-Options" header.
             * @return  The Request handler.
             */
            noSniff(): express.RequestHandler,

            /**
             * 
             * @summary  Mitigate cross-site scripting attacks with the "X-XSS-Protection" header.
             * @param  The options
             * @return  The Request handler.
             */
            xssFilter(options?: helmet$IHelmetXssFilterConfiguration): express.RequestHandler
    }
    declare     var helmet: helmet$Helmet;
    declare module.exports: typeof helmet
}