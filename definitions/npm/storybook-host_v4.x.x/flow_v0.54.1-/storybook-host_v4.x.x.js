declare module 'storybook-host' {
  declare type Props = {|
    mobXDevTools?:boolean,
    title?:string,
    hr?:boolean,
    align?:string,
    height?:number | string,
    width?:number | string,
    background?:boolean | number | string,
    backdrop?:boolean | number | string,
    cropMarks?:boolean,
    border?:boolean | number | string,
    padding?:number | string
  |};

  declare export function host(props: Props): (
    story: () => React$Element<any>,
    context?: { kind: string, story: string }
  ) => React$Element<any>;
}
