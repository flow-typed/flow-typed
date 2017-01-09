declare module "paths-js/all" {

  declare type Point = [number, number];

  declare class Path {
    constructor(): Path;
    points(): Array<Point>;
    connect(path: Path): Path;
    moveto(p: Point): Path;
    lineto(p: Point): Path;
    hlineto(x: number): Path;
    vlineto(y: number): Path;
    curveto(x1: number, y1: number, x2: number, y2: number, x: number, y: number): Path;
    smoothcurveto(x2: number, y2: number, x: number, y: number): Path;
    qcurveto(x1: number, y1: number, x: number, y: number): Path;
    smoothqcurveto(x: number, y: number): Path;
    arc(rx: number, ry: number, xrot: number, largeArcFlag: number, sweepFlag: number, x: number, y: number): Path;
    closepath(): Path;
    print(): string;
  }

  declare class Shape {
    path: Path;
    centroid: Point;
  }

  declare class Polygon extends Shape {
    constructor(points: Array<Point>, closed?: boolean): Polygon;
  }

  declare class SemiRegularPolygon extends Shape {
    constructor(point: Point, radii: Array<number>): SemiRegularPolygon;
  }

  declare class Rectangle extends Shape {
    constructor(left: Point, right: Point, top: Point, bottom: Point): Rectangle;
  }

  declare class CurvedRectangle extends Shape {
    constructor(topleft: Point, topright: Point, bottomleft: Point, bottomright: Point): CurvedRectangle;
  }

  declare class Bezier extends Shape {
    constructor(points: Array<Point>, tension: number): Bezier;
  }

  declare class Sector extends Shape {
    constructor(center: Point, r: number, R: number, start: number, end: number): Sector;
  }

  declare class Connector extends Shape {
    constructor(start: Point, end: Point, tension: number): Connector;
  }

  declare class Bar<A> {
    constructor(options:
      {| data: Array<Array<A>>,
        accessor?: (a: A) => number,
        width: number,
        height: number,
        max: number,
        min: number,
        gutter?: number |}): Bar<A>;
  }

  declare class Pie<A> {
    constructor(options:
      {| data: Array<A>,
        accessor?: (a: A) => number,
        center: Point,
        r: number,
        R: number |}): Pie<A>;
  }

  declare type RadarOptions<A> = { data: Array<A>,
    accessor?: { [key: string]: Function },
    max: number,
    center: Point,
    r: number,
    rings: number
  };

  declare class Radar<A> { constructor(options: RadarOptions<A>): Radar<A> }

  declare class Stock<A> {
    constructor(options:
      {| data: Array<A>,
        xaccessor: (a: A) => number,
        yaccessor: (a: A) => number,
        width: number,
        height: number,
        min: number,
        max: number,
        close: boolean |}): Stock<A>;
  }

  declare class SmoothLine<A> {
    constructor(options:
      {| data: Array<A>,
        xaccessor: (a: A) => number,
        yaccessor: (a: A) => number,
        width: number,
        height: number,
        min: number,
        max: number,
        close: boolean |}): SmoothLine<A>;
  }

  declare class Tree<A> {
    constructor(options:
      {| data: A,
        children: (a: A) => Array<A>,
        width: number,
        height: number |}): Tree<A>;
  }

  declare class Waterfall<A> {
    constructor(options:
      {| data: Array<A>,
        children: (a: A) => Array<A>,
        width: number,
        height: number,
        gutter: number |}): Waterfall<A>;
  }

  declare class Sankey<A> {
    constructor(options:
      {| data: Array<A>,
        children: (a: A) => Array<A>,
        width: number,
        height: number,
        gutter: number |}): Sankey<A>;
  }

  declare type Range = [number, number];

  declare class Voronoi<A> {
    constructor(options:
      {| data: A,
        accessor: (a: A) => A,
        xrange: Range,
        yrange: Range,
        width: number,
        height: number |}): Voronoi<A>;
  }

  declare module.exports: {
    Point: Point,
    Path: typeof Path,
    Polygon: typeof Polygon,
    Rectangle: typeof Rectangle,
    CurvedRectangle: typeof CurvedRectangle,
    Bezier: typeof Bezier,
    Sector: typeof Sector,
    Connector: typeof Connector,
    SemiRegularPolygon: typeof SemiRegularPolygon,
    Bar: typeof Bar,
    Pie: typeof Pie,
    Radar: typeof Radar,
    Stock: typeof Stock,
    SmoothLine: typeof SmoothLine,
    Tree: typeof Tree,
    Waterfall: typeof Waterfall,
    Sankey: typeof Sankey,
    Voronoi: typeof Voronoi
  };

}
