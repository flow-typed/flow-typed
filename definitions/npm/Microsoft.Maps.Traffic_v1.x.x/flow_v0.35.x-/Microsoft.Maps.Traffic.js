

declare module 'Microsoft.Maps.Traffic' {
					
}

declare module 'Traffic' {
				declare export class TrafficManager  {
		constructor(map: Map): this;
		hide(): void;
		hideFlow(): void;
		hideIncidents(): void;
		hideLegend(): void;
		show(): void;
		showFlow(): void;
		showIncidents(): void;
		showLegend(): void
	}

	
}