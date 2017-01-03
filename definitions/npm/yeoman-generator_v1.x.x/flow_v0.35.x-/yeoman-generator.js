/**
 * Flowtype definitions for yeoman-generator
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare export interface yo$IYeomanGenerator {
    argument(name: string, config: yo$IArgumentConfig): void,
        composeWith(
            namespace: string,
            options: any,
            settings?: yo$IComposeSetting): yo$IYeomanGenerator,
        defaultFor(name: string): void,
        destinationRoot(rootPath?: string): string,
        destinationPath(...path: string[]): string,
        determineAppname(): void,
        getCollisionFilter(): (output: any) => void,
        hookFor(name: string, config: yo$IHookConfig): void,
        option(name: string, config: yo$IYeomanGeneratorOption): void,
        rootGeneratorName(): string,
        run(args?: any): void,
        run(args: any, callback?: Function): void,
        runHooks(callback?: Function): void,
        sourceRoot(rootPath?: string): string,
        templatePath(...path: string[]): string,
        prompt(
            opt: yo$IPromptOptions | yo$IPromptOptions[],
            callback: (answers: any) => void): void,
        prompt<T>(opt: yo$IPromptOptions | yo$IPromptOptions[]): PromiseLike<T>,
        npmInstall(packages?: string[] | string, options?: any, cb?: Function): void,
        installDependencies(options?: yo$IInstallDependencyOptions): void,
        spawnCommand(name: string, args?: string[], options?: Object): void,
        spawnCommandSync(name: string, args?: string[], options?: Object): void,
        options: {
            [key: string]: any
        },
        fs: yo$IMemFsEditor
}

declare export class YeomanGeneratorBase mixins NodeJS.EventEmitter, IYeomanGenerator {
    argument(name: string, config: yo$IArgumentConfig): void;
    composeWith(
        namespace: string,
        options: any,
        settings?: yo$IComposeSetting): yo$IYeomanGenerator;
    defaultFor(name: string): void;
    destinationRoot(rootPath?: string): string;
    destinationPath(...path: string[]): string;
    determineAppname(): void;
    getCollisionFilter(): (output: any) => void;
    hookFor(name: string, config: yo$IHookConfig): void;
    option(name: string, config?: yo$IYeomanGeneratorOption): void;
    rootGeneratorName(): string;
    run(args?: any): void;
    run(args: any, callback?: Function): void;
    runHooks(callback?: Function): void;
    sourceRoot(rootPath?: string): string;
    templatePath(...path: string[]): string;
    addListener(event: string, listener: Function): this;
    on(event: string, listener: Function): this;
    once(event: string, listener: Function): this;
    removeListener(event: string, listener: Function): this;
    removeAllListeners(event?: string): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: string): Function[];
    emit(event: string, ...args: any[]): boolean;
    listenerCount(type: string): number;
    async(): any;
    prompt(
        opt: yo$IPromptOptions | yo$IPromptOptions[],
        callback: (answers: any) => void): void;
    prompt<T>(opt: yo$IPromptOptions | yo$IPromptOptions[]): PromiseLike<T>;
    log(message: string): void;
    npmInstall(packages: string[], options?: any, cb?: Function): void;
    installDependencies(options?: yo$IInstallDependencyOptions): void;
    spawnCommand(name: string, args?: string[], options?: Object): void;
    spawnCommandSync(name: string, args?: string[], options?: Object): void;
    appname: string;
    gruntfile: yo$IGruntFileStatic;
    options: {
        [key: string]: any
    };
    fs: yo$IMemFsEditor
}

declare export interface yo$IMemFsEditor {
    read(filepath: string, options?: Object): string,
        readJSON(filepath: string, defaults?: Object): Object,
        write(filepath: string, contents: string): void,
        writeJSON(filepath: string, contents: Object, replacer?: Function, space?: number): void,
        delete(filepath: string, options?: Object): void,
        copy(from: string, to: string, options?: Object): void,
        copyTpl(from: string, to: string, context: Object, options?: Object): void,
        move(from: string, to: string, options?: Object): void,
        exists(filepath: string): boolean,
        commit(callback: Function): void,
        commit(filters: any[], callback: Function): void
}

declare export interface yo$IInstallDependencyOptions {
    npm?: boolean,
        bower?: boolean,
        skipMessage?: boolean,
        callback?: Function
}

declare export interface yo$IChoice {
    name: string,
        value: string,
        short?: string
}

declare export interface yo$IPromptOptions {
    type?: string,
        name: string,
        message: string | ((answers: Object) => string),
        choices?: any[] | ((answers: Object) => any),
        default?: string |
        number |
        string[] |
        number[] |
        ((answers: Object) => (string | number | string[] | number[])),
        validate?: ((input: any) => boolean | string),
        filter?: ((input: any) => any),
        when?: ((answers: Object) => boolean) | boolean,
        store?: boolean
}

declare export interface yo$IGruntFileStatic {
    loadNpmTasks(pluginName: string): void,
        insertConfig(name: string, config: any): void,
        registerTask(name: string, tasks: any): void,
        insertVariable(name: string, value: any): void,
        prependJavaScript(code: string): void
}

declare export interface yo$IArgumentConfig {
    desc: string,
        required?: boolean,
        optional?: boolean,
        type: any,
        defaults?: any
}

declare export interface yo$IComposeSetting {
    local?: string,
        link?: string
}

declare export interface yo$IHookConfig {
    as: string,
        args: any,
        options: any
}

declare export interface yo$IYeomanGeneratorOption {
    alias?: string,
        defaults?: any,
        desc?: string,
        hide?: boolean,
        type?: any
}

declare export interface yo$IQueueProps {
    initializing: () => void,
        prompting?: () => void,
        configuring?: () => void,
        default?: () => void,
        writing: {
            [target: string]: () => void
        },
        conflicts?: () => void,
        install?: () => void,
        end: () => void
}

declare export type yo$INamedBase = {} & yo$IYeomanGenerator


declare export type yo$IBase = {} & yo$INamedBase


declare export interface yo$IAssert {
    file(path: string): void,
        file(paths: string[]): void,
        fileContent(file: string, reg: RegExp): void,

        /**
         * 
         * @param  
         */
        fileContent(pairs: any[][]): void,

        /**
         * 
         * @param  
         */
        files(pairs: any[]): void,

        /**
         * 
         * @param  
         * @param  
         */
        implement(subject: any, methods: any): void,
        noFile(file: string): void,
        noFileContent(file: string, reg: RegExp): void,

        /**
         * 
         * @param  
         */
        noFileContent(pairs: any[][]): void,

        /**
         * 
         * @param  
         * @param  
         */
        noImplement(subject: any, methods: any): void,
        textEqual(value: string, expected: string): void
}

