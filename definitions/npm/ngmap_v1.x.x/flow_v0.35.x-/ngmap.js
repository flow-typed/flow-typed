

declare module 'ngmap' {
					declare module.exports: undefined


}

declare module 'map' {
		declare interface IGetMapOptions {
		id?: string,
		timeout?: number
	}

	declare interface INgMapOptions {
		marker: {
		anchorPoint?: google.maps.Point,
		animation?: google.maps.Animation,
		clickable?: boolean,
		cursor?: string,
		draggable?: boolean,
		icon?: string | google.maps.Icon | google.maps.Symbol,
		label?: string,
		map?: google.maps.Map | google.maps.StreetViewPanorama,
		opacity?: number,
		optimized?: boolean,
		shape?: google.maps.MarkerShape,
		title?: string,
		visible?: boolean,
		zIndex?: number
	}
	}

	declare interface IObserveAndSetFunc {
		(val: any): void
	}

	declare interface INgMap {
		addMap(mapCtrl: Function | any[]): void,
		deleteMap(mapCtrl?: Function | any[]): void,
		getGeoLocation(
		address: string, options?: PositionOptions
	): angular.IPromise<google.maps.LatLng>,
		getMap(options?: IGetMapOptions): angular.IPromise<google.maps.Map>,
		initMap(mapId?: string): google.maps.Map,
		observeAndSet(attrName: string, object: Object): IObserveAndSetFunc,
		setStyle(el: HTMLElement): void
	}

	declare interface INgMapProvider {
		setDefaultOptions(options: INgMapOptions): void
	}

			
}