type npm$chartist$Axis = {
  offset?: number,
  position?: string,
  labelOffset: ?{
    x: number,
    y: number,
  },
  showLabel?: bool,
  showGrid?: bool,
  labelInterpolationFunc?: Function,
  scaleMinSpace?: number,
  onlyInteger?: bool,
}

type npm$chartist$BarOptions = {
  axisX?: npm$chartist$Axis,
  axiyY?: npm$chartist$Axis,
  width?: string,
  height?: string,
  high?: any,
  low?: any,
  onlyInteger?: bool,
  chartPadding?: {
    top?: number,
    right?: number,
    bottom?: number,
    left?: number,
  },
  seriesBarDistance?: number,
  stackBars?: bool,
  stackMode?: string,
  horizontalBars?: bool,
  distributeSeries?: bool,
  reverseData?: bool,
  classNames?: {
    chart?: string,
    horizontalBars?: string,
    label?: string,
    labelGroup?: string,
    series?: string,
    bar?: string,
    grid?: string,
    gridGroup?: string,
    vertical?: string,
    horizontal?: string,
    start?: string,
    end?: string,
  },
}
type npm$chartist$PieOptions = {
  width?: string,
  height?: string,
  chartPadding?: number|{
    top?: number,
    left?: number,
    right?: number,
    bottom?: number,
  },
  classNames?: {
    chartPie?: string,
    chartDonus?: string,
    series?: string,
    slicePie?: string,
    sliceDonue?: string,
    label?: string,
  },
  startAnge?: number,
  total?: number,
  donut?: bool,
  donutWidth?: number,
  showLabel?: bool,
  labelOffset?: number,
  labelPosition?: 'inside'|'outside'|'center',
  labelInterpolationFnc?: Function,
  labelDirection?: 'neutral'|'explode'|'implose',
  reverseData?: bool,
}

declare module 'chartist' {
  declare class Bar {
    static defaultOptions: npm$chartist$BarOptions;
    static (query: string|Node, data: Object, options?: npm$chartist$BarOptions, responsiveOptions?: Array<any>): Bar;
  }
  declare class Pie {
    static defaultOptions: npm$chartist$PieOptions;
    static (query: string|Node, data: Object, options?: npm$chartist$PieOptions, responsiveOptions?: Array<any>): Pie;
  }
}
