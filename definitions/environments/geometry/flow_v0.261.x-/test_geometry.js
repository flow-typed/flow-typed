// @flow

let matrixA = new DOMMatrix();

matrixA.m11 = 5;
matrixA.m12 = 6;
matrixA.m13 = 7;
matrixA.m14 = 8;

matrixA.m21 = 0;
matrixA.m22 = 0;
matrixA.m23 = 0;
matrixA.m24 = 0;

matrixA.m31 = 1;
matrixA.m32 = 1;
matrixA.m33 = 1;
matrixA.m34 = 1;

matrixA.m41 = -5;
matrixA.m42 = -6;
matrixA.m43 = -7;
matrixA.m44 = -8;

// $FlowExpectedError[prop-missing]
matrixA.m51;

matrixA = matrixA.flipX();
matrixA = matrixA.multiply({
  is2D: true,
  a: 2,
  b: 2,
  c: 2,
  d: 2,
  e: 2,
  f: 2,
});
matrixA = matrixA.translateSelf(1.0, 2.0, 3.0);

// $FlowExpectedError[incompatible-call]
matrixA = matrixA.multiply({
  is2D: false,
  a: 2,
  b: 2,
  c: 2,
  d: 2,
  e: 2,
  f: 2,
});

matrixA = DOMMatrix.fromFloat32Array(matrixA.toFloat32Array());

let matrixB = new DOMMatrixReadOnly([5, 6, 7, 8, 0, 0]);
// $FlowExpectedError[cannot-write]
matrixB.a = 5;

let pointA = new DOMPoint();
pointA.w = 0;
pointA.x = 0;
pointA.y = 0;
pointA.z = 0;

pointA = pointA.matrixTransform({
  is2D: true,
  a: 2,
  b: 2,
  c: 2,
  d: 2,
  e: 2,
  f: 2,
});

let pointB = new DOMPointReadOnly(0, 0, 0, 0);
// $FlowExpectedError[cannot-write]
pointB.w = 5;

let pointInit = {
  w: 1.0,
  x: 1.0,
  y: 1.0,
  z: 1.0,
};

let quadA = new DOMQuad(pointInit, pointInit, pointInit, pointInit);
quadA.p1.toJSON();

let rectA = quadA.getBounds();
rectA.x = 1;
rectA.y = 2;
rectA.height = 3;
rectA.width = 4;

// $FlowExpectedError[cannot-write]
rectA.bottom = 5;

// $FlowExpectedError[prop-missing]
rectA.back;
