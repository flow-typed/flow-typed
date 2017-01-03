// @flow
/**
 * Flowtype definitions for cheap-ruler
 * Generated by Flowgen from a Typescript Definition
 * Flowgen v1.0.0
 * Author: [Joar Wilk](http://twitter.com/joarwilk)
 * Repo: http://github.com/joarwilk/flowgen
 */

declare module 'cheap-ruler' {
    declare type BBox = [number, number, number, number] | number[];
    declare type Point = [number, number] | number[];
    declare type Line = Array<Point>;
    declare type Points = Array<Point>;
    declare type Polygon = Array<Array<Point >> ;
    declare interface TemplateUnits {
        kilometers: number,
            miles: number,
            nauticalmiles: number,
            meters: number,
            metres: number,
            yards: number,
            feet: number,
            inches: number
    }
    declare interface InterfacePointOnLine {
        point: Point,
            index: number,
            t: number
    }
    declare class CheapRuler {

        /**
         * Given two points of the form [longitude, latitude], returns the distance.
         * @param  point [longitude, latitude]
         * @param  point [longitude, latitude]
         * @returns  distance
         * @example  * var distance = ruler.distance([30.5, 50.5], [30.51, 50.49]);
        //=distance
        */
        distance(a: Point, b: Point): number;

        /**
         * Returns the bearing between two points in angles.
         * @param  point [longitude, latitude]
         * @param  point [longitude, latitude]
         * @returns  bearing
         * @example  * var bearing = ruler.bearing([30.5, 50.5], [30.51, 50.49]);
        //=bearing
        */
        bearing(a: Point, b: Point): number;

        /**
         * Returns a new point given distance and bearing from the starting point.
         * @param  point [longitude, latitude]
         * @param  distance
         * @param  
         * @returns  point [longitude, latitude]
         * @example  * var point = ruler.destination([30.5, 50.5], 0.1, 90);
        //=point
        */
        destination(p: Point, dist: number, bearing: number): Point;

        /**
         * Given a line (an array of points), returns the total line distance.
         * @param  [longitude, latitude]
         * @returns  total line distance
         * @example  * var length = ruler.lineDistance([
        [-67.031, 50.458], [-67.031, 50.534],
        [-66.929, 50.534], [-66.929, 50.458]
        ]);
        //=length
        */
        lineDistance(points: Points): number;

        /**
         * Given a polygon (an array of rings, where each ring is an array of points), returns the area.
         * @param  
         * @returns  area value in the specified units (square kilometers by default)
         * @example  * var area = ruler.area([[
        [-67.031, 50.458], [-67.031, 50.534], [-66.929, 50.534],
        [-66.929, 50.458], [-67.031, 50.458]
        ]]);
        //=area
        */
        area(polygon: Polygon): number;

        /**
         * Returns the point at a specified distance along the line.
         * @param  
         * @param  distance
         * @returns  point [longitude, latitude]
         * @example  * var point = ruler.along(line, 2.5);
        //=point
        */
        along(line: Line, dist: number): Point;

        /**
         * Returns an object of the form {point, index} where point is closest point on the line from the given point, and index is the start index of the segment with the closest point.
         * @pointOnLine  * 
         * @param  
         * @param  point [longitude, latitude]
         * @returns  {point, index}
         * @example  * var point = ruler.pointOnLine(line, [-67.04, 50.5]).point;
        //=point
        */
        pointOnLine(line: Line, p: Point): InterfacePointOnLine;

        /**
         * Returns a part of the given line between the start and the stop points (or their closest points on the line).
         * @param  point [longitude, latitude]
         * @param  point [longitude, latitude]
         * @param  
         * @returns  line part of a line
         * @example  * var line2 = ruler.lineSlice([-67.04, 50.5], [-67.05, 50.56], line1);
        //=line2
        */
        lineSlice(start: Point, stop: Point, line: Line): Line;

        /**
         * Returns a part of the given line between the start and the stop points indicated by distance along the line.
         * @param  distance
         * @param  distance
         * @param  
         * @returns  line part of a line
         * @example  * var line2 = ruler.lineSliceAlong(10, 20, line1);
        //=line2
        */
        lineSliceAlong(start: number, stop: number, line: Line): Line;

        /**
         * Given a point, returns a bounding box object ([w, s, e, n]) created from the given point buffered by a given distance.
         * @param  point [longitude, latitude]
         * @param  
         * @returns  box object ([w, s, e, n])
         * @example  * var bbox = ruler.bufferPoint([30.5, 50.5], 0.01);
        //=bbox
        */
        bufferPoint(p: Point, buffer: number): BBox;

        /**
         * Given a bounding box, returns the box buffered by a given distance.
         * @param  object ([w, s, e, n])
         * @param  
         * @returns  box object ([w, s, e, n])
         * @example  * var bbox = ruler.bufferBBox([30.5, 50.5, 31, 51], 0.2);
        //=bbox
        */
        bufferBBox(bbox: BBox, buffer: number): BBox;

        /**
         * Returns true if the given point is inside in the given bounding box, otherwise false.
         * @param  point [longitude, latitude]
         * @param  object ([w, s, e, n])
         * @returns  * 
         * @example  * var inside = ruler.insideBBox([30.5, 50.5], [30, 50, 31, 51]);
        //=inside
        */
        insideBBox(p: Point, bbox: BBox): boolean
    }
    declare module.exports: typeof cheapRuler

    declare     var npm$namespace$cheapRuler: {
        fromTile: typeof cheapRuler$fromTile,
    }
    declare     var units: TemplateUnits;


    /**
     * Creates a ruler object from tile coordinates (y and z). Convenient in tile-reduce scripts.
     * @param  
     * @param  
     * @param  * 
     * @returns  * 
     * @example  * var ruler = cheapRuler.fromTile(1567, 12);
    //=ruler
    */
    declare     function cheapRuler$fromTile(y: number, z: number, units?: string): CheapRuler
}