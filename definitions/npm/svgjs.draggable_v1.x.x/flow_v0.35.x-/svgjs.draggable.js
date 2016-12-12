

declare module 'svgjs.draggable' {
					
}

declare module 'draggable' {
		declare export interface DragDelta {
		x: number,
		y: number,
		zoom: number
	}

			
}

declare module 'npm$namespace$svgjs' {
		declare export interface Element {
		draggable(): this,
		draggable(obj: Object): this,
		fixed(): this,
		beforedrag: (event: MouseEvent) => any,
		dragstart: (delta: draggable.DragDelta, event: MouseEvent) => any,
		dragmove: (delta: draggable.DragDelta, event: MouseEvent) => any,
		dragend: (delta: draggable.DragDelta, event: MouseEvent) => any
	}

			
}