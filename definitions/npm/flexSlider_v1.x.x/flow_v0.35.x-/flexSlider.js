// @flow
/**
 * Flowtype definitions for flexSlider
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface SliderObject {
    container: Object,
        slides: Object,
        count: number,
        currentSlide: number,
        animatingTo: number,
        animating: boolean,
        atEnd: boolean,
        manualPause: boolean,
        controlNav: Object,
        directionNav: Object,
        controlsContainer: Object,
        manualControls: Object,
        flexAnimate(target: << UNKNOWN PARAM FORMAT >> , pause?: << UNKNOWN PARAM FORMAT >> ): void,
        pause(): void,
        resume(): void,
        canAdvance(target: << UNKNOWN PARAM FORMAT >> ): void,
        getTarget(dir: << UNKNOWN PARAM FORMAT >> ): void
}
declare interface FlexSliderOptions {
    namespace?: string,
        selector?: string,
        animation?: string,
        easing?: string,
        direction?: string,
        reverse?: boolean,
        animationLoop?: boolean,
        smoothHeight?: boolean,
        startAt?: number,
        slideshow?: boolean,
        slideshowSpeed?: number,
        animationSpeed?: number,
        initDelay?: number,
        randomize?: boolean,
        pauseOnAction?: boolean,
        pauseOnHover?: boolean,
        useCSS?: boolean,
        touch?: boolean,
        video?: boolean,
        controlNav?: any,
        directionNav?: boolean,
        prevText?: string,
        nextText?: string,
        keyboard?: boolean,
        multipleKeyboard?: boolean,
        mousewheel?: boolean,
        pausePlay?: boolean,
        pauseText?: string,
        playText?: string,
        controlsContainer?: string,
        manualControls?: string,
        sync?: string,
        asNavFor?: string,
        itemWidth?: number,
        itemMargin?: number,
        minItems?: number,
        maxItems?: number,
        move?: number,
        start?: (slider: SliderObject) => any,
        before?: (slider: SliderObject) => any,
        after?: (slider: SliderObject) => any,
        end?: (slider: SliderObject) => any,
        added?: (slider: SliderObject) => any,
        removed?: (slider: SliderObject) => any
}
declare interface JQuery {
    flexslider(options?: FlexSliderOptions): void
}