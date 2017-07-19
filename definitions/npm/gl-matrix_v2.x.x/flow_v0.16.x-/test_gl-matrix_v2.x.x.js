// @flow
import { vec2, vec3, vec4, quat, mat2, mat2d, mat3, mat4 } from 'gl-matrix';
import type {
  Vec2,
  Vec3,
  Vec4,
  Quat,
  Mat2,
  Mat2d,
  Mat3,
  Mat4
} from 'gl-matrix';

{
  const a = vec2.create();
  const b = vec2.create();
  const c = vec2.create();

  const d1: Vec2 = vec2.add(a, b, c);

  // $ExpectError
  const d2: Vec2 = vec2.add(a, b);

  // $ExpectError
  const d3: number = vec2.add(a, b, c);
}

{
  const a = vec3.create();
  const b = vec3.create();
  const c = vec3.create();

  const d1: Vec3 = vec3.add(a, b, c);

  // $ExpectError
  const d2: Vec3 = vec3.add(a, b);

  // $ExpectError
  const d3: number = vec3.add(a, b, c);

  vec3.forEach([a, b, c], 1, 0, 1, vec3.length);

  vec3.forEach([a, b, c], 1, 0, 1, vec3.distance, c);

  vec3.forEach([a, b, c], 1, 0, 1, a => null);

  vec3.forEach([a, b, c], 1, 0, 1, (a, b: number) => null, 10);

  vec3.forEach([a, b, c], 1, 0, 1, a => undefined);

  // $ExpectError
  vec3.forEach([a, b, c], 1, 0, 1, (a: number) => 0, c);

  const f1: Array<Vec2> = vec3.forEach(
    [a, b, c],
    1,
    0,
    1,
    (a: Vec3, b: number): Vec2 => vec2.create(),
    12
  );

  // $ExpectError
  const f2: Array<number> = vec3.forEach(
    [a, b, c],
    1,
    0,
    1,
    (a: Vec3, b: number): Vec2 => vec2.create(),
    12
  );
}

{
  const a = mat4.create();
  const b = mat4.create();
  const c = mat4.create();

  mat4.identity(b);
  mat4.fromXRotation(c, 1.404);

  const c1: Mat4 = mat4.mul(a, b, c);

  // $ExpectError
  const c1: Mat4 = mat4.mul(a, b);

  // $ExpectError
  const c1: number = mat4.mul(a, b, c);
}
