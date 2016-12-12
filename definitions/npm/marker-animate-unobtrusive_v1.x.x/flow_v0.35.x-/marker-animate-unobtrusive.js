

declare module 'marker-animate-unobtrusive' {
		declare interface SlidingMarkerOptions {
		easing?: jQuery.easing.IEasingType,
		duration?: number,
		animateFunctionAdapter?: (
		marker: google.maps.Marker, destPoint: google.maps.LatLng, easing: "linear" | jQuery.easing.IEasingType, duration: number
	) => void
	}

		declare class SlidingMarker extends undefined$Marker {
		initializeGlobally(): void;
		constructor(opts?: SlidingMarkerOptions): this;
		setDuration(duration: number): void;
		getDuration(): number;
		setEasing(easing: jQuery.easing.IEasingType): void;
		getEasing(): jQuery.easing.IEasingType;
		getAnimationPosition(): google.maps.LatLng;
		setPositionNotAnimated(position: google.maps.LatLng | google.maps.LatLngLiteral): void
	}

	declare class MarkerWithGhost extends SlidingMarker {
		setGhostPosition(ghostPosition: google.maps.LatLng | google.maps.LatLngLiteral): void;
		getGhostPosition(): google.maps.LatLng;
		getGhostAnimationPosition(): google.maps.LatLng
	}

	
}

declare module 'easing' {
	declare type IEasingType = "swing" | "easeInQuad" | "easeOutQuad" | "easeInOutQuad" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic" | "easeInQuart" | "easeOutQuart" | "easeInOutQuart" | "easeInQuint" | "easeOutQuint" | "easeInOutQuint" | "easeInSine" | "easeOutSine" | "easeInOutSine" | "easeInExpo" | "easeOutExpo" | "easeInOutExpo" | "easeInCirc" | "easeOutCirc" | "easeInOutCirc" | "easeInElastic" | "easeOutElastic" | "easeInOutElastic" | "easeInBack" | "easeOutBack" | "easeInOutBack" | "easeInBounce" | "easeOutBounce" | "easeInOutBounce";

				
}

declare module 'SlidingMarker' {
					declare module.exports: undefined


}

declare module 'MarkerWithGhost' {
					declare module.exports: undefined


}