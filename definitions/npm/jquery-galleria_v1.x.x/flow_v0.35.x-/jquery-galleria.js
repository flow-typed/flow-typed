/**
 * Flowtype definitions for jquery-galleria
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface GalleriaJS$GalleriaOptions {
    dataSource: GalleriaJS$GalleriaEntry[],
        autoplay?: boolean,
        lightbox?: boolean
}

declare interface GalleriaJS$GalleriaEntry {
    image?: string,
        thumbnail?: string,
        title?: string,
        description?: string
}

declare interface GalleriaJS$GalleriaFactory {
    run(): GalleriaJS$GalleriaFactory,
        run(selector: String): GalleriaJS$GalleriaFactory,
        run(
            selector: String,
            options: GalleriaJS$GalleriaOptions): GalleriaJS$GalleriaFactory,
        loadTheme(url: String): GalleriaJS$GalleriaFactory,
        configure(options: GalleriaJS$GalleriaOptions): GalleriaJS$GalleriaFactory,
        ready(method: () => any): void,
        refreshImage(): GalleriaJS$GalleriaFactory,
        resize(): GalleriaJS$GalleriaFactory,
        load(data: GalleriaJS$GalleriaEntry[]): GalleriaJS$GalleriaFactory,
        setOptions(options: GalleriaJS$GalleriaOptions): GalleriaJS$GalleriaFactory
}
declare var Galleria: GalleriaJS$GalleriaFactory;