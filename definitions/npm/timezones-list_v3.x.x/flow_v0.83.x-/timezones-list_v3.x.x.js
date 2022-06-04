declare module 'timezones-list' {
  declare type TimeZone = {|
    label: string;
    tzCode: string;
    name: string;
    utc: string;
  |};

  declare module.exports: Array<TimeZone>;
}
