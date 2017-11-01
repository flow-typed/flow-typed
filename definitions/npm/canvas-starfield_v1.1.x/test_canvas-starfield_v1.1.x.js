/* @flow */
import Starfield from "canvas-starfield";

const starfield = new Starfield({
  canvas: "#canvas-starfield",
  maxStars: 1000,
  vx: 0.5,
  vy: 0.5,
  maxRadius: 1,
  shootingStarInterval: 1
});

// $ExpectError
const invalidStarfield = new Starfield({
  canvas: 0,
  maxStars: "",
  vx: "",
  maxRadius: "",
  shootingStarInterval: ""
});

starfield.start();

// $ExpectError
starfield.start();
