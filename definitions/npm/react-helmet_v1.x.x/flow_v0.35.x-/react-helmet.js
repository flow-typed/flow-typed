/**
 * Flowtype definitions for react-helmet
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ReactHelmet$HelmetProps {
    base?: any,
        defaultTitle?: string,
        htmlAttributes?: any,
        link?: Array<any>,
        meta?: Array<any>,
        script?: Array<any>,
        title?: string,
        titleTemplate?: string,
        onChangeClientState?: (newState: any) => void
}

declare interface ReactHelmet$HelmetData {
    base: ReactHelmet$HelmetDatum,
        htmlAttributes: ReactHelmet$HelmetDatum,
        link: ReactHelmet$HelmetDatum,
        meta: ReactHelmet$HelmetDatum,
        script: ReactHelmet$HelmetDatum,
        title: ReactHelmet$HelmetDatum
}

declare interface ReactHelmet$HelmetDatum {
    toString(): string,
        toComponent(): React.Component<any, any >
}

declare class HelmetComponent mixins React.Component<ReactHelmet$HelmetProps, any>{}
declare module 'react-helmet' {
    declare var Helmet: {
        (): ReactHelmet$HelmetComponent,
        rewind(): ReactHelmet$HelmetData
    };
    declare module.exports: typeof Helmet
}