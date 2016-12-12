

declare module 'cordova-plugin-mapsforge' {
		declare interface Window {
		mapsforge: MapsforgePlugin
	}

	declare interface MapsforgePlugin {
		embedded: MapsforgeEmbeddedPlugin,
		cache: MapsforgeCachePlugin
	}

	declare interface MapsforgeEmbeddedPlugin {
		COLOR_DKGRAY: number | string,
		COLOR_CYAN: number | string,
		COLOR_BLACK: number | string,
		COLOR_BLUE: number | string,
		COLOR_GREEN: number | string,
		COLOR_RED: number | string,
		COLOR_WHITE: number | string,
		COLOR_TRANSPARENT: number | string,
		COLOR_YELLOW: number | string,
		MARKER_RED: number | string,
		MARKER_GREEN: number | string,
		MARKER_BLUE: number | string,
		MARKER_YELLOW: number | string,
		MARKER_BLACK: number | string,
		MARKER_WHITE: number | string,
		initialize(args: any[], success?: () => void, error?: (message: string) => void): void,
		show(success?: () => void, error?: (message: string) => void): void,
		hide(success?: () => void, error?: (message: string) => void): void,
		setCenter(
		lat: number, lng: number, success?: () => void, error?: (message: string) => void
	): void,
		setZoom(
		zoomLevel: number, success?: () => void, error?: (message: string) => void
	): void,
		setMaxZoom(maxZoom: number, success?: () => void, error?: (message: string) => void): void,
		setMinZoom(minZoom: number, success?: () => void, error?: (message: string) => void): void,
		setOfflineTileLayer(args: any[], success?: () => void, error?: (message: string) => void): void,
		setOnlineTileLayer(args: any[], success?: () => void, error?: (message: string) => void): void,
		addMarker(
		arg: any[], success?: (key: number) => void, error?: (message: string) => void
	): void,
		addPolyline(
		arg: any[], success?: (key: number) => void, error?: (message: string) => void
	): void,
		deleteLayer(key: number, success?: () => void, error?: (message: string) => void): void,
		onStart(success?: () => void, error?: (message: string) => void): void,
		onStop(success?: () => void, error?: (message: string) => void): void,
		onDestroy(success?: () => void, error?: (message: string) => void): void
	}

	declare interface MapsforgeCachePlugin {
		initialize(
		mapFilePath: string, success?: () => void, error?: (message: string) => void
	): void,
		getTile(
		args: any[], success?: (tilePath: string) => void, error?: (message: string) => void
	): void,
		setCacheEnabled(
		enabled: boolean, success?: () => void, error?: (message: string) => void
	): void,
		setExternalCache(
		external: boolean, success?: () => void, error?: (message: string) => void
	): void,
		setMapFile(
		absolutePath: string, success?: () => void, error?: (message: string) => void
	): void,
		setMaxCacheAge(
		milliseconds: number, success?: () => void, error?: (message: string) => void
	): void,
		setMaxCacheSize(
		sizeInMB: number, success?: () => void, error?: (message: string) => void
	): void,
		setMaxCacheSize(size: number, success?: () => void, error?: (message: string) => void): void,
		setCacheCleaningTrigger(
		sizeInMB: number, success?: () => void, error?: (message: string) => void
	): void,
		destroyCacheOnExit(
		destroy: boolean, success?: () => void, error?: (message: string) => void
	): void,
		onDestroy(success?: () => void, error?: (message: string) => void): void
	}

			
}