

declare module 'backbone-associations' {
					
}

declare module 'Associations' {
		declare interface IRelation {
		relatedModel: string | typeof undefined,
		key: string,
		type: string,
		collectionType?: typeof undefined | string,
		isTransient?: boolean,
		remoteKey?: string,
		serialize?: string[],
		map?: (...args: any[]) => any
	}

	declare export function getSeparator(): any

	declare export function setSeparator(value: any): void

	declare export class AssociatedModel extends Backbone$Model {
		relations: IRelation[];
		_proxyCalls: any;
		parents: any[];
		cleanup(): void
	}

	
}

declare module 'npm$namespace$Backbone' {
				declare export class AssociatedModel extends Backbone$Model {
		relations: Associations.IRelation[];
		_proxyCalls: any;
		parents: any[];
		cleanup(): void
	}

	
}