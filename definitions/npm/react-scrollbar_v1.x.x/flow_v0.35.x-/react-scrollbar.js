// @flow
/**
 * Flowtype definitions for react-scrollbar
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'react-scrollbar' {
    declare type ScrollAreaProps = {
        className?: string,
        style?: ___React.CSSProperties,
        speed?: number,
        contentClassName?: string,
        contentStyle?: ___React.CSSProperties,
        vertical?: boolean,
        verticalContainerStyle?: ___React.CSSProperties,
        verticalScrollbarStyle?: ___React.CSSProperties,
        horizontal?: boolean,
        horizontalContainerStyle?: ___React.CSSProperties,
        horizontalScrollbarStyle?: ___React.CSSProperties,
        onScroll?: (
            value: {
                leftPosition: number,
                topPosition: number,
                containerHeight: number,
                containerWidth: number,
                realHeight: number,
                realWidth: number
            }) => void,
        contentWindow?: any,
        ownerDocument?: any,
        smoothScrolling?: boolean,
        minScrollSize?: number,
        swapWheelAxes?: boolean
    }
    declare module.exports: typeof ScrollArea
}