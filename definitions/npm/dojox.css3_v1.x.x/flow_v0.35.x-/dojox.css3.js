

declare module 'dojox.css3' {
					
}

declare module 'css3' {
		declare interface transit {
		(from: HTMLElement, to: HTMLElement, options?: Object): void
	}

	declare interface transition {
		(args?: Object): void
	}

	declare interface fx {
		bounce(args: Object): any,
		expand(args: Object): any,
		flip(args: Object): any,
		puff(args: Object): any,
		rotate(args: Object): any,
		shrink(args: Object): any
	}

			
}

declare module 'transition' {
		declare interface beforeClear {
		(): void
	}

	declare interface beforeStart {
		(): void
	}

	declare interface chainedPlay {
		(args: any[]): void
	}

	declare interface clear {
		(): void
	}

	declare interface fade {
		(node: any, config: any): void
	}

	declare interface flip {
		(node: any, config: any): void
	}

	declare interface getWaitingList {
		(nodes: any[]): any
	}

	declare interface groupedPlay {
		(args: any[]): any
	}

	declare interface initState {
		(): void
	}

	declare interface play {
		(): void
	}

	declare interface slide {
		(node: any, config: any): void
	}

	declare interface start {
		(): void
	}

	declare interface endState {
		
	}

	declare interface startState {
		
	}

	declare interface playing {
		
	}

			
}

declare module 'dojox/css3/transit' {
					declare module.exports: transit


}

declare module 'dojox/css3/transition' {
					declare module.exports: transition


}

declare module 'dojox/css3/transition.endState' {
					declare module.exports: endState


}

declare module 'dojox/css3/transition.playing' {
					declare module.exports: playing


}

declare module 'dojox/css3/transition.startState' {
					declare module.exports: startState


}

declare module 'dojox/css3/fx' {
					declare module.exports: fx


}