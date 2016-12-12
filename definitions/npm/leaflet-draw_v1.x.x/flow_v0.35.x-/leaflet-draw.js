

declare module 'leaflet-draw' {
					
}

declare module 'npm$namespace$L' {
		declare export interface MapOptions {
		drawControl?: boolean
	}

	declare export interface ControlStatic {
		Draw: Control.DrawStatic
	}

			
}

declare module 'Control' {
		declare export interface DrawStatic {
		new (options?: IDrawConstructorOptions): Draw
	}

	declare export interface IDrawConstructorOptions {
		position?: string,
		draw?: DrawOptions,
		edit: EditOptions
	}

	declare export interface DrawOptions {
		polyline?: DrawOptions.PolylineOptions,
		polygon?: DrawOptions.PolygonOptions,
		rectangle?: DrawOptions.RectangleOptions,
		circle?: DrawOptions.CircleOptions,
		marker?: DrawOptions.MarkerOptions
	}

	declare export interface EditOptions {
		featureGroup: FeatureGroup<ILayer>,
		edit?: DrawOptions.EditHandlerOptions,
		remove?: DrawOptions.DeleteHandlerOptions
	}

	declare export interface Draw {
		
	}

			
}

declare module 'DrawOptions' {
		declare export interface PolylineOptions {
		allowIntersection?: boolean,
		drawError?: any,
		guidelineDistance?: number,
		shapeOptions?: L.PolylineOptions,
		metric?: boolean,
		zIndexOffset?: number,
		repeatMode?: boolean
	}

	declare export interface PolygonOptions {
		showArea?: boolean
	}

	declare export interface RectangleOptions {
		shapeOptions?: L.PathOptions,
		repeatMode?: boolean
	}

	declare export interface CircleOptions {
		shapeOptions?: L.PathOptions,
		repeatMode?: boolean
	}

	declare export interface MarkerOptions {
		icon?: L.Icon,
		zIndexOffset?: number,
		repeatMode?: boolean
	}

	declare export interface EditHandlerOptions {
		selectedPathOptions?: L.PathOptions
	}

	declare export interface DeleteHandlerOptions {
		
	}

			
}

declare module 'DrawEvents' {
		declare export interface Created {
		layer: ILayer,
		layerType: string
	}

	declare export interface Edited {
		layers: LayerGroup<ILayer>
	}

	declare export interface Deleted {
		layers: LayerGroup<ILayer>
	}

	declare export interface DrawStart {
		layerType: string
	}

	declare export interface DrawStop {
		layerType: string
	}

	declare export interface EditStart {
		handler: string
	}

	declare export interface EditStop {
		handler: string
	}

	declare export interface DeleteStart {
		handler: string
	}

	declare export interface DeleteStop {
		handler: string
	}

			
}