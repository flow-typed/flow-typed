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
  // $FlowExpectedError
  canvas: 0,
  // $FlowExpectedError
  vx: "",
  // $FlowExpectedError
  vy: "",
  // $FlowExpectedError
  maxRadius: "",
  // $FlowExpectedError
  maxStars: "",
  // $FlowExpectedError
  shootingStarInterval: ""
});

starfield.start();

// $FlowExpectedError
starfield.start("a");
