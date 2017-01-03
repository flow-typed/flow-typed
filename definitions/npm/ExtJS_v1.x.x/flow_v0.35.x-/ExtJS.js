/**
 * Flowtype definitions for ExtJS
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export type Ext$IWindowGroup = {

    /**
     * [Method] Brings the specified Component to the front of any other active Components in this ZIndexManager
     * @param comp String/Object The id of the Component or a Ext.Component instance
     * @returns  Boolean True if the dialog was brought to the front, else false if it was already in front
     */
    bringToFront(comp?: any): boolean,

    /**
     * [Method] Executes the specified function once for every Component in this ZIndexManager passing each Component as the only pa
     * @param fn Function The function to execute for each item
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the current Component in the iteration.
     */
    each(fn?: any, scope?: any): void,

    /**
     * [Method] Executes the specified function once for every Component in this ZIndexManager passing each Component as the only pa
     * @param fn Function The function to execute for each item
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the current Component in the iteration.
     */
    eachBottomUp(fn?: any, scope?: any): void,

    /**
     * [Method] Executes the specified function once for every Component in this ZIndexManager passing each Component as the only pa
     * @param fn Function The function to execute for each item
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the current Component in the iteration.
     */
    eachTopDown(fn?: any, scope?: any): void,

    /**
     * [Method] Gets a registered Component by id
     * @param id String/Object The id of the Component or a Ext.Component instance
     * @returns  Ext.Component
     */
    get(id?: any): Ext$IComponent,

    /**
     * [Method] Gets the currently active Component in this ZIndexManager
     * @returns  Ext.Component The active Component
     */
    getActive(): Ext$IComponent,

    /**
     * [Method] Returns zero or more Components in this ZIndexManager using the custom search function passed to this method
     * @param fn Function The search function
     * @param scope Object The scope (this reference) in which the function is executed. Defaults to the Component being tested. That gets passed to the function if not specified.
     * @returns  Array An array of zero or more matching windows
     */
    getBy(fn?: any, scope?: any): any[],

    /**
     * [Method] Hides all Components managed by this ZIndexManager  
     */
    hideAll(): void,

    /**
     * [Method] Registers a floating Ext Component with this ZIndexManager
     * @param comp Ext.Component The Component to register.
     */
    register(comp?: Ext$IComponent): void,

    /**
     * [Method] Sends the specified Component to the back of other active Components in this ZIndexManager
     * @param comp String/Object The id of the Component or a Ext.Component instance
     * @returns  Ext.Component The Component
     */
    sendToBack(comp?: any): Ext$IComponent,

    /**
     * [Method] Unregisters a Ext Component from this ZIndexManager
     * @param comp Ext.Component The Component to unregister.
     */
    unregister(comp?: Ext$IComponent): void
}