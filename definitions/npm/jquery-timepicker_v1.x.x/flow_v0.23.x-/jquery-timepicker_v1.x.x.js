interface TimePickerHour {
    starts?: number;
    ends?: number;
}

interface TimePickerMinutes {
    starts?: number;
    ends?: number;
    interval?: number;
}

interface TimePickerOptions {
    showOn?: string;
    button?: string;
    hourText?: string;
    minuteText?: string;
    amPmText?: [string, string];
    showAnim?: string;
    showOptions?: any;
    appendText?: string;
    beforeShow?: () => any;
    onSelect?: (timeText: string, inst: any) => any;
    onClose?: (timeText: string, inst: any) => any;
    timeSeparator?: string;
    periodSeparator?: string;
    showPeriod?: boolean;
    showPeriodLabels?: boolean;
    showLeadingZero?: boolean;
    showMinutesLeadingZero?: boolean;
    altField?: string;
    defaultTime?: string;
    myPosition?: string;
    atPosition?: string;
    onHourShow?: () => any;
    onMinuteShow?: () => any;
    hours?: TimePickerHour;
    minutes?: TimePickerMinutes;
    rows?: number;
    showHours?: boolean;
    showMinutes?: boolean;
    optionalMinutes?: boolean;
    showCloseButton?: boolean;
    closeButtonText?: string;
    showNowButton?: boolean;
    nowButtonText?: string;
    showDeselectButton?: boolean;
    deselectButtonText?: string;
}

interface TimepickerJQuery {
    timepicker(): any;
    timepicker(methodName: 'getTime'): string;
    timepicker(methodName: 'getTimeAsDate'): Date;
    timepicker(methodName: 'getHour'): number;
    timepicker(methodName: 'getMinute'): number;
    timepicker(methodName: string): any;
    timepicker(methodName: string, methodParameter: any): any;
    timepicker(optionLiteral: string, optionName: string): any;
    timepicker(options: TimePickerOptions): any;
}
