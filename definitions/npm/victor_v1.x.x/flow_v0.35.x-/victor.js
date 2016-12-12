

declare module 'victor' {
		declare interface VictorCoordinates {
		x: number,
		y: number
	}

		declare class Victor  {
		x: number;
		y: number;
		constructor(x: number, y: number): this;
		fromArray(arr: Array<number>): Victor;
		fromObject(obj: VictorCoordinates): Victor;
		clone(): Victor;
		copyX(vector: Victor): Victor;
		copyY(vector: Victor): Victor;
		copy(vector: Victor): Victor;
		toString(): string;
		toArray(): Array<number>;
		toObject(): VictorCoordinates;
		addX(vector: Victor): Victor;
		addY(vector: Victor): Victor;
		add(vector: Victor): Victor;
		subtractX(vector: Victor): Victor;
		subtractY(vector: Victor): Victor;
		subtract(vector: Victor): Victor;
		multiplyX(vector: Victor): Victor;
		multiplyY(vector: Victor): Victor;
		multiply(vector: Victor): Victor;
		multiplyScalar(scalar: number): Victor;
		multiplyScalarX(scalar: number): Victor;
		multiplyScalarY(scalar: number): Victor;
		divideX(vector: Victor): Victor;
		divideY(vector: Victor): Victor;
		divide(scalar: Victor): Victor;
		invertX(): Victor;
		invertY(): Victor;
		invert(): Victor;
		mixX(vector: Victor, ammount: number): Victor;
		mixY(vector: Victor, ammount: number): Victor;
		mix(vector: Victor, ammount: number): Victor;
		normalize(): Victor;
		norm(): Victor;
		limit(max: number, multiplier: number): Victor;
		unfloat(): Victor;
		rotate(angle: number): Victor;
		rotateDeg(angle: number): Victor;
		rotateBy(rotation: number): Victor;
		rotateByDeg(rotation: number): Victor;
		randomizeX(topLeft: Victor, bottomRight: Victor): Victor;
		randomizeY(topLeft: Victor, bottomRight: Victor): Victor;
		randomize(topLeft: Victor, bottomRight: Victor): Victor;
		randomizeAny(topLeft: Victor, bottomRight: Victor): Victor;
		dot(vector: Victor): number;
		cross(vector: Victor): number;
		length(): number;
		magnitude(): number;
		lengthSq(): number;
		distanceX(vector: Victor): number;
		absDistanceX(vector: Victor): number;
		distanceY(vector: Victor): number;
		absDistanceY(vector: Victor): number;
		distance(vector: Victor): number;
		distanceSq(vector: Victor): number;
		horizontalAngle(): number;
		angle(): number;
		direction(): number;
		horizontalAngleDeg(): number;
		angleDeg(): number;
		verticalAngle(): number;
		verticalAngleDeg(): number
	}

	declare module.exports: undefined


}