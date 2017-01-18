/**
 * Flowtype definitions for dateformat
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */


/**
 * dateFormat.masks
 * 
Predefined Formats

https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js#L107
*/
declare interface DateFormatMasks {
    default: string,
    shortDate: string,
        mediumDate: string,
        longDate: string,
        fullDate: string,
        shortTime: string,
        mediumTime: string,
        longTime: string,
        isoDate: string,
        isoTime: string,
        isoDateTime: string,
        isoUtcDateTime: string,
        expiresHeaderFormat: string, [key: string]: string
}
/**
 * dateFormat.i18n
 * 
Internationalization strings

Example:

```
dateFormat.i18n = {
   dayNames: [
     'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat',
     'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
   ],
   monthNames: [
     'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
     'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
   ]
}
```

https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js#L124
*/
declare interface DateFormatI18n {
    dayNames: string[],
        monthNames: string[]
}
/**
 * dateFormat()
 * 
Accepts a date, a mask, or a date and a mask.
Returns a formatted version of the given date.
The date defaults to the current date/time.
The mask defaults to dateFormat.masks.default.

https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js#L18
*/
declare interface DateFormatStatic {
    (date?: Date | string | number, mask?: string, utc?: boolean, gmt?: boolean): string,
    (mask?: string, utc?: boolean, gmt?: boolean): string,
    masks: DateFormatMasks,
        i18n: DateFormatI18n
}
declare module 'dateformat' {
    declare var dateFormat: DateFormatStatic;
    declare module.exports: typeof dateFormat
}