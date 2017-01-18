/**
 * Flowtype definitions for systemjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare type SystemJSLoader$ModulesList = {
    [bundleName: string]: Array<string >
};

declare type SystemJSLoader$PackageList<T>= {
    [packageName: string]: T
};


/**
 * The following module formats are supported:
 * 
- esm: ECMAScript Module (previously referred to as es6)
- cjs: CommonJS
- amd: Asynchronous Module Definition
- global: Global shim module format
- register: System.register or System.registerDynamic compatibility module format
*/
declare type SystemJSLoader$ModuleFormat = "esm" |
    "cjs" |
    "amd" |
    "global" |
    "register";


/**
 * Sets the module name of the transpiler to be used for loading ES6 modules.
 * Represents a module name for System.import that must resolve to either Traceur, Babel or TypeScript.
When set to traceur, babel or typescript, loading will be automatically configured as far as possible.
*/
declare type SystemJSLoader$Transpiler = "plugin-traceur" |
    "plugin-babel" |
    "plugin-typescript" |
    "traceur" |
    "babel" |
    "typescript" |
    boolean;

declare type SystemJSLoader$ConfigMap = SystemJSLoader$PackageList<string>;

declare type SystemJSLoader$ConfigMeta = SystemJSLoader$PackageList<SystemJSLoader$MetaConfig>;

declare interface SystemJSLoader$MetaConfig {

    /**
     * Sets in what format the module is loaded.
     */
    format?: SystemJSLoader$ModuleFormat,

        /**
         * For the global format, when automatic detection of exports is not enough, a custom exports meta value can be set.
         * This tells the loader what global name to use as the module's export value.
         */
        exports?: string,

        /**
         * Dependencies to load before this module. Goes through regular paths and map normalization.
         * Only supported for the cjs, amd and global formats.
         */
        deps?: Array<string>,

        /**
         * A map of global names to module names that should be defined only for the execution of this module.
         * Enables use of legacy code that expects certain globals to be present.
        Referenced modules automatically becomes dependencies. Only supported for the cjs and global formats.
        */
        globals?: string,

        /**
         * Set a loader for this meta path.
         */
        loader?: string,

        /**
         * For plugin transpilers to set the source map of their transpilation.
         */
        sourceMap?: any,

        /**
         * Load the module using <script> tag injection.
         */
        scriptLoad?: boolean,

        /**
         * The nonce attribute to use when loading the script as a way to enable CSP.
         * This should correspond to the "nonce-" attribute set in the Content-Security-Policy header.
         */
        nonce?: string,

        /**
         * The subresource integrity attribute corresponding to the script integrity,
         * describing the expected hash of the final code to be executed.
        For example, System.config({ meta: { 'src/example.js': { integrity: 'sha256-e3b0c44...' }});
        would throw an error if the translated source of src/example.js doesn't match the expected hash.
        */
        integrity?: string,

        /**
         * When scripts are loaded from a different domain (e.g. CDN) the global error handler (window.onerror)
         * has very limited information about errors to prevent unintended leaking. In order to mitigate this,
        the <script> tags need to set crossorigin attribute and the server needs to enable CORS.
        The valid values are "anonymous" and "use-credentials".
        */
        crossOrigin?: string,

        /**
         * When loading a module that is not an ECMAScript Module, we set the module as the default export,
         * but then also iterate the module object and copy named exports for it a well.
        Use this option to disable this iteration and copying of the exports.
        */
        esmExports?: boolean,

        /**
         * To ignore resources that shouldn't be traced as part of the build.
         * Use with the SystemJS Builder. (https://github.com/systemjs/builder#ignore-resources)
         */
        build?: boolean
}

declare interface SystemJSLoader$PackageConfig {

    /**
     * The main entry point of the package (so import 'local/package' is equivalent to import 'local/package/index.js')
     */
    main?: string,

        /**
         * The module format of the package. See Module Formats.
         */
        format?: SystemJSLoader$ModuleFormat,

        /**
         * The default extension to add to modules requested within the package. Takes preference over defaultJSExtensions.
         * Can be set to defaultExtension: false to optionally opt-out of extension-adding when defaultJSExtensions is enabled.
         */
        defaultExtension?: boolean | string,

        /**
         * Local and relative map configurations scoped to the package. Apply for subpaths as well.
         */
        map?: SystemJSLoader$ConfigMap,

        /**
         * Module meta provides an API for SystemJS to understand how to load modules correctly.
         * Package-scoped meta configuration with wildcard support. Modules are subpaths within the package path.
        This also provides an opt-out mechanism for defaultExtension, by adding modules here that should skip extension adding.
        */
        meta?: SystemJSLoader$ConfigMeta
}

declare interface SystemJSLoader$TraceurOptions {
    properTailCalls?: boolean,
        symbols?: boolean,
        arrayComprehension?: boolean,
        asyncFunctions?: boolean,
        asyncGenerators?: any,
        forOn?: boolean,
        generatorComprehension?: boolean
}

declare interface SystemJSLoader$Config {
    [customName: string]: any,

    /**
     * The baseURL provides a special mechanism for loading modules relative to a standard reference URL.
     */
    baseURL?: string,

        /**
         * Set the Babel transpiler options when System.transpiler is set to babel.
         */
        babelOptions?: any,

