/**
 * Flowtype definitions for makerjs
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'models' {
    declare class BezierCurve mixins IModel {
        models: MakerJs$IModelMap;
        paths: MakerJs$IPathMap;
        origin: MakerJs$IPoint;
        type: string;
        seed: MakerJs$IPathBezierSeed;
        accuracy: number;
        constructor(points: MakerJs$IPoint[], accuracy?: number): this;
        constructor(seed: MakerJs$IPathBezierSeed, accuracy?: number): this;
        constructor(seed: MakerJs$IPathBezierSeed, isChild: boolean, accuracy?: number): this;
        constructor(origin: MakerJs$IPoint, control: MakerJs$IPoint, end: MakerJs$IPoint, accuracy?: number): this;
        constructor(origin: MakerJs$IPoint, controls: MakerJs$IPoint[], end: MakerJs$IPoint, accuracy?: number): this;
        constructor(origin: MakerJs$IPoint, control1: MakerJs$IPoint, control2: MakerJs$IPoint, end: MakerJs$IPoint, accuracy?: number): this;
        typeName: string;
        getBezierSeeds(
            curve: BezierCurve,
            options?: MakerJs$IFindChainsOptions): MakerJs$IPathBezierSeed[];
        computePoint(seed: MakerJs$IPathBezierSeed, t: number): MakerJs$IPoint
    }
    declare class Ellipse mixins IModel {
        models: MakerJs$IModelMap;
        origin: MakerJs$IPoint;

        /**
         * Class for Ellipse created with 2 radii.
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(radiusX: number, radiusY: number, accuracy?: number): this;

        /**
         * Class for Ellipse created at a specific origin and 2 radii.
         * @param origin The center of the ellipse.
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(origin: MakerJs$IPoint, radiusX: number, radiusY: number, accuracy?: number): this;

        /**
         * Class for Ellipse created at a specific x, y and 2 radii.
         * @param cx The x coordinate of the center of the ellipse.
         * @param cy The y coordinate of the center of the ellipse.
         * @param rX The x radius of the ellipse.
         * @param rY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(cx: number, cy: number, rx: number, ry: number, accuracy?: number): this
    }
    declare class EllipticArc mixins IModel {
        models: MakerJs$IModelMap;

        /**
         * Class for Elliptic Arc created by distorting a circular arc.
         * @param arc The circular arc to use as the basis of the elliptic arc.
         * @param radiusX The x radius of the ellipse.
         * @param radiusY The y radius of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(startAngle: number, endAngle: number, radiusX: number, radiusY: number, accuracy?: number): this;

        /**
         * Class for Elliptic Arc created by distorting a circular arc.
         * @param arc The circular arc to use as the basis of the elliptic arc.
         * @param distortX The x scale of the ellipse.
         * @param distortY The y scale of the ellipse.
         * @param accuracy Optional accuracy of the underlying BezierCurve.
         */
        constructor(arc: MakerJs$IPathArc, distortX: number, distortY: number, accuracy?: number): this
    }
    declare class ConnectTheDots mixins IModel {
        paths: MakerJs$IPathMap;

        /**
         * Create a model by connecting points designated in a string. The model will be 'closed' - i.e. the last point will connect to the first point.
         * 
        Example:
        ```
        var c = new makerjs.models.ConnectTheDots('-10 0 10 0 0 20'); // 3 coordinates to form a triangle
        ```
         * @param numericList String containing a list of numbers which can be delimited by spaces, commas, or anything non-numeric (Note: [exponential notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toExponential) is allowed).
        */
        constructor(numericList: string): this;

        /**
         * Create a model by connecting points designated in a numeric array. The model will be 'closed' - i.e. the last point will connect to the first point.
         * 
        Example:
        ```
        var c = new makerjs.models.ConnectTheDots([-10, 0, 10, 0, 0, 20]); // 3 coordinates to form a triangle
        ```
         * @param coords Array of coordinates.
        */
        constructor(coords: number[]): this;

        /**
         * Create a model by connecting points designated in an array of points. The model may be closed, or left open.
         * 
        Example:
        ```
        var c = new makerjs.models.ConnectTheDots(false, [[-10, 0], [10, 0], [0, 20]]); // 3 coordinates left open
        ```
         * @param isClosed Flag to specify if last point should connect to the first point.
         * @param points Array of IPoints.
        */
        constructor(isClosed: boolean, points: MakerJs$IPoint[]): this
    }
    declare class Polygon mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(numberOfSides: number, radius: number, firstCornerAngleInDegrees?: number, circumscribed?: boolean): this;
        circumscribedRadius(radius: number, angleInRadians: number): number;
        getPoints(
            numberOfSides: number,
            radius: number,
            firstCornerAngleInDegrees?: number,
            circumscribed?: boolean): MakerJs$IPoint[]
    }
    declare class BoltCircle mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(boltRadius: number, holeRadius: number, boltCount: number, firstBoltAngleInDegrees?: number): this
    }
    declare class BoltRectangle mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(width: number, height: number, holeRadius: number): this
    }
    declare class Dome mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(width: number, height: number, radius?: number): this
    }
    declare class RoundRectangle mixins IModel {
        origin: MakerJs$IPoint;
        paths: MakerJs$IPathMap;

        /**
         * Create a round rectangle from width, height, and corner radius.
         * 
        Example:
        ```
        var r = new makerjs.models.RoundRectangle(100, 50, 5);
        ```
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
         * @param radius Corner radius.
        */
        constructor(width: number, height: number, radius: number): this;

        /**
         * Create a round rectangle which will surround a model.
         * 
        Example:
        ```
        var b = new makerjs.models.BoltRectangle(30, 20, 1); //draw a bolt rectangle so we have something to surround
        var r = new makerjs.models.RoundRectangle(b, 2.5);   //surround it
        ```
         * @param modelToSurround IModel object.
         * @param margin Distance from the model. This will also become the corner radius.
        */
        constructor(modelToSurround: MakerJs$IModel, margin: number): this
    }
    declare class Oval mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(width: number, height: number): this
    }
    declare class OvalArc mixins IModel {
        paths: MakerJs$IPathMap;
        models: MakerJs$IModelMap;
        constructor(startAngle: number, endAngle: number, sweepRadius: number, slotRadius: number, selfIntersect?: boolean, isolateCaps?: boolean): this
    }
    declare class Rectangle mixins IModel {
        paths: MakerJs$IPathMap;
        origin: MakerJs$IPoint;

        /**
         * Create a rectangle from width and height.
         * 
        Example:
        ```
        var r = new makerjs.models.Rectangle(100, 50);
        ```
         * @param width Width of the rectangle.
         * @param height Height of the rectangle.
        */
        constructor(width: number, height: number): this;

        /**
         * Create a rectangle which will surround a model.
         * 
        Example:
        ```
        var e = new makerjs.models.Ellipse(17, 10); // draw an ellipse so we have something to surround.
        var r = new makerjs.models.Rectangle(e, 3); // draws a rectangle surrounding the ellipse by 3 units.
        ```
         * @param modelToSurround IModel object.
         * @param margin Optional distance from the model.
        */
        constructor(modelToSurround: MakerJs$IModel, margin?: number): this;

        /**
         * Create a rectangle from a measurement.
         * 
        Example:
        ```
        var e = new makerjs.models.Ellipse(17, 10); // draw an ellipse so we have something to measure.
        var m = makerjs.measure.modelExtents(e);    // measure the ellipse.
        var r = new makerjs.models.Rectangle(m);    // draws a rectangle surrounding the ellipse.
        ```
         * @param measurement IMeasure object. See http://microsoft.github.io/maker.js/docs/api/modules/makerjs.measure.html#pathextents and http://microsoft.github.io/maker.js/docs/api/modules/makerjs.measure.html#modelextents to get measurements of paths and models.
        */
        constructor(measurement: MakerJs$IMeasure): this
    }
    declare class Ring mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(outerRadius: number, innerRadius: number): this
    }
    declare class SCurve mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(width: number, height: number): this
    }
    declare class Slot mixins IModel {
        paths: MakerJs$IPathMap;
        origin: MakerJs$IPoint;
        models: MakerJs$IModelMap;
        constructor(origin: MakerJs$IPoint, endPoint: MakerJs$IPoint, radius: number, isolateCaps?: boolean): this
    }
    declare class Square mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(side: number): this
    }
    declare class Star mixins IModel {
        paths: MakerJs$IPathMap;
        constructor(numberOfPoints: number, outerRadius: number, innerRadius?: number, skipPoints?: number): this;
        InnerRadiusRatio(numberOfPoints: number, skipPoints: number): number
    }
    declare class Text mixins IModel {
        models: MakerJs$IModelMap;
        constructor(font: opentypejs.Font, text: string, fontSize: number, combine?: boolean): this
    }
}
declare
var Bezier: typeof undefined;