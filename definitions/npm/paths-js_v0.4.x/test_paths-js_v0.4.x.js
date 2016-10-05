// @flow
import type { Point } from 'paths-js/all';
import { Path } from 'paths-js/all';
import { Rectangle } from 'paths-js/all';
import { CurvedRectangle } from 'paths-js/all';
import { Polygon } from 'paths-js/all';
import { SemiRegularPolygon } from 'paths-js/all';
import { Bezier } from 'paths-js/all';
import { Sector } from 'paths-js/all';
import { Connector } from 'paths-js/all';
import { Bar } from 'paths-js/all';

const p1: Point = [2, 3];
const p2: Point = [2, 6];
const p3: Point = [5, 3];
const p4: Point = [5, 6];

// $ExpectError
const _p: Point = 0;

const path: Path = new Path();

const path1: Path = path.moveto(1, 2);

const str: string = path1.print();

// $ExpectError
const x: Path = path.moveto('a', 2);

const r1: Rectangle = new Rectangle(p1, p2, p3, p4);

const cr1: CurvedRectangle = new CurvedRectangle(p1, p2, p3, p4);

// $ExpectError
const _r: Rectangle = new Rectangle(1,2,3,5);

const poly: Polygon = new Polygon([p1, p2, p3, p4], true);

const _poly: Polygon = new Polygon([p1, p2, p3, p4]);

const srp: SemiRegularPolygon = new SemiRegularPolygon(p1, [9.0, 2.3, 4.0]);

const b: Bezier = new Bezier([p1, p2, p3, p4], 2.0);

const sec: Sector = new Sector(p1, 5, 15, 0, (Math.PI / 2));

const conn: Connector = new Connector(p1, p2, 3.4);

// $ExpectError
const _conn: Connector = new Connector(p1, p2);

type Country = {
  name: string,
  population: number,
};

const data: Array<Array<Country>> =[
    [
      { name: 'Italy', population: 59859996 },
      { name: 'Spain', population: 46704314 },
      { name: 'France', population: 65806000 },
      { name: 'Romania', population: 20121641 },
      { name: 'Greece', population: 10815197 }
    ],
    [
      { name: 'Zambia', population: 14580290 },
      { name: 'Cameroon', population: 20386799 },
      { name: 'Nigeria', population: 173615000 },
      { name: 'Ethiopia', population: 86613986 },
      { name: 'Ghana', population: 24658823 }
    ]
  ];

function accessor(c: Country) { return c.population; };

const barOptions = {data: data, accessor: accessor, width: 1, height: 2, max: 3, min: 4, gutter: 5};

const barOptions1 = {data: data, width: 1, height: 2, max: 3, min: 4}; // no accessor, no gutter

const bar: Bar<Country> = new Bar(barOptions);
const bar1: Bar<Country> = new Bar(barOptions1);

// $ExpectError
const _bar: Bar<number> = new Bar(data, accessor, 2, 4, 1);
