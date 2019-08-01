/* @flow */
import Starfield from "canvas-starfield";

const starfield = new Starfield({
  canvas: "#canvas-starfield",
  vx: 0.5,
  vy: 0.5,
  maxRadius: 1,
  maxStars: 1000,
  shootingStarInterval: 1
});

const starfield2 = new Starfield({
  canvas: "#canvas-starfield"
});

const invalidStarfield = new Starfield({
  // $ExpectError
  canvas: 0,
  // $ExpectError
  vx: "",
  // $ExpectError
  vy: "",
  // $ExpectError
  maxRadius: "",
  // $ExpectError
  maxStars: "",
  // $ExpectError
  shootingStarInterval: ""
});

starfield.start();

// $ExpectError
starfield.start("a");