        /**
         * undles allow a collection of modules to be downloaded together as a package whenever any module from that collection is requested.
         * Useful for splitting an application into sub-modules for production. Use with the SystemJS Builder.
         */
        bundles?: SystemJSLoader$ModulesList,

        /**
         * Backwards-compatibility mode for the loader to automatically add '.js' extensions when not present to module requests.
         * This allows code written for SystemJS 0.16 or less to work easily in the latest version:
         */
        defaultJSExtensions?: boolean,

        /**
         * An alternative to bundling providing a solution to the latency issue of progressively loading dependencies.
         * When a module specified in depCache is loaded, asynchronous loading of its pre-cached dependency list begins in parallel.
         */
        depCache?: SystemJSLoader$ModulesList,

        /**
         * The map option is similar to paths, but acts very early in the normalization process.
         * It allows you to map a module alias to a location or package:
         */
        map?: SystemJSLoader$ConfigMap,

        /**
         * Module meta provides an API for SystemJS to understand how to load modules correctly.
         * Meta is how we set the module format of a module, or know how to shim dependencies of a global script.
         */
        meta?: SystemJSLoader$ConfigMeta,

        /**
         * Packages provide a convenience for setting meta and map configuration that is specific to a common path.
         * In addition packages allow for setting contextual map configuration which only applies within the package itself.
        This allows for full dependency encapsulation without always needing to have all dependencies in a global namespace.
        */
        packages?: SystemJSLoader$PackageList<SystemJSLoader$PackageConfig>,

        /**
         * The ES6 Module Loader paths implementation, applied after normalization and supporting subpaths via wildcards.
         * It is usually advisable to use map configuration over paths unless you need strict control over normalized module names.
         */
        paths?: SystemJSLoader$PackageList<string>,

        /**
         * Set the Traceur compilation options.
         */
        traceurOptions?: SystemJSLoader$TraceurOptions,

        /**
         * Sets the module name of the transpiler to be used for loading ES6 modules.
         */
        transpiler?: SystemJSLoader$Transpiler,
        trace?: boolean,

        /**
         * Sets the TypeScript transpiler options.
         */
        typescriptOptions?: any
}

declare interface SystemJSLoader$SystemJSSystemFields {
    env: string,
        loaderErrorStack: boolean,
        packageConfigPaths: Array<string>,
        pluginFirst: boolean,
        version: string,
        warnings: boolean
}

declare type SystemJSLoader$System = {

    /**
     * For backwards-compatibility with AMD environments, set window.define = System.amdDefine.
     */
    amdDefine: Function,

    /**
     * For backwards-compatibility with AMD environments, set window.require = System.amdRequire.
     */
    amdRequire: Function,

    /**
     * SystemJS configuration helper function.
     * Once SystemJS has loaded, configuration can be set on SystemJS by using the configuration function System.config.
     */
    config(config: SystemJSLoader$Config): void,

    /**
     * This represents the System base class, which can be extended or reinstantiated to create a custom System instance.
     */
    constructor(): SystemJSLoader$System,

    /**
     * Deletes a module from the registry by normalized name.
     */
    delete(moduleName: string): void,

    /**
     * Returns a module from the registry by normalized name.
     */
    get(moduleName: string): any,
    get<TModule>(moduleName: string): TModule,

    /**
     * Returns whether a given module exists in the registry by normalized module name.
     */
    has(moduleName: string): boolean,

    /**
     * Loads a module by name taking an optional normalized parent name argument.
     * Promise resolves to the module value.
     */
    import (moduleName: string, normalizedParentName?: string): Promise<any>,
    import<TModule>(moduleName: string, normalizedParentName?: string): Promise<TModule>,

    /**
     * Given a plain JavaScript object, return an equivalent Module object.
     * Useful when writing a custom instantiate hook or using System.set.
     */
    newModule(object: any): any,
    newModule<TModule>(object: any): TModule,

    /**
     * Declaration function for defining modules of the System.register polyfill module format.
     */
    register(name: string, deps: Array<string>, declare: Function): void,
    register(deps: Array<string>, declare: Function): void,

    /**
     * Companion module format to System.register for non-ES6 modules.
     * Provides a <script>-injection-compatible module format that any CommonJS or Global module can be converted into for CSP compatibility.
     */
    registerDynamic(
        name: string,
        deps: Array<string>,
        executingRequire: boolean,
        declare: Function): void,
    registerDynamic(deps: Array<string>, executingRequire: boolean, declare: Function): void,

    /**
     * Sets a module into the registry directly and synchronously.
     * Typically used along with System.newModule to create a valid Module object:
     */
    set(moduleName: string, module: any): void,

    /**
     * In CommonJS environments, SystemJS will substitute the global require as needed by the module format being
     * loaded to ensure the correct detection paths in loaded code.
    The CommonJS require can be recovered within these modules from System._nodeRequire.
    */
    _nodeRequire: Function,

    /**
     * Modules list available only with trace=true
     */
    loads: SystemJSLoader$PackageList<any >
} & SystemJSLoader$Config & SystemJSLoader$SystemJSSystemFields
declare var SystemJS: SystemJSLoader$System;
declare var System: SystemJSLoader$System;
declare module 'systemjs' {
    declare var system: systemJSLoader.System;
    declare module.exports: typeof system
}