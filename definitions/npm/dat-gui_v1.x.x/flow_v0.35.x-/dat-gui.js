/**
 * Flowtype definitions for dat-gui
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare
export class GUI {
    constructor(option?: dat$GUIParams): this;
    ___controllers: dat$GUIController[];
    ___folders: dat$GUI[];
    domElement: HTMLElement;
    add(target: Object, propName: string): dat$GUIController;
    add(target: Object, propName: string, min: number, max: number): dat$GUIController;
    add(target: Object, propName: string, status: boolean): dat$GUIController;
    add(target: Object, propName: string, items: string[]): dat$GUIController;
    add(target: Object, propName: string, items: number[]): dat$GUIController;
    add(target: Object, propName: string, items: Object): dat$GUIController;
    addColor(target: Object, propName: string): dat$GUIController;
    addColor(target: Object, propName: string, color: string): dat$GUIController;
    addColor(target: Object, propName: string, rgba: number[]): dat$GUIController;
    addColor(
        target: Object,
        propName: string,
        hsv: {
            h: number,
            s: number,
            v: number
        }): dat$GUIController;
    addFolder(propName: string): dat$GUI;
    close(): void;
    open(): void;
    remember(target: Object): void
}

declare
export interface dat$GUIParams {
    autoPlace?: boolean,
        closed?: boolean,
        load?: any,
        name?: string,
        preset?: string,
        width?: number
}

declare
export class GUIController {
    destroy(): void;
    fire(): dat$GUIController;
    getValue(): any;
    isModified(): boolean;
    listen(): dat$GUIController;
    min(n: number): dat$GUIController;
    remove(target: dat$GUIController): void;
    setValue(value: any): dat$GUIController;
    step(n: number): dat$GUIController;
    updateDisplay(): void;
    onChange: (value?: any) => void;
    onFinishChange: (value?: any) => void
}