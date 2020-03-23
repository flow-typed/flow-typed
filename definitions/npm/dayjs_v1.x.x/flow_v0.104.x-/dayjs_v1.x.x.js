declare module 'dayjs' {
  declare type OpUnitType = UnitType | "week" | 'w';
  declare type QUnitType = UnitType | "quarter" | 'Q';

  declare export class Dayjs {
    constructor (config?: ConfigType): this;
    clone(): Dayjs;
    isValid(): boolean;
    year(): number;
    year(value: number): Dayjs;
    month(): number;
    month(value: number): Dayjs;
    date(): number;
    date(value: number): Dayjs;
    day(): number;
    day(value: number): Dayjs;
    hour(): number;
    hour(value: number): Dayjs;
    minute(): number;
    minute(value: number): Dayjs;
    second(): number;
    second(value: number): Dayjs;
    millisecond(): number;
    millisecond(value: number): Dayjs;
    set(unit: UnitType, value: number): Dayjs;
    get(unit: UnitType): number;
    add(value: number, unit: OpUnitType): Dayjs;
    subtract(value: number, unit: OpUnitType): Dayjs;
    startOf(unit: OpUnitType): Dayjs;
    endOf(unit: OpUnitType): Dayjs;
    format(template?: string): string;
    diff(date: ConfigType, unit?: QUnitType | OpUnitType, float?: boolean): number;
    valueOf(): number;
    unix(): number;
    unix(t: number): Dayjs;
    daysInMonth(): number;
    toDate(): Date;
    toJSON(): string;
    toISOString(): string;
    toString(): string;
    utcOffset(): number;
    isBefore(date: ConfigType, unit?: OpUnitType): boolean;
    isSame(date: ConfigType, unit?: OpUnitType): boolean;
    isAfter(date: ConfigType, unit?: OpUnitType): boolean;
    locale(): string;
    locale(preset: string | { name: string, ... }, object?: { ... }): Dayjs;
    extend(plugin: PluginFunc, option?: any): Dayjs;

  }

  declare export type ConfigType = string | number | Date | Dayjs;
  declare export type OptionType = {| locale?: string, format?: string, utc?: boolean |} | string;
  declare export type UnitTypeShort = 'd' | 'M' | 'y' | 'h' | 'm' | 's' | 'ms';
  declare export type UnitType = 'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'date' | UnitTypeShort;

  declare type PluginFunc = (option: any, c: typeof Dayjs, d: typeof dayjs) => void;
  declare function extend(plugin: PluginFunc, option?: any): Dayjs;
  declare function locale(preset: string | { name: string, ... }, object?: { ... }, isLocal?: boolean): string;
  declare function isDayjs(d: any): boolean;
  declare function unix(t: number): Dayjs;
  declare var Ls: { ... }

  declare var NamespaceDayjs: {|
    (date?: ConfigType, option?: OptionType, locale?: string): Dayjs,
    extend: typeof extend,
    locale: typeof locale,
    isDayjs: typeof isDayjs,
    unix: typeof unix,
    Ls: typeof Ls,
    Dayjs: typeof Dayjs
  |};

  declare var dayjs: typeof NamespaceDayjs;

  declare export default typeof dayjs
}
