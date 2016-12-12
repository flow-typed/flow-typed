

declare module 'leaflet.awesome-markers' {
					
}

declare module 'AwesomeMarkers' {
		declare interface IconStatic {
		new (options: IconOptions): Icon,
		Default: {
		new (options?: IconOptions): Icon.Default,
		imagePath: string
	}
	}

	declare interface Icon {
		options: AwesomeMarkers.IconOptions
	}

	declare interface IconOptions {
		icon?: string,
		prefix?: "fa" | "glyphicon",
		markerColor?: "red" | "darkred" | "orange" | "green" | "darkgreen" | "blue" | "purple" | "darkpuple" | "cadetblue",
		iconColor?: "white" | "black" | string,
		spin?: boolean,
		extraClasses?: string
	}

	declare function icon(options: AwesomeMarkers.IconOptions): AwesomeMarkers.Icon

		
}