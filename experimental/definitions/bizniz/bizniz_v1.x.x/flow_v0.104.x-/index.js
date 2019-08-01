declare module 'bizniz' {
  declare class Bizniz {
    constructor(): Bizniz;
    toString(): string;
    static isWeekDay(date: Date): boolean,
    static isWeekendDay(date: Date): boolean,
    static weekDaysBetween(startDate:Date, endDate:Date): number,
    static weekendDaysBetween(startDate:Date, endDate:Date): number,
    static addWeekDays(date: Date, days:number): Date,
    static subtractWeekDays(date: Date, days:number): Date,
    static dateIsBefore(startDate: Date, endDate: Date): boolean,
    static daysBetween(startDate: Date, endDate:Date): number,
    static addDays(date: Date, days: number): Date
  }
  declare export default typeof Bizniz;
}
