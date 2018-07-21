declare module "@storybook/addon-knobs/react" {
  declare type Renderable = React$Element<any>;
  declare type GroupId = string;

  declare function array<T>(string, (Array<mixed> | {}), ?string, ?GroupId): Array<string>;
  declare function boolean(string, boolean, ?GroupId): boolean;
  declare function button(string, ((?{}) => void), ?GroupId): void;
  declare function color(string, string, ?GroupId): string;
  declare function date(string, Date, ?GroupId): number;
  declare function number(string, number, ?{ range?: boolean, min?: number, max?: number, step?: number }, ?GroupId): number;
  declare function object(string, any, ?GroupId): any;
  declare function select<T>(string, Array<T> | { [T]: string }, T, ?GroupId): T;
  declare function selectV2<T>(string, Array<T> | { [string]: T }, T, ?GroupId): T;
  declare function text(string, string, ?GroupId): string;
  declare function withKnobs(() => Renderable, { kind: string, story: string }): Renderable;
}
