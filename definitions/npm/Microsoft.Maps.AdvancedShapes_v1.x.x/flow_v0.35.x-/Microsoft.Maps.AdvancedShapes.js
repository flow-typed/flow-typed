

declare module 'Microsoft.Maps.AdvancedShapes' {
					
}

declare module 'AdvancedShapes' {
				declare export class EntityCollection  {
		constructor(options?: EntityCollectionOptions): this;
		clear(): void;
		get(index: number): Entity;
		getLength(): number;
		getVisible(): boolean;
		getZIndex(): number;
		indexOf(entity: Entity): number;
		insert(entity: Entity, index: number): void;
		pop(): Entity;
		push(entity: Entity): void;
		remove(entity: Entity): Entity;
		removeAt(index: number): Entity;
		setOptions(options: EntityCollectionOptions): void;
		toString(): string
	}

	declare export class Polygon extends Entity {
		constructor(locations: Array<Location>, options?: PolygonOptions): this;
		getFillColor(): Color;
		getLocations(): Array<Location>;
		getStrokeColor(): Color;
		getStrokeDashArray(): string;
		getStrokeThickness(): number;
		getVisible(): boolean;
		setLocations(locations: Location[]): void;
		setOptions(options: PolylineOptions): void;
		toString(): string
	}

	
}