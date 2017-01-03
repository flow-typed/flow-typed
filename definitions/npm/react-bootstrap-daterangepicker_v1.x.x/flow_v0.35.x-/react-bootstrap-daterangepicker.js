/**
 * Flowtype definitions for react-bootstrap-daterangepicker
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare interface ReactBootstrapDaterangepicker$Picker {
    startDate: moment.Moment,
        endDate: moment.Moment
}

declare interface ReactBootstrapDaterangepicker$EventHandler {
    (event: ___React.SyntheticEvent, picker: ReactBootstrapDaterangepicker$Picker): void
}

declare type ReactBootstrapDaterangepicker$Props = {
        onShow?: ReactBootstrapDaterangepicker$EventHandler,
        onHide?: ReactBootstrapDaterangepicker$EventHandler,
        onShowCalendar?: ReactBootstrapDaterangepicker$EventHandler,
        onHideCalendar?: ReactBootstrapDaterangepicker$EventHandler,
        onApply?: ReactBootstrapDaterangepicker$EventHandler,
        onCancel?: ReactBootstrapDaterangepicker$EventHandler,
        onEvent?: ReactBootstrapDaterangepicker$EventHandler
    } & &


    declare
export class DateRangePicker mixins React.Component<ReactBootstrapDaterangepicker$Props, {}>{}
declare module 'react-bootstrap-daterangepicker' {
    declare module.exports: typeof DateRangePicker
}