declare export interface yo$ITestHelper {
    createDummyGenerator(): yo$IYeomanGenerator,
        createGenerator(
            name: string,
            dependencies: any[],
            args: any,
            options: any): yo$IYeomanGenerator,
        decorate(context: any, method: string, replacement: Function, options: any): void,
        gruntfile(options: any, done: Function): void,
        mockPrompt(generator: yo$IYeomanGenerator, answers: any): void,
        registerDependencies(dependencies: string[]): void,
        restore(): void,

        /**
         * 
         * @param  
         */
        run(generator: any): yo$IRunContext
}

declare export interface yo$IRunContext {
    async(): Function,
    inDir(dirPath: string): yo$IRunContext,

        /**
         * 
         * @param  
         */
        withArguments(args: any): yo$IRunContext,
        withGenerators(dependencies: string[]): yo$IRunContext,
        withOptions(options: any): yo$IRunContext,
        withPrompts(answers: any): yo$IRunContext
}

declare var file: any;

declare var assert: yo$IAssert;

declare var test: yo$ITestHelper;

declare export class NamedBase mixins YeomanGeneratorBase, INamedBase {
    constructor(args: string | string[], options: any): this
}

declare export class Base mixins NamedBase, IBase {
    extend(protoProps: yo$IQueueProps, staticProps?: any): yo$IYeomanGenerator
}

declare export class NamedBase mixins YeomanGeneratorBase, INamedBase {
    constructor(args: string | string[], options: any): this
}

declare export class Base mixins NamedBase, IBase {
    extend(protoProps: yo$IQueueProps, staticProps?: any): yo$IYeomanGenerator
}
declare module 'yeoman-generator' {
    declare module.exports: typeof yo
}