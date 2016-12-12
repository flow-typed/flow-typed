import type { IRBush } from 'npm$namespace$rbush'

declare module 'rbush' {
					declare module.exports: IRBush


}

declare module 'npm$namespace$rbush' {
		declare export interface BBox {
		minX: number,
		minY: number,
		maxX: number,
		maxY: number
	}

	declare export interface RBush<T> {
		insert(item: T): RBush<T>,
		load(items: T[]): RBush<T>,
		remove(item: T, equals?: (a: T, b: T) => boolean): RBush<T>,
		clear(): RBush<T>,
		search(bbox: BBox): T[],
		all(): T[],
		collides(bbox: BBox): boolean,
		toJSON(): any,
		fromJSON(data: any): RBush<T>
	}

	declare interface IRBush {
		(nodeSize?: number): RBush<T>,
		(nodeSize: number, formatter: string[]): RBush<T>
	}

			
}