/**
 * Flowtype definitions for react-big-calendar
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'react-big-calendar' {

    declare type stringOrDate = string | Date;
    declare type BigCalendarProps = {
        date?: stringOrDate,
        view?: string,
        events?: Object[],
        onNavigate?: Function,
        onView?: Function,
        onSelectSlot?: (
            slotInfo: {
                start: stringOrDate,
                end: stringOrDate,
                slots: Date[] | string[]
            }) => void,
        onSelectEvent?: (event: Object) => void,
        onSelecting?: (slotInfo: {
            start: stringOrDate,
            end: stringOrDate
        }) => boolean,
        views?: Object,
        toolbar?: boolean,
        popup?: boolean,
        popupOffset?: number | {
            x: number,
            y: number
        },
        selectable?: boolean,
        step?: number,
        rtl?: boolean,
        eventPropGetter?: (
            event: Object,
            start: stringOrDate,
            end: stringOrDate,
            isSelected: boolean) => void,
        titleAccessor?: string,
        allDayAccessor?: boolean,
        startAccessor?: stringOrDate,
        endAccessor?: stringOrDate,
        min?: stringOrDate,
        max?: stringOrDate,
        scrollToTime?: stringOrDate,
        formats?: Object,
        components?: Object,
        messages?: Object
    }
    declare module.exports: typeof BigCalendar
}