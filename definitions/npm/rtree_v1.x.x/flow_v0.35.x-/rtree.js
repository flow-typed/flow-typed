

declare module 'rtree' {
		declare interface Rectangle {
		x: number,
		y: number,
		w: number,
		h: number
	}

	declare interface RTreeStatic {
		insert(bounds: Rectangle, element: Object): boolean,
		remove(area: Rectangle, element?: Object): any[],
		geoJSON(geoJSON: any): void,
		bbox(arg1: any, arg2?: any, arg3?: number, arg4?: number): any[],
		search(area: Rectangle, return_node?: boolean, return_array?: any[]): any[]
	}

	declare interface RTreeFactory {
		(max_node_width?: number): RTreeStatic
	}

			
}