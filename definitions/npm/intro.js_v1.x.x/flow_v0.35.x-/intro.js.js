/**
 * Flowtype definitions for intro.js
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface IntroJs$Step {
    intro: string,
        element?: string | HTMLElement | Element,
        position?: string
}

declare interface IntroJs$Options {
    nextLabel?: string,
        prevLabel?: string,
        skipLabel?: string,
        doneLabel?: string,
        tooltipPosition?: string,
        tooltipClass?: string,
        highlightClass?: string,
        exitOnEsc?: boolean,
        exitOnOverlayClick?: boolean,
        showStepNumbers?: boolean,
        keyboardNavigation?: boolean,
        showButtons?: boolean,
        showBullets?: boolean,
        showProgress?: boolean,
        scrollToElement?: boolean,
        overlayOpacity?: number,
        positionPrecedence?: string[],
        disableInteraction?: boolean,
        hintPosition?: string,
        hintButtonLabel?: string,
        steps?: IntroJs$Step[]
}

declare interface IntroJs$IntroJs {
    start(): IntroJs$IntroJs,
        exit(): IntroJs$IntroJs,
        clone(): IntroJs$IntroJs,
        goToStep(step: number): IntroJs$IntroJs,
        nextStep(): IntroJs$IntroJs,
        previousStep(): IntroJs$IntroJs,
        refresh(): IntroJs$IntroJs,
        setOption(option: string, value: string | number | boolean): IntroJs$IntroJs,
        setOptions(options: IntroJs$Options): IntroJs$IntroJs,
        onexit(callback: Function): IntroJs$IntroJs,
        onbeforechange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
        onafterchange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
        onchange(callback: (element: HTMLElement) => any): IntroJs$IntroJs,
        oncomplete(callback: Function): IntroJs$IntroJs,
        addHints(): IntroJs$IntroJs,
        onhintsadded(callback: Function): IntroJs$IntroJs,
        onhintclick(
            callback: (hintElement: HTMLElement, item: IntroJs$Step, stepId: number) => any): IntroJs$IntroJs,
        onhintclose(callback: (stepId: number) => any): IntroJs$IntroJs
}

declare interface IntroJs$Factory {
    (): IntroJs$IntroJs,
    (element: HTMLElement): IntroJs$IntroJs,
    (querySelector: string): IntroJs$IntroJs
}
declare
var introJs: IntroJs$Factory;
declare module 'intro.js' {
    declare module.exports: typeof IntroJs
}