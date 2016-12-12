

declare module 'gamequery' {
		declare interface PlaygroundOptions {
		height?: number,
		width?: number,
		refreshRate?: number,
		keyTracker?: boolean,
		mouseTracker?: boolean,
		position?: string,
		disableCollision?: boolean
	}

	declare interface Coordinate3D {
		x: number,
		y: number,
		z: number
	}

	declare interface Size {
		w: number,
		h: number
	}

	declare interface SpriteOptions {
		animation?: any,
		height?: number,
		width?: number,
		posx?: number,
		posy?: number,
		callback?: () => any
	}

	declare interface GroupOptions {
		overflow?: string,
		height?: number,
		width?: number,
		posx?: number,
		posy?: number
	}

	declare interface TileMapOptions {
		sizex?: number,
		sizey?: number,
		height?: number,
		width?: number,
		posx?: number,
		posy?: number,
		buffer?: number
	}

	declare interface AnimationOptions {
		imageURL: string,
		numberOfFrame?: number,
		delta?: number,
		rate?: number,
		type?: number,
		distance?: number,
		offsetx?: number,
		offsety?: number
	}

	declare interface Animation {
		imageURL: string,
		numberOfFrame: number,
		delta: number,
		rate: number,
		type: number,
		distance: number,
		offsetx: number,
		offsety: number,
		new (options: AnimationOptions): Animation
	}

	declare interface GameQuery {
		ANIMATION_VERTICAL: number,
		ANIMATION_HORIZONTAL: number,
		ANIMATION_ONCE: number,
		ANIMATION_CALLBACK: number,
		ANIMATION_MULTI: number,
		ANIMATION_PINGPONG: number,
		Animation: Animation,
		keyTracker: boolean[],
		spriteCssClass: string,
		groupCssClass: string,
		tilemapCssClass: string,
		tileCssClass: string,
		tileTypePrefix: string,
		tileIdPrefix: string
	}

	declare interface JQuery {
		playground(options?: PlaygroundOptions): JQuery,
		collision(query?: any): JQuery,
		startGame(callback?: () => void): JQuery,
		pauseGame(): JQuery,
		resumeGame(callback?: () => void): JQuery,
		registerCallback(callback: () => void, rate: number): JQuery,
		registerCallback(callback: () => number, rate: number): JQuery,
		registerCallback(callback: () => boolean, rate: number): JQuery,
		clearScenegraph(): JQuery,
		clearAll(clearCallbacks?: boolean): JQuery,
		loadCallback(callback: (percent: number) => void): JQuery,
		rotate(angle: number, relative?: boolean): JQuery,
		scale(ratio: number, relative?: boolean): JQuery,
		flipv(flip?: boolean): JQuery,
		fliph(flip?: boolean): JQuery,
		xyz(x: number, y: number, z: number, relative?: boolean): JQuery,
		xyz(): Coordinate3D,
		xy(x: number, y: number, relative?: boolean): JQuery,
		xy(): Coordinate3D,
		x(value: number, relative?: boolean): JQuery,
		x(): number,
		y(value: number, relative?: boolean): JQuery,
		y(): number,
		z(value: number, relative?: boolean): JQuery,
		z(): number,
		wh(width: number, height: number, relative?: boolean): JQuery,
		wh(): Size,
		w(value: number, relative?: boolean): JQuery,
		w(): number,
		h(value: number, relative?: boolean): JQuery,
		h(): number,
		addSprite(name: string, options: SpriteOptions): JQuery,
		addGroup(name: string, options: GroupOptions): JQuery,
		addTilemap(
		name: string, tileDescription: number[][], animationList: Animation[], options: TileMapOptions
	): JQuery,
		addTilemap(
		name: string, tileDescription: number[][], animation: Animation, options: TileMapOptions
	): JQuery,
		addTilemap(
		name: string, tileDescription: (i: number, j: number) => number, animationList: Animation[], options: TileMapOptions
	): JQuery,
		addTilemap(
		name: string, tileDescription: (i: number, j: number) => number, animation: Animation, options: TileMapOptions
	): JQuery,
		gQ: GameQuery,
		setAnimation(animation: Animation, callback?: () => any): JQuery,
		setAnimation(animation: number, callback?: () => any): JQuery,
		setAnimation(): JQuery,
		pauseAnimation(): JQuery,
		resumeAnimation(): JQuery
	}

	declare interface JQueryStatic {
		playground(): JQuery,
		gQ: GameQuery,
		gameQuery: GameQuery
	}

			
}