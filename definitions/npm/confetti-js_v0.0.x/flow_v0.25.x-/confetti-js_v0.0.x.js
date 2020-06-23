declare module 'confetti-js' {
  declare type SvgProp = {|
    type: string,
    src: string,
    size?: string | number,
    weight?: string | number,
  |};

  declare type settings = {|
    target: string,
    max?: number,
    size?: number,
    animate?: boolean,
    respawn?: boolean,
    clock?: number,
    props?: Array<'circle' | 'square' | 'triangle' | 'line' | SvgProp>,
    colors?: Array<Array<number>>,
    start_from_edge?: boolean,
    width?: number,
    height?: number,
    rotate?: boolean,
  |};

  declare type Confetti = {|
    render: () => ((callback: (timestamp: number) => void) => number);
    clear: () => void;
  |}

  declare module.exports: (settings) => Confetti;
}
