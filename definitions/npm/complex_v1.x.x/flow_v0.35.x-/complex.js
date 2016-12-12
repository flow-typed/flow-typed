

declare module 'complex' {
				declare export default class Complex  {
		constructor(real: number, im: number): this;
		from(real: string): Complex;
		from(real: number, im?: number): Complex;
		fromPolar(r: number, phi: number): Complex;
		i: Complex;
		one: Complex;
		fromRect(real: number, im: number): Complex;
		fromPolar(r: number, phi: number): Complex;
		toPrecision(k: number): Complex;
		toFixed(k: number): Complex;
		finalize(): Complex;
		magnitude(): number;
		abs(): number;
		angle(): number;
		arg(): number;
		phase(): number;
		conjugate(): Complex;
		negate(): Complex;
		multiply(z: number | Complex): Complex;
		mult(z: number | Complex): Complex;
		divide(z: number | Complex): Complex;
		div(z: number | Complex): Complex;
		add(z: number | Complex): Complex;
		subtract(z: number | Complex): Complex;
		sub(z: number | Complex): Complex;
		pow(z: number | Complex): Complex;
		sqrt(): Complex;
		log(k?: number): Complex;
		exp(): Complex;
		sin(): Complex;
		cos(): Complex;
		tan(): Complex;
		sinh(): Complex;
		cosh(): Complex;
		tanh(): Complex;
		clone(): Complex;
		toString(): string;
		equals(z: number | Complex): boolean
	}

	
}