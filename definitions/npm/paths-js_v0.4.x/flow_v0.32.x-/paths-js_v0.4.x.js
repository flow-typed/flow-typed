// @flow
declare module "paths-js/all" {

  declare type Point = [number, number];

  declare class Path {
    constructor(): Path;
    points(): Array<Point>;
    connect(path: Path): Path;
    moveto(x: number, y: number): Path;
    lineto(x: number, y: number): Path;
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
  };

}
