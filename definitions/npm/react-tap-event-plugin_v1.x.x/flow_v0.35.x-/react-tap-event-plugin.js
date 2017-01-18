/**
 * Flowtype definitions for react-tap-event-plugin
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'react-tap-event-plugin' {
    declare interface StrategyOverrides {
        shouldRejectClick?: (lastTouchEventTimestamp: Date, clickEventTimestamp: Date) => boolean
    }
    declare var injectTapEventPlugin: (strategyOverrides?: StrategyOverrides) => void;
    declare module.exports: typeof injectTapEventPlugin
}