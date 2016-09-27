interface DatepairOptions {
    anchor?: string;
    dateClass?: string;
    defaultDateDelta?: number;
    defaultTimeDelta?: number;
    endClass?: string;
    parseDate?: () => any;
    parseTime?: () => any;
    setMinTime?: () => any;
    startClass?: string;
    timeClass?: string;
    updateDate?: () => any;
    updateTime?: () => any;
}

interface DatepairJQuery {
    datepair(): any;
    datepair(methodName: 'getTimeDiff'): any;
    datepair(methodName: 'refresh'): any;
    datepair(methodName: 'remove'): any;
    datepair(methodName: string): any;
    datepair(methodName: string, methodParameter: any): any;
    datepair(optionLiteral: string, optionName: string): any;
    datepair(options: DatepairOptions): any;
}
